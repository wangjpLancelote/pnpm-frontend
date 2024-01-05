import request from '@/utils/request';

// 会评结果头部表格
export const ReviewResultViewIndex = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewResultView/Index',
    method: 'get',
    params: query
  });
};
// 会评结果项目列表
export const GetReviewResultList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ReviewResultQuery/GetReviewResultList',
    method: 'get',
    params: query
  });
};
//查看专家签到表
export const ExpertCheckInTable = (query: any) => {
  return request({
    url: '/ProjectReview/ReivewArchiveView/ExpertCheckinTable',
    method: 'get',
    params: query
  });
};
//查看专家签到表
export const GetSignInList = (query: any) => {
  return request({
    url: '/ReviewManager/api/ReviewManagerQuery/GetSignInList',
    method: 'get',
    params: query
  });
};
//查看专家星级
export const GetGroupSpecialistReviewLevelList = (query: any) => {
  return request({
    url: '/ReviewManager/api/ReviewManagerQuery/GetGroupSpecialistReviewLevelList',
    method: 'get',
    params: query
  });
};
//查看专家星级
export const SubmitSpecialistReviewFee = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/SubmitSpecialistReviewFee',
    method: 'get',
    params: query
  });
};
//专家费用数组
export const GetSpecialistReviewFeeList = (query: any) => {
  return request({
    url: '/ReviewManager/api/ReviewManagerQuery/GetSpecialistReviewFeeList',
    method: 'get',
    params: query
  });
};
//导出专家费用
export const ExportFeeExcel = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewResultCmd/ExportFeeExcel',
    method: 'get',
    params: query,
    responseType: 'blob'
  });
};
//获取评分表名称
export const ExportGradesForSpireDoc = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewResultView/ExportGradesForSpireDoc',
    method: 'get',
    params: query
  });
};
// 导出评分表
export const ExportFile = (query: any) => {
  return request({
    url: '/CommonManage/ExportDownloadFile/ExportFile',
    method: 'post',
    params: query,
    responseType: 'blob'
  });
};
//获取项目评分的专家列表
export const GetProjectReviewStoreDetailDtoList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ReviewResultQuery/GetProjectReviewStorcDetailDtoList',
    method: 'get',
    params: query
  });
};
//获取银行列表
export const SupplementaryExpertBankCard = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/SupplementaryExpertBankCard',
    method: 'get',
    params: query
  });
};
//提交银行卡信息
export const AjaxSupplementaryExpertBankCard = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/AjaxSupplementaryExpertBankCard',
    method: 'post',
    params: query
  });
};
//预览项目评分表头部信息
export const ProjectReviewGrades = (query: any) => {
  return request({
    url: '/SpecialistReview/SpecialistReviewView/ProjectReviewGrades',
    method: 'get',
    params: query
  });
};
//获取项目打分数据
export const GetGradesItemList = (query: any) => {
  return request({
    url: '/SpecialistReview/api/SpecialistReviewQuery/GetGradesItemList',
    method: 'get',
    params: query
  });
};
//获取评审意见数据
export const GetGradesOpinionList = (query: any) => {
  return request({
    url: '/SpecialistReview/api/SpecialistReviewQuery/GetGradesOpinionList',
    method: 'get',
    params: query
  });
};
//获取项目评审结果
export const CreditLoanProjectReviewResult = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/CreditLoanProjectReviewResult',
    method: 'get',
    params: query
  });
};
//综合意见专家数组
export const GetOpinionSpecialistSignList = (query: any) => {
  return request({
    url: '/ReviewManager/api/ReviewManagerQuery/GetOpinionSpecialistSignList',
    method: 'get',
    params: query
  });
};
//综合意见数据
export const ProjectReviewOpinion = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/ProjectReviewOpinion',
    method: 'get',
    params: query
  });
};
//导出意见
export const ExportProjectOpinion = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewResultCmd/ExportProjectOpinion',
    method: 'get',
    params: query,
    responseType: 'blob'
  });
};
//信用贷款类导会评结果
export const ExportReviewResultCreditLoan = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewResultCmd/ExportReviewResultCreditLoan',
    method: 'get',
    params: query,
    responseType: 'blob'
  });
};
//导会评结果
export const ExportReviewResult = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewResultCmd/ExportReviewResult',
    method: 'get',
    params: query,
    responseType: 'blob'
  });
};
// 导出会议纪要
export const ExportMeetingNote = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewResultCmd/ExportMeetingNote',
    method: 'get',
    params: query,
    responseType: 'blob'
  });
};
// 导出会议纪要
export const ExpertScore = (query: any) => {
  return request({
    url: '/ProjectReview/ReivewArchiveView/ExpertScore',
    method: 'get',
    params: query
  });
};
