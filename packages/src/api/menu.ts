import request from "@/utils/request";
import { mockRequest } from "@/utils/mock.ts";
import { MockRoutersData } from "./mockUser.ts";

// 获取路由
export const getRouters = () => {
  // return request({
  //   url: '/system/menu/getRouters',
  //   method: 'get',
  // })
  return mockRequest(MockRoutersData);
};
