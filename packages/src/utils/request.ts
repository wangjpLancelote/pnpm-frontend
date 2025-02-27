import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useUserStore } from "@/store/modules/user";
import { Message } from "@/utils/single-message";
import { getToken } from "@/utils/auth";
import { tansParams, blobValidate } from "@/utils/ruoyi";
import cache from "@/plugins/cache";
import { HttpStatus } from "@/enums/RespEnum";
import { errorCode } from "@/utils/errorCode";
import { LoadingInstance } from "element-plus/es/components/loading/src/loading";
import FileSaver from "file-saver";
import { getLanguage } from "@/lang";

let downloadLoadingInstance: LoadingInstance;
// 是否显示重新登录
export const isRelogin = { show: false };

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 对应国际化资源文件后缀
    config.headers["Content-Language"] = getLanguage();

    const isToken = (config.headers || {}).isToken === false;
    // 是否需要防止数据重复提交
    const isRepeatSubmit = (config.headers || {}).repeatSubmit === false;
    if (getToken() && !isToken) {
      config.headers["SzsicMgrAuth"] = "Bearer " + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // get请求映射params参数
    if (config.method === "get" && config.params) {
      let url = config.url + "?" + tansParams(config.params);
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }

    if (!isRepeatSubmit && (config.method === "post" || config.method === "put")) {
      const requestObj = {
        url: config.url,
        data: typeof config.data === "object" ? JSON.stringify(config.data) : config.data,
        time: new Date().getTime()
      };
      const sessionObj = cache.session.getJSON("sessionObj");
      if (sessionObj === undefined || sessionObj === null || sessionObj === "") {
        cache.session.setJSON("sessionObj", requestObj);
      } else {
        const s_url = sessionObj.url; // 请求地址
        const s_data = sessionObj.data; // 请求数据
        const s_time = sessionObj.time; // 请求时间
        const interval = 500; // 间隔时间(ms)，小于此时间视为重复提交
        if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
          const message = "数据正在处理，请勿重复提交";
          console.warn(`[${s_url}]: ` + message);
          return Promise.reject(new Error(message));
        } else {
          cache.session.setJSON("sessionObj", requestObj);
        }
      }
    }
    // FormData数据去请求头Content-Type
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }
    return config;
  },
  (error: any) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (res: AxiosResponse) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || HttpStatus.SUCCESS;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode["default"];
    // 二进制数据则直接返回
    if (res.request.responseType === "blob" || res.request.responseType === "arraybuffer") {
      return res.data;
    }
    if (code === 401) {
      // prettier-ignore
      if (!isRelogin.show) {
        isRelogin.show = true;
        ElMessageBox.confirm("登录状态已过期，您可以继续留在该页面，或者重新登录", "系统提示", {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          isRelogin.show = false;
          useUserStore().logout().then(() => {
            location.href = import.meta.env.VITE_APP_CONTEXT_PATH + "index";
          });
        }).catch(() => {
          isRelogin.show = false;
        });
      }
      return Promise.reject("无效的会话，或者会话已过期，请重新登录。");
    } else if (code === HttpStatus.SERVER_ERROR) {
      console.log(msg);
      Message({ message: msg, type: "error" });
      return Promise.reject(new Error(msg));
    } else if (code === HttpStatus.WARN) {
      Message({ message: msg, type: "warning" });
      return Promise.reject(new Error(msg));
    } else if (code !== HttpStatus.SUCCESS) {
      ElNotification.error({ title: msg });
      return Promise.reject("error");
    } else {
      return Promise.resolve(res.data);
    }
  },
  (error: any) => {
    const { data, status } = error.response;
    //sso拦截
    if (status === 401) {
      console.log("%c" + data.msg, "color:#1682e6");
      // return resetLogin();
    }
    if (data) {
      const { msg } = data;
      const _data = data.data;
      let message = msg || _data;
      if (message && message.includes("Proxy error")) {
        message = "后端接口连接异常";
      }
      console.log(decodeURIComponent(message));
      Message({
        dangerouslyUseHTMLString: true,
        message: decodeURIComponent(message),
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject(error);
    }

    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Message({ message: message, type: "error", duration: 5 * 1000 });
    return Promise.reject(error);
  }
);

// 通用下载方法
export function download(url: string, params: any, fileName: string) {
  downloadLoadingInstance = ElLoading.service({ text: "正在下载数据，请稍候", background: "rgba(0, 0, 0, 0.7)" });
  // prettier-ignore
  return service.post(url, params, {
    transformRequest: [
      (params: any) => {
        return tansParams(params);
      }
    ],
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    responseType: "blob"
  }).then(async (resp: any) => {
    const isLogin = blobValidate(resp);
    if (isLogin) {
      const blob = new Blob([resp]);
      FileSaver.saveAs(blob, fileName);
    } else {
      const resText = await resp.data.text();
      const rspObj = JSON.parse(resText);
      const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode["default"];
    }
    downloadLoadingInstance.close();
  }).catch((r: any) => {
    console.error(r);
    ElMessage.error("下载文件出现错误，请联系管理员！");
    downloadLoadingInstance.close();
  });
}

// 导出 axios 实例
export default service;
