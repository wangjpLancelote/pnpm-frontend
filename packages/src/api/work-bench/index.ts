import request from '@/utils/request';

// 查询评审项目列表
export const GetBacklogList = (query: any) => {
  return request({
    url: '/Approval/api/ApprovalQuery/GetBacklogList',
    method: 'get',
    params: query
  });
};
// 查询评审项目列表
export const GetHavedone = (query: any) => {
  return request({
    url: '/Approval/api/ApprovalQuery/GetHavedone',
    method: 'get',
    params: query
  });
};
