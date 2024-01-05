import request from '@/utils/request';

// 查询每个分组已选专家列表
export const projectReviewArchiveList = (query: any) => {
  return request({
    url: '/projectReviewArchive/content',
    method: 'get',
    params: query
  });
};

// 查询每个分组已选专家列表
export const Review = (query: any) => {
  return request({
    url: `${query}`,
    method: 'get'
  });
};
// 查询每个分组已选专家列表
export const UploadAttachmentFile = (query: any) => {
  return request({
    url: '/CommonManage/UploadAttchment/UploadAttachmentFile',
    method: 'post',
    data: query
  });
};
// 查询每个分组已选专家列表
export const OtherMultipleAttachmentUploadOrSee = (query: any) => {
  return request({
    url: '/ProjectReview/ReivewArchiveView/OtherMultipleAttachmentUploadOrSee',
    method: 'get',
    params: query
  });
};
// 查询每个分组已选专家列表
export const OtherMultipleUploadSysAttachment = (query: any) => {
  return request({
    url: '/CommonManage/UploadAttchment/OtherMultipleUploadSysAttachment',
    method: 'post',
    data: query
  });
};
// 查询每个分组已选专家列表
export const AjaxSaveReivewArchiveData = (query: any, params: any) => {
  return request({
    url: `/ProjectReview/ReivewArchiveCmd/AjaxSaveReivewArchiveData?batchName=${params}`,
    method: 'post',
    data: query
  });
};
// 查询每个分组已选专家列表
export const AjaxSubmitReivewArchiveData = (query: any, params: any) => {
  return request({
    url: `/ProjectReview/ReivewArchiveCmd/AjaxSubmitReivewArchiveData?batchName=${params}`,
    method: 'post',
    data: query
  });
};
