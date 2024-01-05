import request from '@/utils/request';

/**
 * 获取待审专家信息
 * @param body {}
 * @returns []
 */
export const getReviewExpert = (body: Record<string, any>) => {
  return request({
    url: '/Specialist/api/SpecialistQuery/PostSpecialistQueryList?SpecialistStatus=1',
    method: 'post',
    data: body
  });
};

/**
 * 获取正式专家信息
 * @param body {}
 * @returns []
 */
export const getAcceptExpert = (body: Record<string, any>) => {
  return request({
    url: '/Specialist/api/SpecialistQuery/PostSpecialistQueryList?SpecialistStatus=4',
    method: 'post',
    data: body
  });
};

/**
 * 获取专家星级
 * @param query { $filter: SpecialistStatus eq 4, $inlinecount: allpages, $top: 10 }
 * @returns []
 */
export const getExpertLevel = (query: Record<string, any>) => {
  return request({
    url: '/Specialist/api/SpecialistQuery/GetSpecialistQueryList',
    method: 'get',
    params: query
  });
};

/**
 * 获取黑名单
 * @param query { $filter:  SpecialistStatus eq 5 and 1 eq 1, $inlinecount: allpages, $top: 10 }
 * @returns []
 */
export const getBlackList = (query: Record<string, any>) => {
  return request({
    url: '/Specialist/api/SpecialistQuery/GetBlackList',
    method: 'get',
    params: query
  });
};

/**
 * 获取冻结
 * @param query { $filter:  SpecialistStatus eq 6 and 1 eq 1, $inlinecount: allpages, $top: 10 }
 * @returns []
 */
export const getExpertFreeze = (query: Record<string, any>) => {
  return request({
    url: '/Specialist/api/SpecialistQuery/GetFreezeList',
    method: 'get',
    params: query
  });
};

/**
 * 获取审核未通过
 * @param query { $filter:  SpecialistStatus eq 3 and 1 eq 1, $inlinecount: allpages, $top: 10 }
 * @returns []
 */
export const getUnVerify = (query: Record<string, any>) => {
  return request({
    url: '/Specialist/api/SpecialistQuery/GetNotToExamine',
    method: 'get',
    params: query
  });
};

/**
 * 单位类别
 * @returns []
 */
export const getUnitKind = () => {
  return request({
    url: '/Specialist/SpecialistCmd/GetBase_EntPropertyListTwo',
    method: 'get',
    params: {}
  });
};

/**
 * 获取所有的领域分类
 * @returns []
 */
export const getAllDomains = () => {
  return request({
    url: '/DataDictionary/api/DataDictionaryQuery/GetAllDomainList',
    method: 'get',
    params: {}
  });
};
