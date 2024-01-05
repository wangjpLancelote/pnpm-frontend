import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { listData } from './type';
// 查询首页列表
export const getCommissionBatchList = (query: any): AxiosPromise<listData> => {
  return request({
    url: '/CommissionBatch/api/CommissionBatchQuery/GetCommissionBatchList',
    method: 'get',
    params: query
  });
};

// 评审委托登记列表-管理项目
export const GetProjectList = (query: any) => {
  return request({
    url: '/CommissionBatch/api/CommissionBatchQuery/GetProjectList',
    method: 'get',
    params: query
  });
};

// 评审委托登记列表-管理项目-移除列表项
export const RemoveProject = (query: any) => {
  return request({
    url: '/CommissionBatch/CommissionBatchCmd/RemoveProject',
    method: 'post',
    data: query
  });
};

// 评审委托登记列表-管理项目-单个项目详情
export const DetailProjectBaseInfo = (query: any) => {
  return request({
    url: '/CommonManage/CommonManageView/DetailProjectBaseInfo',
    method: 'get',
    params: query
  });
};

// 评审委托登记列表-管理项目-录入待评审项目
export const AddReviewProject = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewProjectCmd/AddReviewProject',
    method: 'post',
    data: query
  });
};

// 评审委托登记列表-管理项目-添加待评审项目-项目来源下拉框数据
export const GetProjectSource = (query: any) => {
  return request({
    url: '/ProjectReview/api/ProjectBatchQuery/GetProjectSource',
    method: 'get',
    params: query
  });
};

// 评审委托登记列表-管理项目-添加待评审项目列表
export const GetPendingProjectList = (query: any) => {
  return request({
    url: '/CommissionBatch/api/CommissionBatchQuery/GetPendingProjectList',
    method: 'get',
    params: query
  });
};

// 评审委托登记列表-管理项目-添加待评审项目列表-添加
export const AddProject = (query: any) => {
  return request({
    url: '/CommissionBatch/CommissionBatchCmd/AddProject',
    method: 'post',
    data: query
  });
};

// 评审委托登记列表-管理项目-分配项目
export const AssignProject = (query: any) => {
  return request({
    url: '/CommissionBatch/CommissionBatchCmd/AssignProject',
    method: 'post',
    data: query
  });
};

// 评审委托登记列表-管理项目-取消分配项目
export const CancelAssignProject = (query: any) => {
  return request({
    url: '/CommissionBatch/CommissionBatchCmd/CancelAssignProject',
    method: 'post',
    data: query
  });
};

// 评审委托登记列表-管理项目-提交分配
export const SubmitAssign = (query: any) => {
  return request({
    url: '/CommissionBatch/CommissionBatchCmd/SubmitAssign',
    method: 'post',
    data: query
  });
};

// 评审委托登记列表-管理项目-编辑单个项目信息
export const UpdateProjectBaseInfo = (query: any, define: string) => {
  return request({
    url: '/ProjectLibrary/ProjectLibraryCmd/UpdateProjectBaseInfo?define=' + define,
    method: 'post',
    data: query
  });
};

// 评审委托登记列表-管理项目-编辑申报材料核准
export const GetProjectAttachment = (query: any) => {
  return request({
    url: '/ProjectLibrary/api/ProjectLibraryQuery/GetProjectAttachment',
    method: 'get',
    params: query
  });
};

// 评审委托登记列表-管理项目-导入评审项目
export const UploadProjectInfoFile = (query: any) => {
  return request({
    url: '/ProjectLibrary/ProjectLibraryCmd/UploadProjectInfoFile',
    method: 'post',
    data: query
  });
};

// 评审委托登记列表-管理项目-编辑项目信息-新增补录文件
export const UploadDeclareFile = (query: any) => {
  return request({
    url: '/ProjectLibrary/ProjectLibraryCmd/UploadDeclareFile',
    method: 'post',
    data: query,
    headers: { avoidDuplication: true }
  });
};

// 评审委托登记列表-管理项目-编辑项目信息-新增补录文件-补录文件类型
export const GetAttachmentTypelist = () => {
  return request({
    url: '/ProjectLibrary/api/ProjectLibraryQuery/GetAttachmentTypelist',
    method: 'get'
  });
};

// 评审委托登记列表-管理项目-编辑项目信息-删除补录文件
export const DeleteProjectAttachment = (query: any) => {
  return request({
    url: '/ProjectLibrary/ProjectLibraryCmd/DeleteProjectAttachment',
    method: 'post',
    data: query
  });
};

// 产业领域列表
export const GetIndustryCategory = () => {
  return request({
    url: '/CommonManage/api/CommonManageQuery/GetIndustryCategory',
    method: 'get'
  });
};
// 查询委托单位数组
export const getProjectSourcesDtoList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ProjectBatchQuery/GetProjectSourcesDtoList',
    method: 'get',
    params: query
  });
};
// 登记项目
export const commissionBatchCmdAdd = (query: any) => {
  return request({
    url: '/CommissionBatch/CommissionBatchCmd/Add',
    method: 'POST',
    data: query
  });
};
// 编辑项目
export const batchViewUpdate = (query: any) => {
  return request({
    url: `/CommissionBatch/CommissionBatchView/Update?ID=${query}`,
    method: 'get'
  });
};
// 保存编辑项目信息
export const batchCmdUpdate = (query: any) => {
  return request({
    url: '/CommissionBatch/CommissionBatchCmd/Update',
    method: 'POST',
    data: query
  });
};
// 查看评审信息
export const getProjectBatchList = (query: any) => {
  return request({
    url: '/CommissionBatch/api/CommissionBatchQuery/GetProjectBatchList',
    method: 'get',
    params: query
  });
};
// 删除项目
export const batchCmdDelete = (query: any) => {
  return request({
    url: '/CommissionBatch/CommissionBatchCmd/Delete',
    method: 'post',
    data: query
  });
};

// 评审状态查询
export const GetReviewProgressList = (query: any) => {
  return request({
    url: '/CommissionBatch/api/CommissionBatchQuery/GetReviewProgressList',
    method: 'get',
    params: query
  });
};
// 上传委托函
export const UploadReviewAttachment = (query: any) => {
  return request({
    url: '/CommonManage/UploadAttchment/UploadReviewAttachment',
    method: 'post',
    data: query
  });
};
// 获取委托函列表
export const GetFileList = (query: any) => {
  return request({
    url: '/CommissionBatch/api/CommissionBatchQuery/GetFileList',
    method: 'get',
    params: query
  });
};
// 删除委托函
export const DeleteSysAttachment = (query: any) => {
  return request({
    url: '/CommonManage/UploadAttchment/DeleteSysAttachment',
    method: 'post',
    data: query
  });
};

// 获取分配部门
export const platformDeptSelect = () => {
  return request({
    url: '/system/dept/platformDeptSelect',
    method: 'get'
  });
};
