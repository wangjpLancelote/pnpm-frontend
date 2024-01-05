import request from '@/utils/request';

// 查询重点项目库列表
export const getKeyProjectList = (query: any) => {
  return request({
    url: '/review/keyProjectLibrary/list',
    method: 'get',
    params: query
  });
};

// 添加为重点项目， 参数：projectId
export const addKeyProject = (params: string) => {
  return request({
    url: '/review/keyProjectLibrary/add/' + params,
    method: 'post'
  });
};

// 移除为重点项目, 参数：projectId
export const removeKeyProject = (params: string) => {
  return request({
    url: '/review/keyProjectLibrary/remove/' + params,
    method: 'delete'
  });
};

// 查看详情
export const detail = (params: string) => {
  return request({
    url: '/review/keyProjectLibrary/detail/' + params,
    method: 'get'
  });
};

// 编辑详细信息
export const edit = (query: any) => {
  return request({
    url: '/review/keyProjectLibrary/edit',
    method: 'post',
    data: query
  });
};

/** 导出按钮操作 */
export const handleExport = (params: any) => {
  return request({
    url: '/review/keyProjectLibrary/export',
    method: 'post',
    data: params,
    responseType: 'blob'
  });
};

/** 导入按钮操作 */
export const handleImport = (params: any) => {
  return request({
    url: '/review/keyProjectLibrary/importData',
    data: params,
    method: 'post'
  });
};

/** 下载模板操作 */
export const importTemplate = () => {
  return request({
    url: '/review/keyProjectLibrary/importTemplate',
    method: 'post',
    responseType: 'blob'
  });
};

// 获取列表已关注订阅字段列表
export const getFollow = (params: string) => {
  return request({
    url: '/review/keyProjectLibraryFollow/filedList/' + params,
    method: 'get'
  });
};

// 添加关注订阅列表
export const follow = (query: any) => {
  return request({
    url: '/review/keyProjectLibraryFollow/follow',
    method: 'post',
    data: query
  });
};

// 添加重点项目库用户自定义字段
export const setField = (query: any) => {
  return request({
    url: '/review/keyProjectLibraryField/setField',
    method: 'post',
    data: query
  });
};

//获取重点项目库用户自定义字段列表
export const getFieldList = () => {
  return request({
    url: '/review/keyProjectLibraryField/getFieldList',
    method: 'get'
  });
};

// 查询确认通知列表
export const getNewsList = (query: any) => {
  return request({
    url: '/review/sysNoticeLogger/list',
    method: 'get',
    params: query
  });
};

// 获取确认通知详细信息
export const getNewsInfo = (id: any) => {
  return request({
    url: '/review/sysNoticeLogger/' + id,
    method: 'get'
  });
};

// 确认通知
export const confirmNews = (query: any) => {
  return request({
    url: '/review/sysNoticeLogger/handel/' + query.id,
    method: 'post'
  });
};
