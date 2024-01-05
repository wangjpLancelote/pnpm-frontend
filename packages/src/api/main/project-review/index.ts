import request from '@/utils/request';
// 查询首页列表
export const GetProjectBatchList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ProjectBatchQuery/GetProjectBatchList',
    method: 'get',
    params: query
  });
};
// 通过id查评审批次信息
export const UpdateProjectBatch = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectBatchView/UpdateProjectBatch',
    method: 'get',
    params: query
  });
};
// 扶持方式列表
export const GetSupportTypeList = () => {
  return request({
    url: '/CommonManage/api/CommonManageQuery/GetSupportTypeList',
    method: 'get'
  });
};
// 区发改局下拉列表
export const GetProjectSourcesTwoLevelList = () => {
  return request({
    url: '/ProjectReview/api/ProjectBatchQuery/GetProjectSourcesTwoLevelList',
    method: 'get'
  });
};
// 产业领域下拉列表
export const GetMainIndustryList = () => {
  return request({
    url: '/DataDictionary/api/DataDictionaryQuery/GetMainIndustryList',
    method: 'get'
  });
};
// 保存编辑
export const SaveProjectBatch = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectBatchCmd/UpdateProjectBatch',
    method: 'post',
    data: query
  });
};
// 删除项目
export const DeleteProjectBatch = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectBatchCmd/DeleteProjectBatch',
    method: 'post',
    data: query
  });
};
//获取会评准备头部
export const ReviewPrepare = (query: any) => {
  return request({
    url: '/ProjectReview/BaseView/ReviewPrepare',
    method: 'get',
    params: query
  });
};
//=====================议程编排===========================
// 首页列表
export const GetProjectGroupList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ProjectGroupQuery/GetProjectGroupList',
    method: 'get',
    params: query
  });
};
// 详情页头部数据
export const ProjectAgenda = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectAgendaView/ProjectAgenda',
    method: 'get',
    params: query
  });
};
// 项目议程列表
export const GetProjectAgendaList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ProjectAgendaQuery/GetProjectAgendaList',
    method: 'get',
    params: query
  });
};
// 拖动会议
export const SortingAgenda = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectAgendaCmd/SortingAgenda',
    method: 'post',
    data: query
  });
};
// 确认修改时间
export const UpdateAgenda = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectAgendaCmd/UpdateAgenda',
    method: 'post',
    data: query
  });
};
//=====================分配评分表===========================
// 项目列表
export const GetProjectGradesAssignList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ProjectGradesQuery/GetProjectGradesAssignList',
    method: 'get',
    params: query
  });
};
// 综合评分表
export const ProjectGradesAssign = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGradesView/ProjectGradesAssign',
    method: 'get',
    params: query
  });
};
// 获取评分表数组
export const SelectGradesRole = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGradesView/SelectGradesRole',
    method: 'post',
    data: query
  });
};
// 选择评分表
export const AssignBatchGradesRole = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGradesCmd/AssignBatchGradesRole',
    method: 'post',
    data: query
  });
};
// 查询财务评分表或者技术评分表
export const GetGradesTemplateList = (query: any) => {
  return request({
    url: '/ReviewGrades/api/ReviewGradesQuery/GetGradesTemplateList',
    method: 'get',
    params: query
  });
};
// 查询选择的财务或者技术评分表id
export const SelectGradesTemplate = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGradesView/SelectGradesTemplate',
    method: 'get',
    params: query
  });
};
// 选择财务或者技术评分表
export const AssignProjectGradesTemplate = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGradesCmd/AssignProjectGradesTemplate',
    method: 'post',
    data: query
  });
};
// 批量选择财务或者技术评分表
export const AssignProjectGradesBulk = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGradesCmd/AssignProjectGradesBulk',
    method: 'post',
    data: query
  });
};
// 预览评分表基本信息查询
export const PreviewGradesTemplate = (query: any) => {
  return request({
    url: '/ReviewGrades/ReviewGradesView/PreviewGradesTemplate',
    method: 'get',
    params: query
  });
};
// 预览项目打分数据查询
export const GetGradesItemList = (query: any) => {
  return request({
    url: '/ReviewGrades/api/ReviewGradesQuery/GetGradesItemList',
    method: 'get',
    params: query
  });
};
// 预览评审意见数据查询
export const GetGradesOpinionList = (query: any) => {
  return request({
    url: '/ReviewGrades/api/ReviewGradesQuery/GetGradesOpinionList',
    method: 'get',
    params: query
  });
};
//=====================通用===========================
// 点击下一步到达下一阶段
export const UpdateBatchStatus = (query: any) => {
  return request({
    url: '/ProjectReview/BaseCmd/UpdateBatchStatus',
    method: 'post',
    data: query
  });
};
