import request from '@/utils/request';

// 判断是否报销专家费用
export const ReviewReportIndex = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewReportView/ReviewReportIndex',
    method: 'get',
    params: query
  });
};

// 确认已报销专家费用
export const HasSendReviewFee = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewReportCmd/HasSendReviewFee',
    method: 'post',
    data: query
  });
};

// 获取评审报告列表
export const GetReviewReporttList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ReviewReportQuery/GetReviewReportList',
    method: 'get',
    params: query
  });
};

// 上传评审报告附件
export const UploadReviewReportFile = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewReportCmd/UploadReviewReportFile',
    method: 'post',
    data: query
  });
};

// 删除评审报告附件
export const DelReviewReportFile = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewReportCmd/DelReviewReportFile',
    method: 'post',
    data: query
  });
};

// 暂存评审报告信息
export const SaveApply = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewReportCmd/SaveApply',
    method: 'post',
    data: query
  });
};

// 保存评审报告信息
export const SubmitApply = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewReportApi/SubmitApply',
    method: 'post',
    data: query
  });
};

// 删除未提交的评审报告
export const DeleteReport = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewReportCmd/DeleteReport',
    method: 'post',
    data: query
  });
};

// 提交审核后的流程办理信息
export const GetReviewStatusList = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewReportApi/GetReviewStatusList',
    method: 'post',
    data: query
  });
};

// 获取评审报告列表
export const SubmitApplyToOA = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewReportView/SubmitApplyToOA',
    method: 'get',
    params: query
  });
};
