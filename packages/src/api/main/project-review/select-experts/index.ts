import request from '@/utils/request';

// 查询评审项目列表
export const GetProjectGroupList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ProjectGroupQuery/GetProjectGroupList',
    method: 'get',
    params: query
  });
};
// 头部信息提醒
export const GroupList = (query: any) => {
  return request({
    url: '/ProjectReview/SelectSpecialistView/GroupList',
    method: 'get',
    params: query
  });
};
// 点击申请随机遴选查询是否有暂存数据
export const GetSelectTaskDto = (query: any) => {
  return request({
    url: '/ProjectReview/SelectSpecialistCmd/GetSelectTaskDto',
    method: 'get',
    params: query
  });
};
// 点击申请随机遴选查询是否有暂存数据
export const GetAllDomainList = () => {
  return request({
    url: '/DataDictionary/api/DataDictionaryQuery/GetAllDomainList',
    method: 'get'
  });
};
// 点击申请随机遴选查询是否有暂存数据
export const SubmitSelectSpecialistTask = (query: any) => {
  return request({
    url: '/ProjectReview/SelectSpecialistCmd/SubmitSelectSpecialistTask',
    method: 'post',
    data: query
  });
};
// 查看遴选进度
export const GetActionLog = (query: any) => {
  return request({
    url: '/CommonManage/api/CommonManageQuery/GetActionLog',
    method: 'get',
    params: query
  });
};
// 定向选取信息列表查询
export const GetGroupDirectSelectSpecialistList = (query: any) => {
  return request({
    url: '/ProjectReview/api/SelectSpecialistQuery/GetGroupDirectSelectSpecialistList',
    method: 'get',
    params: query
  });
};
// 定向选取信息查询
export const GroupDirectSelectSpecialist = (query: any) => {
  return request({
    url: '/ProjectReview/SelectSpecialistView/GroupDirectSelectSpecialist',
    method: 'get',
    params: query
  });
};

