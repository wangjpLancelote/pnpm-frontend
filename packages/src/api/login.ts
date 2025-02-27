import request from "@/utils/request";
import { mockRequest } from "@/utils/mock.ts";
import { MockLoginData, MockUserInfoData } from "./mockUser.ts";

// 登录方法
export function login(data: any) {
  // return request({
  //   url: '/auth/login',
  //   headers: {
  //     isToken: false,
  //     repeatSubmit: false,
  //   },
  //   method: 'post',
  //   data: { username, password, code, uuid },
  // })
  return mockRequest(MockLoginData);
}

// 注册方法
export function register(data: any) {
  return request({
    url: "/auth/register",
    headers: {
      isToken: false
    },
    method: "post",
    data: data
  });
}

// 刷新方法
export function refreshToken() {
  return request({
    url: "/auth/refresh",
    method: "post"
  });
}

// 获取用户详细信息
export function getInfo() {
  // return request({
  //   url: '/system/user/getInfo',
  //   method: 'get',
  // })

  return mockRequest(MockUserInfoData);
}

// 退出方法
export function logout() {
  return request({
    url: "/auth/logout",
    method: "delete"
  });
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: "/code",
    headers: {
      isToken: false
    },
    method: "get",
    timeout: 20000
  });
}
