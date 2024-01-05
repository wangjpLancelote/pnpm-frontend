import request from '@/utils/request';

//现场考察基本页面信息
export const InspectViewIndex = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectView/Index',
    method: 'get',
    params: query
  });
};

// 查询现场考察小组列表
export const GetLiveInspectGroupList = (query: any) => {
  return request({
    url: '/ProjectReview/api/LiveInspectQuery/GetLiveInspectGroupList',
    method: 'get',
    params: query
  });
};

// 添加考察小组时检查冲突
export const IsReviewClash = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGroupCmd/IsReviewClash',
    method: 'post',
    data: query
  });
};

// 添加考察小组
export const EditProjectGroup = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectCmd/EditProjectGroup',
    method: 'post',
    data: query
  });
};

// 删除考察小组
export const DeleteProjectGroup = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectGroupCmd/DeleteProjectGroup',
    method: 'post',
    data: query
  });
};

// 给考察小组分配核查项目的项目列表
export const GetNotInspectByBatchID = (query: any) => {
  return request({
    url: '/ProjectReview/api/LiveInspectQuery/GetNotInspectByBatchID',
    method: 'get',
    params: query
  });
};

// 考察小组分配项目
export const AddLiveInspect = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectCmd/AddLiveInspect',
    method: 'post',
    data: query
  });
};

// 删除已分配给考察小组的项目
export const DeleteFromLiveInspecById = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectCmd/DeleteFromLiveInspecById',
    method: 'post',
    data: query
  });
};

// 已分配给考察小组的项目列表
export const GetLiveInspectList = (query: any) => {
  return request({
    url: '/ProjectReview/api/LiveInspectQuery/GetLiveInspectList',
    method: 'get',
    params: query
  });
};

// 拖拽排列项目列表后保存
export const LiveInspectSorting = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectCmd/LiveInspectSorting',
    method: 'post',
    data: query
  });
};

// 修改项目考察时间
export const UpdateInspectTimeByID = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectCmd/UpdateInspectTimeByID',
    method: 'post',
    data: query
  });
};

// 获取联系人信息
export const ViewEditProjectLinkmanInfo = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectView/ViewEditProjectLinkmanInfo',
    method: 'get',
    params: query
  });
};

// 编辑联系人信息
export const AjaxEditProjectLinkmanInfo = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectCmd/AjaxEditProjectLinkmanInfo',
    method: 'post',
    data: query
  });
};

// 判断是否有做现场考察方案
export const IsLiveInspectScheme = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectCmd/IsLiveInspectScheme',
    method: 'post',
    data: query
  });
};

// 判断考察时间是否设置完成
export const CheckLiveInspectTime = (BatchID: any) => {
  return request({
    url: '/ProjectReview/LiveInspectCmd/CheckLiveInspectTime/' + BatchID,
    method: 'post'
  });
};

// 保存考察工作方案
export const SaveReviewScheme = (query: any) => {
  return request({
    url: '/ProjectReview/ReviewSchemeCmd/SaveReviewScheme',
    method: 'post',
    data: query
  });
};

// 获取保存过的考察工作方案
export const SiteInspection = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectView/SiteInspection',
    method: 'get',
    params: query
  });
};

// 获取考察签到表信息
export const LivelnspectExportEnterpriseSign = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectView/LivelnspectExportEnterpriseSign',
    method: 'get',
    params: query
  });
};

// 导出考察时间表
export const DownLiveInspectListByBatchID = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectCmd/DownLiveInspectListByBatchID',
    method: 'get',
    params: query,
    responseType: 'blob'
  });
};

//录入考察评分专家列表
export const GetSpecialistInspectScoreList = (query: any) => {
  return request({
    url: '/ProjectReview/api/LiveInspectQuery/GetSpecialistInspectScoreList',
    method: 'get',
    params: query
  });
};

//现场考察结果评分
export const InspectScore = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectView/InspectScore',
    method: 'get',
    params: query
  });
};

//现场考察结果评分
export const SubmitInspectResult = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectCmd/SubmitInspectResult',
    method: 'post',
    data: query
  });
};

//获取补录材料状态信息
export const UploadLivelnspectRecordingMaterial = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectView/UploadLivelnspectRecordingMaterial',
    method: 'get',
    params: query
  });
};

//获取补录材料列表
export const GetAttachmentRecordingMaterialById = (query: any) => {
  return request({
    url: '/ProjectReview/api/LiveInspectQuery/GetAttachmentRecordingMaterialById',
    method: 'get',
    params: query
  });
};

//上传文件
export const UploadLiveInspecFile = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectCmd/UploadLiveInspecFile',
    method: 'post',
    data: query,
    headers: { avoidDuplication: true }
  });
};

//删除文件
export const DelAttachment = (query: any) => {
  return request({
    url: '/ProjectReview/LiveInspectCmd/DelAttachment',
    method: 'post',
    data: query
  });
};

//获取已上传的图片
export const GetAttachmentPhotoListById = (query: any) => {
  return request({
    url: '/ProjectReview/api/LiveInspectQuery/GetAttachmentPhotoListById',
    method: 'get',
    params: query
  });
};

//获取考察意见文件列表
export const GetAttachmentViewnListById = (query: any) => {
  return request({
    url: '/ProjectReview/api/LiveInspectQuery/GetAttachmentViewnListById',
    method: 'get',
    params: query
  });
};
//获取考察记录表文件列表
export const GetInspectAttachListById = (query: any) => {
  return request({
    url: '/ProjectReview/api/LiveInspectQuery/GetInspectAttachListById',
    method: 'get',
    params: query
  });
};
