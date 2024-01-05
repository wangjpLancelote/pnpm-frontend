import request from '@/utils/request';

// 查询评审项目列表
export const GetBankCardList = (query: any) => {
  return request({
    url: '/SpecialistReview/api/SpecialistReviewQuery/GetBankCardList',
    method: 'get',
    params: query
  });
};
// 查询专家信息
export const LookSpecialistInfo = (query: any) => {
  return request({
    url: '/Specialist/SpecialistView/LookSpecialistInfo',
    method: 'get',
    params: query
  });
};
// 查询专家领域
export const GetSpecialistlevel = (query: any) => {
  return request({
    url: '/Specialist/api/SpecialistQuery/GetSpecialistlevel',
    method: 'get',
    params: query
  });
};
//专家添加银行卡基本信息
export const CreateBankCard = () => {
  return request({
    url: '/SpecialistReview/SpecialistReviewView/CreateBankCard?_=1693215468700',
    method: 'get'
  });
};
// 添加银行卡
export const AddBankCard = (query: any) => {
  return request({
    url: '/SpecialistReview/SpecialistReviewCmd/AddBankCard?SpecialistName=undefined',
    method: 'post',
    data: query
  });
};
// 删除银行卡
export const DeleteBankCard = (query: any) => {
  return request({
    url: '/SpecialistReview/SpecialistReviewCmd/DeleteBankCard',
    method: 'post',
    data: query
  });
};
// 专家个人信息接口
export const BasicInformation = (query: any) => {
  return request({
    url: '/SpecialistReview/SpecialistReviewView/BasicInformation',
    method: 'get',
    params: query
  });
};
// 专家学习简历
export const GetStudyResumesList = (query: any) => {
  return request({
    url: '/SpecialistReview/api/SpecialistReviewQuery/GetStudyResumesList',
    method: 'get',
    params: query
  });
};
// 专家工作简历
export const GetWorkResumeList = (query: any) => {
  return request({
    url: '/SpecialistReview/api/SpecialistReviewQuery/GetWorkResumeList',
    method: 'get',
    params: query
  });
};
// 查询专家领域
export const GetSpecialistlevels = (query: any) => {
  return request({
    url: '/SpecialistReview/api/SpecialistReviewQuery/GetSpecialistlevel',
    method: 'get',
    params: query
  });
};
// 差查询会评基本信息
export const Desktop = () => {
  return request({
    url: '/SpecialistReview/SpecialistReviewView/Desktop',
    method: 'get'
  });
};
// 获取待审项目
export const GetAgendaList = (query: any) => {
  return request({
    url: '/SpecialistReview/api/SpecialistReviewQuery/GetAgendaList',
    method: 'get',
    params: query
  });
};
// 获取评审费用签收信息
export const SetReviewFeeInfo = () => {
  return request({
    url: '/SpecialistReview/SpecialistReviewView/SetReviewFeeInfo',
    method: 'get'
  });
};
// 获取银行卡不排序
export const GetBankCardLists = () => {
  return request({
    url: '/SpecialistReview/api/SpecialistReviewQuery/GetBankCardList?%24inlinecount=allpages',
    method: 'get'
  });
};
// 保存费用信息
export const SaveReviewFeeInfo = (BatchName: any, query: any) => {
  return request({
    url: `/SpecialistReview/SpecialistReviewCmd/SaveReviewFeeInfo?BatchName=${BatchName}`,
    method: 'post',
    data: query
  });
};
// 签到
export const SignIn = (query: any) => {
  return request({
    url: `/SpecialistReview/SpecialistReviewView/SignIn`,
    method: 'get',
    params: query
  });
};
// 项目打分基本信息
export const ProjectReview = (query: any) => {
  return request({
    url: `/SpecialistReview/SpecialistReviewView/ProjectReview`,
    method: 'get',
    params: query
  });
};
//项目打分
export const GetGradesItemList = (query: any) => {
  return request({
    url: `/SpecialistReview/api/SpecialistReviewQuery/GetGradesItemList`,
    method: 'get',
    params: query
  });
};
// 综合意见
export const GetGradesOpinionList = (query: any) => {
  return request({
    url: `/SpecialistReview/api/SpecialistReviewQuery/GetGradesOpinionList`,
    method: 'get',
    params: query
  });
};
// 暂存评分表数据
export const SaveReivewGrades = (query: any) => {
  return request({
    url: `/SpecialistReview/SpecialistReviewCmd/SaveReivewGrades?NoLogging=false`,
    method: 'POST',
    data: query
  });
};
// 暂存评分表数据
export const SubmitReivewGrades = (query: any) => {
  return request({
    url: `/SpecialistReview/SpecialistReviewCmd/SubmitReivewGrades`,
    method: 'POST',
    data: query
  });
};
// 暂存评分表数据
export const ProjectReviewGrades = (query: any) => {
  return request({
    url: `/SpecialistReview/SpecialistReviewView/ProjectReviewGrades`,
    method: 'get',
    params: query
  });
};
// 签到提交
export const SpecialistReviewCmd = (query: any) => {
  return request({
    url: `/SpecialistReview/SpecialistReviewCmd/SignIn/`,
    method: 'POST',
    data: query
  });
};
// 核查评分表
export const MatchGuide = (query: any) => {
  return request({
    url: `/SpecialistReview/SpecialistReviewCmd/MatchGuide`,
    method: 'POST',
    data: query
  });
};
//s申请规避
export const ApplicationAvoid = (query: any) => {
  return request({
    url: `/SpecialistReview/SpecialistReviewCmd/ApplicationAvoid`,
    method: 'POST',
    data: query
  });
};
//确认评分表
export const ProjectReviewOpinion = (query: any) => {
  return request({
    url: `/SpecialistReview/SpecialistReviewView/ProjectReviewOpinion`,
    method: 'get',
    params: query
  });
};
//确认综合意见
export const ConfirmProjectOpinion = (query: any) => {
  return request({
    url: `/SpecialistReview/SpecialistReviewCmd/ConfirmProjectOpinion`,
    method: 'POST',
    data: query
  });
};
//确认综合意见
export const ContentsPages = () => {
  return request({
    url: `/Contents/pages/files.html`,
    method: 'get'
  });
};
//专家模型数据获取
export const getModelTypeList = (query: any) => {
  return request({
    url: '/review/expertAnalysis/content',
    method: 'get',
    params: query
  });
};
//获取单个银行卡信息
export const ViewBankCard = (query: any) => {
  return request({
    url: '/SpecialistReview/SpecialistReviewView/ViewBankCard',
    method: 'get',
    params: query
  });
};
//辅助评审
export const ancillaryInformation = (query: any) => {
  return request({
    url: '/ancillaryInformation',
    method: 'get',
    params: query
  });
};
