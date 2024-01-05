import request from '@/utils/request';

// 查询分组列表
export const GetProjectGroupList = (query: any) => {
  return request({
    url: '/ProjectReview/api/ProjectGroupQuery/GetProjectGroupList',
    method: 'get',
    params: query
  });
};

// 评审经理下拉框数据
export const GetProjectManagerSelectList = () => {
  return request({
    url: '/CommonManage/api/CommonManageQuery/GetProjectManagerSelectList',
    method: 'get'
  });
};

// 产业领域数据
export const GetAllSubIndustryList = (ParentID: string) => {
  return request({
    url: '/DataDictionary/api/DataDictionaryQuery/GetAllSubIndustryList?ParentID=' + ParentID,
    method: 'get'
  });
};

// 新增分组
export const CreateProjectGroup = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGroupCmd/CreateProjectGroup',
    method: 'post',
    data: query
  });
};

// 更新分组
export const UpdateProjectGroup = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGroupCmd/UpdateProjectGroup',
    method: 'post',
    data: query
  });
};

// 删除分组
export const DeleteProjectGroup = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGroupCmd/DeleteProjectGroup',
    method: 'post',
    data: query
  });
};

//  新增/编辑时检查分组是否有冲突
export const IsReviewClash = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGroupCmd/IsReviewClash',
    method: 'post',
    data: query
  });
};

// 分组详情
export const DetailProjectGroup = (query: any) => {
  return request({
    url: '/v1/ProjectReview/ProjectGroupView/DetailProjectGroup',
    method: 'get',
    params: query
  });
};

// 分配项目列表
export const AssignProject = (query: any) => {
  return request({
    url: '/v1/ProjectReview/ProjectGroupView/AssignProject',
    method: 'get',
    params: query
  });
};

// 提交分配项目
export const SubmitProjectAssign = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGroupCmd/SubmitProjectAssign',
    method: 'post',
    data: query
  });
};

// 智能分组
export const autoGrouping = (query: any) => {
  return request({
    url: '/review/group/autoGroup',
    method: 'post',
    data: query
  });
};

// 校验分组信息
export const validGroup = (query: any) => {
  return request({
    url: '/review/group/validGroup',
    method: 'post',
    data: query
  });
};
