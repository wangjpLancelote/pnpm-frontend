import request from '@/utils/request';

// 评审费用管理列表
export const keyProjectDynamicSearchAdd = (query: any) => {
  return request({
    url: '/review/keyProjectDynamicSearch/add',
    method: 'post',
    data: query
  });
};
// 评审费用管理列表
export const keyProjectDynamicSearchList = () => {
    return request({
      url: '/review/keyProjectDynamicSearch/list',
      method: 'get',
    });
  };
  // 评审费用管理列表
export const keyProjectDynamicSearchEdit = (query: any) => {
  return request({
    url: '/review/keyProjectDynamicSearch/edit',
    method: 'post',
    data: query
  });
};
//删除筛选列表
export const keyProjectDynamicSearchRemove = (query: any) => {
  return request({
    url: `/review/keyProjectDynamicSearch/remove/` +query,
    method: 'get',
  });
};
//产讯列表
export const keyProjectDynamicSearchQueryList = (query: any) => {
  return request({
    url: `/review/keyProjectLibrary/list`,
    method: 'get',
    params:query
  });
};
//删除筛选列表
export const keyProjectLibraryDetail = (query: any) => {
  return request({
    url: `/review/keyProjectLibrary/detail/` +query,
    method: 'get',
  });
};
//删除筛选列表
export const keyProjectLibraryEdit = (query: any) => {
  return request({
    url: `/review/keyProjectLibrary/edit`,
    method: 'post',
    data:query
  });
};