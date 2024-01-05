import request from '@/utils/request';

// 查询参数管理列表
export const GetConfigList = (query: any) => {
  return request({
    url: '/UMS/api/ConfigQuery/GetConfigList',
    method: 'get',
    params: query
  });
};

// 新增根节点
export const CreateConfigkey = (query: any) => {
  return request({
    url: '/UMS/ConfigCmd/CreateConfigkey',
    method: 'post',
    data: query
  });
};

// 编辑根节点前获取根节点信息
export const UpdateConfigKey = (id: any) => {
  return request({
    url: '/UMS/ConfigView/UpdateConfigKey/' + id,
    method: 'get'
  });
};

// 编辑根节点
export const UpdateConfigkey = (query: any) => {
  return request({
    url: '/UMS/ConfigCmd/UpdateConfigkey',
    method: 'post',
    data: query
  });
};

// 新增子节点
export const CreateConfig = (query: any) => {
  return request({
    url: '/UMS/ConfigCmd/CreateConfig',
    method: 'post',
    data: query
  });
};

// 编辑子节点
export const UpdateConfig = (query: any) => {
  return request({
    url: '/UMS/ConfigCmd/UpdateConfig',
    method: 'post',
    data: query
  });
};

// 编辑子节点前获取节点信息
export const getUpdateConfig = (id: string, query?: any) => {
  return request({
    url: '/UMS/ConfigView/UpdateConfig/' + id,
    method: 'get',
    data: query
  });
};

// 删除子节点
export const DeleteConfig = (query: any) => {
  return request({
    url: '/UMS/ConfigCmd/DeleteConfig',
    method: 'post',
    data: query
  });
};
