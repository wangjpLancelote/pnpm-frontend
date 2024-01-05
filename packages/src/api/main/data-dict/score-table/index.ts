import request from '@/utils/request';

// 查询评分表
export const GetGradesTemplateList = (query: any) => {
  return request({
    url: '/ReviewGrades/api/ReviewGradesQuery/GetGradesTemplateList',
    method: 'get',
    params: query
  });
};

// 预览评分表
export const PreviewGradesTemplateFinance = (query: any) => {
  return request({
    url: '/ReviewGrades/ReviewGradesView/PreviewGradesTemplateFinance',
    method: 'get',
    params: query
  });
};

// 新增评分表
export const CreateGradesTemplate = (query: any) => {
  return request({
    url: '/ReviewGrades/ReviewGradesCmd/CreateGradesTemplate',
    method: 'post',
    data: query
  });
};

// 编辑评分表
export const UpdateGradesTemplate = (query: any) => {
  return request({
    url: '/ReviewGrades/ReviewGradesCmd/UpdateGradesTemplate',
    method: 'post',
    data: query
  });
};

// 删除评分表
export const DeleteGradesTemplate = (query: any) => {
  return request({
    url: '/ReviewGrades/ReviewGradesCmd/DeleteGradesTemplate',
    method: 'post',
    data: query
  });
};

//复制评分表
export const CopyGradesTemplate = (query: any) => {
  return request({
    url: '/ReviewGrades/ReviewGradesCmd/CopyGradesTemplate',
    method: 'post',
    data: query
  });
};

// 编辑评审意见-添加题目
export const AddGradesOpinion = (query: any) => {
  return request({
    url: '/ReviewGrades/ReviewGradesCmd/AddGradesOpinion',
    method: 'post',
    data: query
  });
};

// 编辑评审意见-删除题目
export const DeleteGradesOpinion = (query: any) => {
  return request({
    url: '/ReviewGrades/ReviewGradesCmd/DeleteGradesOpinion',
    method: 'post',
    data: query
  });
};

// 编辑评审意见-编辑题目
export const UpdateGradesOpinion = (query: any) => {
  return request({
    url: '/ReviewGrades/ReviewGradesCmd/UpdateGradesOpinion',
    method: 'post',
    data: query
  });
};

// 编辑评分项-新增题目/添加评分项说明
export const AddGradesItem = (query: any) => {
  return request({
    url: '/ReviewGrades/ReviewGradesCmd/AddGradesItem',
    method: 'post',
    data: query
  });
};

// 编辑评分项-编辑题目/修改评分项说明
export const UpdateGradesItem = (query: any) => {
  return request({
    url: '/ReviewGrades/ReviewGradesCmd/UpdateGradesItem',
    method: 'post',
    data: query
  });
};

// 编辑评分项-删除题目
export const DeleteGradesItem = (query: any) => {
  return request({
    url: '/ReviewGrades/ReviewGradesCmd/DeleteGradesItem',
    method: 'post',
    data: query
  });
};
