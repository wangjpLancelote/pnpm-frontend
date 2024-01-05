import request from '@/utils/request';

// 查询项目库列表
export const getProjectList = (query: any) => {
  return request({
    url: '/ProjectLibrary/api/ProjectLibraryQuery/GetQueryProjectLibraryList',
    method: 'get',
    params: query
  });
};

/**
 * 项目来源
 * @param query {}
 * @returns []
 */
export const getProjectResourceList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ProjectBatchQuery/GetProjectSource',
    method: 'get',
    params: query
  });
};

/**
 * 产业项目list
 * @param query {}
 * @returns []
 */
export const getProjectIndustryList = (query: any) => {
  return request({
    url: '/CommonManage/api/CommonManageQuery/GetIndustryCategory',
    method: 'get',
    params: query
  });
};

/**
 * 项目类别
 * @param query {}
 * @returns []
 */
export const getProjectCategoryList = (query: any) => {
  return request({
    url: '/CommonManage/api/CommonManageQuery/GetProjectCategory',
    method: 'get',
    params: query
  });
};
