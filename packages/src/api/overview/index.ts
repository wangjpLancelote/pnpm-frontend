import request from '@/utils/request';

/**
 * 待办事项
 * @param query {}
 * @returns []
 */
export const getReviewOver = (query: Record<string, any>) => {
  return request({
    url: '/Approval/api/ApprovalQuery/GetBacklogList',
    method: 'get',
    params: query
  });
};

/**
 * 登录用户入口信息
 * @param query {}
 * @returns {}
 */
export const getReviewPortal = (query: Record<string, any>) => {
  return request({
    url: '/Portal/Desktop',
    method: 'get',
    params: query
  });
};

/**
 * 进入会评列表
 * @param query { $filter:  1 eq 1 and GroupID eq (guid'34c6fe58-3768-44b5-9ed2-e0454f974735') ,$inlinecount: allpages }
 * @returns []
 */
export const getReviewAgenda = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/api/ReviewManagerQuery/GetAgendaList',
    method: 'get',
    params: query
  });
};

/**
 * 评审专家信息
 * @param query {
 * $inlinecount: allpages
GroupID: 24bcdbae-abbc-4f74-90ba-54dd9a2e14b8
$orderby: CreateTime desc
 * }
 * @returns []
 */
export const getGroupExpertList = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/api/ReviewManagerQuery/GetGroupSpecialistList',
    method: 'get',
    params: query
  });
};

/**
 * 第三方评审专家信息
 * @param query {
 * $inlinecount: allpages
GroupID: 24bcdbae-abbc-4f74-90ba-54dd9a2e14b8
$orderby: CreateTime desc
 * }
 * @returns []
 */
export const getThirdPartyExpert = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/api/ReviewManagerQuery/GetOtherSpecialistList',
    method: 'get',
    params: query
  });
};

/**
 * 获取评审信息
 * @param query { groupId }
 * @returns {}
 */
export const getAgendaInfo = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/Desktop',
    method: 'get',
    params: query
  });
};

/*
 * 取消评审
 * @param query {}
 * @returns void
 */
export const cancelReview = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/CancelReview',
    method: 'post',
    data: query
  });
};

/**
 * 开始评审
 * @param body {}
 * @returns void
 */
export const startReview = (body: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/StartReviewProject',
    method: 'post',
    data: body
  });
};

/**
 * 项目评审会议记录基本信息
 * @param query { }
 * @returns {}
 */
export const ProjectNotes = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/ProjectNotes',
    method: 'get',
    params: query
  });
};

/**
 * 小组评审会议记录基本信息
 * @param query { }
 * @returns {}
 */
export const GroupNotes = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/GroupNotes',
    method: 'get',
    params: query
  });
};

/**
 * 保存项目评审会议记录
 * @param query { }
 * @returns {}
 */
export const SaveProjectNotes = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/SaveProjectNotes',
    method: 'post',
    data: query
  });
};

/**
 * 保存小组评审会议记录
 * @param query { }
 * @returns {}
 */
export const SaveGroupNotes = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/SaveGroupNotes',
    method: 'post',
    data: query
  });
};

/*
 * 回复评审
 * @param query { agendaId: '', projectName: '', groupName: '' }
 * @returns void
 */
export const recoverReview = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/RecoveryReview',
    method: 'post',
    data: query
  });
};

/**
 * 选择评审组长
 * @param query { }
 * @returns {}
 */
export const AssignGroupLeader = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/AssignGroupLeader',
    method: 'post',
    data: query
  });
};

/**
 * 专家缺席/离席
 * @param query { }
 * @returns {}
 */
export const SubmitAttendStatus = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/SubmitAttendStatus',
    method: 'post',
    data: query
  });
};

/**
 * 发送短信
 * @param query { }
 * @returns {}
 */
export const SendAccountInfoSms = (query: Record<string, any>) => {
  return request({
    url: '/SmsManage/SmsManageCmd/SendAccountInfoSms',
    method: 'post',
    data: query
  });
};

/**
 * 删除第三方委派专家
 * @param query { }
 * @returns {}
 */
export const DeleteOtherSpecialistSign = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/DeleteOtherSpecialistSign',
    method: 'post',
    data: query
  });
};

/**
 * 第三方委派专家签到
 * @param query { }
 * @returns {}
 */
export const AddOtherSpecialistSign = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/AddOtherSpecialistSign',
    method: 'post',
    data: query
  });
};

/**
 * 专家出席情况列表
 * @param query { }
 * @returns {}
 */
export const ViewSignInList = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/ViewSignInList',
    method: 'post',
    data: query
  });
};

/**
 * 撤回专家签到信息
 * @param query { }
 * @returns {}
 */
export const WithdrawSignIn = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/WithdrawSignIn',
    method: 'post',
    data: query
  });
};

/**
 * 评审经理会评-企业签到 获取企业签到列表
 * @param query { }
 * @returns {}
 */
export const GetEnterpriseSignList = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/api/ReviewManagerQuery/GetEnterpriseSignList',
    method: 'get',
    params: query
  });
};

/**
 * 企业人员签到
 * @param query { }
 * @returns {}
 */
export const AddEnterpriseSign = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/AddEnterpriseSign',
    method: 'post',
    data: query
  });
};

/**
 * 修改综合意见的原因
 * @param query { }
 * @returns {}
 */
export const ResetReviewOpinionStatus = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/ResetReviewOpinionStatus',
    method: 'post',
    data: query
  });
};

/**
 * 无需专家确认的备注
 * @param query { }
 * @returns {}
 */
export const AddDefaultProjectOpinionSignInfo = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/AddDefaultProjectOpinionSignInfo',
    method: 'post',
    data: query
  });
};

/**
 * 撤回专家签到
 * @param query { }
 * @returns {}
 */
export const WithdrawOpinionSign = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/WithdrawOpinionSign',
    method: 'post',
    data: query
  });
};

/**
 * 开始打分
 * @param body {}
 * @returns void
 */
export const startReviewScore = (body: { projectID: string; groupID: string }) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/StartGrade',
    method: 'post',
    data: body
  });
};

/**
 * 确认综合评分
 * @param body {}
 * @returns void
 */
export const getReviewGradeList = (body: { ProjectID: string }) => {
  return request({
    url: '/ReviewManager/ReviewManagerView/ProjectGroupGrade',
    method: 'post',
    data: body
  });
};

/**
 * 评审经理撤销专家规避
 * @param body {}
 * @returns void
 */
export const CancelAvoid = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/CancelAvoid',
    method: 'post',
    data: query
  });
};

/**
 * 评审经理撤销专家的资料核查结果
 * @param body {}
 * @returns void
 */
export const WithdrawMatchGuide = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/WithdrawMatchGuide',
    method: 'post',
    data: query
  });
};

/**
 * 暂存/提交综合意见
 * @param body {}
 * @returns void
 */
export const SubmitReviewOpinion = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/SubmitReviewOpinion',
    method: 'post',
    data: query
  });
};

/**
 * 确认完成综合意见录入
 * @param body {}
 * @returns void
 */
export const FinishReviewOpinionConfirm = (query: Record<string, any>) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/FinishReviewOpinionConfirm',
    method: 'post',
    data: query
  });
};
