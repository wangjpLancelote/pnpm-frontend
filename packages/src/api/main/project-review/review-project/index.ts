import request from '@/utils/request';

// 查询评审项目列表
export const GetIsSelectedProjectBaseInfoList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ReviewProjectQuery/GetIsSelectedProjectBaseInfoList',
    method: 'get',
    params: query
  });
};

// 查询评审项目列表-移除项目
export const RemoveProjectFromReviewBatch = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewProjectCmd/RemoveProjectFromReviewBatch',
    method: 'post',
    data: query
  });
};

// 项目类别下拉框数据
export const GetProjectCategory = (query: any) => {
  return request({
    url: '/CommonManage/api/CommonManageQuery/GetProjectCategory',
    method: 'get',
    params: query
  });
};

// 获取待添加列表
export const GetPendingReviewProjectList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ReviewProjectQuery/GetPendingReviewProjectList',
    method: 'get',
    params: query
  });
};

// 待添加列表-添加项目
export const AddProjectToReviewBatch = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewProjectCmd/AddProjectToReviewBatch',
    method: 'post',
    data: query
  });
};

// 导出项目联系人信息
export const ExportContact = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewProjectCmd/ExportContact',
    method: 'get',
    params: query,
    responseType: 'blob'
  });
};
