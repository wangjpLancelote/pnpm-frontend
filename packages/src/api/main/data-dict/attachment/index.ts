import request from '@/utils/request';

// 查询附件列表
export const GetAttachmentTypeList = (query: any) => {
  return request({
    url: '/DataDictionary/api/DataDictionaryQuery/GetAttachmentTypeList',
    method: 'get',
    params: query
  });
};

// 新增附件类型
export const CreateAttachmentType = (query: any) => {
  return request({
    url: '/DataDictionary/DataDictionaryCmd/CreateAttachmentType',
    method: 'post',
    data: query
  });
};

// 编辑附件类型
export const UpdateAttachmentType = (query: any) => {
  return request({
    url: '/DataDictionary/DataDictionaryCmd/UpdateAttachmentType',
    method: 'post',
    data: query
  });
};

// 删除附件类型
export const DeleteAttachmentType = (query: any) => {
  return request({
    url: '/DataDictionary/DataDictionaryCmd/DeleteAttachmentType',
    method: 'post',
    data: query
  });
};
