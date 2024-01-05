import request from '@/utils/request';

// 项⽬单位分析
export const GetByUnitName = (query: any) => {
  return request({
    url: '/analysis/unitName',
    method: 'get',
    params: query
  });
};

// 项⽬单位性质分析
export const GetByUnitProperty = (query: any) => {
  return request({
    url: '/analysis/unitProperty',
    method: 'get',
    params: query
  });
};

// 评审时间分析
export const GetByReviewTime = (query: any) => {
  return request({
    url: '/analysis/reviewTime',
    method: 'get',
    params: query
  });
};

// 项⽬类型分析
export const GetByIndustryName = (query: any) => {
  return request({
    url: '/analysis/industryName',
    method: 'get',
    params: query
  });
};

// 综合分析-项⽬总投资
export const GetByTotalInvest = (query: any) => {
  return request({
    url: '/analysis/totalInvest',
    method: 'get',
    params: query
  });
};
// 综合分析-项⽬政府补助
export const GetByApplyGovSubsidy = (query: any) => {
  return request({
    url: '/analysis/applyGovSubsidy',
    method: 'get',
    params: query
  });
};
// 综合分析-项⽬专利
export const GetByPatentNumber = (query: any) => {
  return request({
    url: '/analysis/patentNumber',
    method: 'get',
    params: query
  });
};
// 综合分析-评审状态
export const GetByReviewStatus = (query: any) => {
  return request({
    url: '/analysis/reviewStatus',
    method: 'get',
    params: query
  });
};

// 项⽬建设地点分析
export const GetByAddress = (query: any) => {
  return request({
    url: '/analysis/address',
    method: 'get',
    params: query
  });
};

// 项⽬建设时间分析
export const GetByConstructionTime = (query: any) => {
  return request({
    url: '/analysis/constructionTime',
    method: 'get',
    params: query
  });
};
