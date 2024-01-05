import request from '@/utils/request';

// 查询评审项目列表
export const GetAllProjectRecord = (query: any) => {
  return request({
    url: '/MonitorReview/api/MonitorRecordQuery/GetAllProjectRecord',
    method: 'get',
    params: query
  });
};
// 查询分组数据
export const typeGroup = () => {
  return request({
    url: '/review/projectDataMonitor/typeGroup',
    method: 'get'
  });
};
// 数据监控查询列表
export const projectDataMonitorList = (query: any) => {
  return request({
    url: '/review/projectDataMonitor/list',
    method: 'get',
    params: query
  });
};

// 监测法律依据
export const monitorIllegalLaws = (batchId: any) => {
  return request({
    url: '/review/monitor/monitorIllegalLaws/' + batchId,
    method: 'get'
  });
};

// 监测分组数量及方式
export const monitorNumAndType = (batchId: any) => {
  return request({
    url: '/review/monitor/monitorNumAndType/' + batchId,
    method: 'get'
  });
};

// 监测评审程序
export const monitorReviewProgram = (projectId: any) => {
  return request({
    url: '/review/monitor/monitorReviewProgram/' + projectId,
    method: 'get'
  });
};

// 查询项目异常监控列表
export const projectMonitorList = (query: any) => {
  return request({
    url: '/review/projectMonitorLog/list',
    method: 'get',
    params: query
  });
};

// 获取项目异常监控详细信息
export const projectMonitorInfo = (id: any) => {
  return request({
    url: '/review/projectMonitorLog/' + id,
    method: 'get'
  });
};

// 触发监控补录材料异常
export const additionalRecording = (query: any) => {
  return request({
    url: '/review/projectMonitorLog/additionalRecording',
    method: 'post',
    data: query
  });
};

// 综合监察列表
export const comprehensiveList = (query: any) => {
  return request({
    url: '/review/projectMonitorLog/comprehensive/list',
    method: 'get',
    params: query
  });
};

// 综合监察-查看详情
export const comprehensiveInfo = (query: any) => {
  return request({
    url: '/review/projectMonitorLog/comprehensive/detail',
    method: 'get',
    params: query
  });
};
// 查询部门评审项目数
export const getDeptTotalProjectNumb = (query: any) => {
  return request({
    url: '/review/monitor/deptKPI/getDeptTotalProjectNumb',
    method: 'get',
    params: query
  });
};
// 部门绩效列表
export const deptKPIList = (query: any) => {
  return request({
    url: '/review/monitor/deptKPI/list',
    method: 'get',
    params: query
  });
};
// 部门绩效列表
export const getDefaultDept = () => {
  return request({
    url: '/review/monitor/deptKPI/getDefaultDept',
    method: 'get'
  });
};
