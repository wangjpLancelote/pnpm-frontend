import request from '@/utils/request';

// 查询评审项目列表
export const GetSelectTaskList = (query: any) => {
  return request({
    url: '/SelectTask/api/SelectTaskQuery/GetSelectTaskList',
    method: 'get',
    params: query
  });
};
// 选取专家详细信息
export const GroupSelectSpecialst = (query: any) => {
  return request({
    url: '/SelectTask/SelectTaskView/GroupSelectSpecialst',
    method: 'get',
    params: query
  });
};
// 选取专家详细信息
export const GetGroupSpecialistList = (query: any) => {
  return request({
    url: '/ProjectReview/api/SelectSpecialistQuery/GetGroupSpecialistList',
    method: 'get',
    params: query
  });
};
// 选取专家详细信息
export const GetGroupSelectedSummary = (query: any) => {
  return request({
    url: '/SelectTask/api/SelectTaskQuery/GetGroupSelectedSummary',
    method: 'get',
    params: query
  });
};
// 出席状态修改
export const SubmitAttendStatus = (query: any) => {
  return request({
    url: '/ProjectReview/SelectSpecialistCmd/SubmitAttendStatus',
    method: 'post',
    data: query
  });
};
// 恢复出席状态
export const AjaxSpcialistRestoreSelection = (query: any) => {
  return request({
    url: '/ProjectReview/SelectSpecialistCmd/AjaxSpcialistRestoreSelection',
    method: 'post',
    data: query
  });
};
// 修改时间
export const UpdateSpecialistAttendTime = (query: any) => {
  return request({
    url: '/ProjectReview/SelectSpecialistCmd/UpdateSpecialistAttendTime',
    method: 'post',
    data: query
  });
};
// 修改备注
export const AjaxSpcialistAttendNote = (query: any) => {
  return request({
    url: '/ProjectReview/SelectSpecialistCmd/AjaxSpcialistAttendNote',
    method: 'post',
    data: query
  });
};
// 遴选专家
export const SumitSelectSpecialist = (query: any) => {
  return request({
    url: '/SelectTask/SelectTaskCmd/SumitSelectSpecialist',
    method: 'post',
    data: query
  });
};
// 完成遴选
export const FinishSelectSpecialistTask = (query: any) => {
  return request({
    url: '/SelectTask/SelectTaskCmd/FinishSelectSpecialistTask',
    method: 'post',
    data: query
  });
};
// 发送短信
export const SendReviewInfoSms = (query: any) => {
  return request({
    url: '/SmsManage/SmsManageCmd/SendReviewInfoSms',
    method: 'post',
    data: query
  });
};
//退回遴选任务
export const RejectTask = (query: any) => {
  return request({
    url: '/SelectTask/SelectTaskCmd/RejectTask',
    method: 'post',
    data: query
  });
};
//获取同事列表
export const GetAssignUserList = () => {
  return request({
    url: '/SelectTask/api/SelectTaskQuery/GetAssignUserList',
    method: 'get'
  });
};
//确认分配
export const SubmitAssign = (query: any) => {
  return request({
    url: '/SelectTask/SelectTaskCmd/SubmitAssign',
    method: 'post',
    data: query
  });
};
//查看会评专家账号信息
export const ViewPwd = (query: any) => {
  return request({
    url: '/ProjectReview/SelectSpecialistView/ViewPwd',
    method: 'post',
    data: query
  });
};
