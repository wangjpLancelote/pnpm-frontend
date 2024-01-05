import request from '@/utils/request';

// 准备完成基本信息
export const PrepareResult = (query: any) => {
  return request({
    url: '/ProjectReview/ReadyToReviewView/PrepareResult',
    method: 'get',
    params: query
  });
};
// 准备完成项目列表
export const GetProjectReviewList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ReadyToReviewQuery/GetProjectReviewList/',
    method: 'get',
    params: query
  });
};
// 准备完成专家列表
export const GetSelectOfExpertsList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ReadyToReviewQuery/GetSelectOfExpertsList/',
    method: 'get',
    params: query
  });
};
// 导出项目评分表
export const ExportGradesForSpireDoc = (query: any) => {
  return request({
    url: '/ProjectReview/ReadyToReviewView/ExportGradesForSpireDoc',
    method: 'get',
    params: query
    // responseType: 'blob'
  });
};
// 准备完成专家列表
export const AttachmentsPackageZip = (query: any) => {
  return request({
    url: '/CommonManage/CommonManageCmd/AjaxExportBatchArojectAttachmentsPackageZip',
    method: 'post',
    data: query
  });
};
// 导出专家签名签到表
export const ExportSpecialistSignTab = (query: any) => {
  return request({
    url: '/ProjectReview/ReadyToReviewView/ExportSpecialistSignTab',
    method: 'get',
    params: query
  });
};
// 导出企业签到表
export const ExportEnterpriseSignTab = (query: any) => {
  return request({
    url: '/ProjectReview/ReadyToReviewView/ExportEnterpriseSignTab',
    method: 'get',
    params: query
  });
};

