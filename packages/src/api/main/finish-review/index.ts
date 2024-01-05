import request from '@/utils/request';

/** 项目评审结果 */
// 查询小组项目评审结果列表
export const GetProjectReviewResultList = (query: any) => {
  return request({
    url: '/ReviewManager/api/ReviewManagerQuery/GetProjectReviewResultList',
    method: 'get',
    params: query
  });
};

// 获取小组评审结果信息
export const SubmitGroupReviewResult = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/SubmitGroupReviewResult',
    method: 'get',
    params: query
  });
};
export const ReadyToFinish = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/ReadyToFinish',
    method: 'get',
    params: query
  });
};

// 确认完成/取消评审
export const CancelReview = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/CancelReview',
    method: 'post',
    data: query
  });
};

// 项目评审结果的下一步
export const FinishGroupReview = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/FinishGroupReview',
    method: 'post',
    data: query
  });
};

// 评分详情基本信息
export const ViewProjectReviewDetail = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/ViewProjectReviewDetail',
    method: 'get',
    params: query
  });
};

// 评分详情列表数据
export const GetProjectReviewList = (query: any) => {
  return request({
    url: '/ReviewManager/api/ReviewManagerQuery/GetProjectReviewList',
    method: 'get',
    params: query
  });
};

// 评分详情-完成评审
export const FinishProjectReview = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/FinishProjectReview',
    method: 'post',
    data: query
  });
};

// 评分详情-资料核查
export const SubmitMatchGuide = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/SubmitMatchGuide',
    method: 'post',
    data: query
  });
};

// 评分详情-撤回评分表
export const WithdrawReviewGrades = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/WithdrawReviewGrades',
    method: 'post',
    data: query
  });
};

/** 确认专家评审费用 */
// 专家评审费用列表
export const GetSpecialistReviewFeeList = (query: any) => {
  return request({
    url: '/ReviewManager/api/ReviewManagerQuery/GetSpecialistReviewFeeList',
    method: 'get',
    params: query
  });
};

// 获取专家评审费用信息
export const SubmitSpecialistReviewFee = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/SubmitSpecialistReviewFee',
    method: 'get',
    params: query
  });
};

// 确认专家评审费用的下一步
export const SubmitReviewFee = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/SubmitReviewFee',
    method: 'post',
    data: query
  });
};

/** 完成小组会评 */
// 会评信息
export const ReviewResult = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/ReviewResult',
    method: 'get',
    params: query
  });
};
