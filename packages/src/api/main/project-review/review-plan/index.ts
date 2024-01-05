import request from '@/utils/request';

// 查询每个分组已选专家列表
export const GetGroupDirectSelectSpecialistList = (query: any) => {
  return request({
    url: '/ProjectReview/api/SelectSpecialistQuery/GetGroupDirectSelectSpecialistList',
    method: 'get',
    params: query
  });
};

// 定向选取专家的专家列表
export const GetDirectedSelectionExpertList = (query: any) => {
  return request({
    url: '/ProjectReview/api/SelectSpecialistQuery/GetDirectedSelectionExpertList',
    method: 'get',
    params: query
  });
};

// 选取专家接口
export const SubmitDirectedSelectionExpert = (query: any) => {
  return request({
    url: '/ProjectReview/SelectSpecialistCmd/SubmitDirectedSelectionExpert',
    method: 'post',
    data: query
  });
};

// 删除已选专家
export const RemoveGroupSpecialist = (query: any) => {
  return request({
    url: '/ProjectReview/SelectSpecialistCmd/RemoveGroupSpecialist',
    method: 'post',
    data: query
  });
};

// 获取评审方案信息
export const ExpertReviewCostBudget = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewSchemeView/ExpertReviewCostBudget',
    method: 'get',
    params: query
  });
};

// 保存评审方案
export const SaveReviewScheme = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewSchemeCmd/AjaxSaveReviewScheme',
    method: 'post',
    data: query
  });
};

// 预览评审方案
export const BrowseReviewScheme = (query: any) => {
  return request({
    url: '/v1/ProjectReview/ReviewSchemeView/BrowseReviewScheme',
    method: 'get',
    params: query
  });
};

// 上传评审方案
export const UploadFormalReviewScheme = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewSchemeCmd/UploadFormalReviewScheme',
    method: 'post',
    data: query
  });
};

// 申请审核信息回显
export const ApplicationForAudit = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewSchemeView/ApplicationForAudit',
    method: 'get',
    params: query
  });
};

// 确定申请审核
export const ApplyApprove = (ReviewSchemeID: any, query: any) => {
  return request({
    url: '/ProjectReview/ReviewSchemeApi/ApplyApprove?ReviewSchemeID=' + ReviewSchemeID,
    method: 'post',
    data: query
  });
};

// 评审方案审核状态信息
export const GetReviewStatusDto = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewSchemeApi/GetReviewStatusDto',
    method: 'post',
    data: query
  });
};
