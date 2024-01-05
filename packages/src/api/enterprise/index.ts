import request from '@/utils/request';

// 查询企业库列表
export const getEnterpriseList = (query: any) => {
  return request({
    url: '/Enterprise/api/EnterpriseQuery/GetEnterpriseInfoList',
    method: 'get',
    params: query
  });
};

/**
 * 删除企业库
 * @param query {}
 * @returns void
 */
export const delEnterprise = (query: Record<string, any>) => {
  return request({
    url: '/Enterprise/EnterpriseCmd/DeleteEnterpriseInfo',
    method: 'post',
    data: query
  });
};

/**
 * 获取产业信息
 * @param query {}
 * @returns []
 */
export const getIndustryList = (query: Record<string, any>) => {
  return request({
    url: '/DataDictionary/api/DataDictionaryQuery/GetMainIndustryList',
    method: 'get',
    params: query
  });
};

/**
 * 获取深圳地址区域信息
 * @param query {}
 * @returns []
 */
export const getAddressRegion = (query: Record<string, any> = {}) => {
  return request({
    url: '/Enterprise/EnterpriseCmd/GetDistrict',
    method: 'get',
    params: query
  });
};

/**
 * 财务状况List
 * @param query { $filter: EnterpriseID eq guid'33da9bc4-298d-4b78-bbc9-093a47a4ad35', $inlinecount: allpages }
 * @returns []
 */
export const getFinanceList = (query: Record<string, any> = {}) => {
  return request({
    url: '/Enterprise/Api/EnterpriseQuery/GetEnterpriseFinanceList',
    method: 'get',
    params: query
  });
};

/**
 * 政府资助情况List
 * @param query { $filter: EnterpriseID eq guid'33da9bc4-298d-4b78-bbc9-093a47a4ad35', $inlinecount: allpages }
 * @returns []
 */
export const getSubsidize = (query: Record<string, any> = {}) => {
  return request({
    url: '/Enterprise/Api/EnterpriseQuery/GetEnterpriseSubsidize',
    method: 'get',
    params: query
  });
};

/**
 * 添加资助情况
 * @param name Name
 * @param body { ID: '0000-000', EnterpriseID: ID }
 * @returns void
 */
export const addSubsidize = (name: string, body: Record<string, any>) => {
  return request({
    url: `/Enterprise/EnterpriseCmd/AddEnterpriseSubsidize?EnterpriseName=${name}`,
    method: 'post',
    data: body
  });
};

/**
 * 修改资助情况
 * @param name string
 * @param body {}
 * @returns void
 */
export const editSubsidize = (name: string, body: Record<string, any>) => {
  return request({
    url: `/Enterprise/EnterpriseCmd/UpdateEnterpriseSubsidize?EnterpriseName=${name}`,
    method: 'post',
    data: body
  });
};

/**
 * 删除资助情况
 * @param body {}
 * @returns void
 */
export const delSubsidize = (body: Record<string, any>) => {
  return request({
    url: '/Enterprise/EnterpriseCmd/DeleteEnterpriseSubsidize',
    method: 'post',
    data: body
  });
};

/**
 * 涉及产业领域List
 * @param query { EnterpriseID: 33da9bc4-298d-4b78-bbc9-093a47a4ad35, $inlinecount: allpages, $top: 20 }
 * @returns []
 */
export const getBaseDomain = (query: Record<string, any> = {}) => {
  return request({
    url: '/Enterprise/Api/EnterpriseQuery/GetBaseDomainDtoForEnterpriseID',
    method: 'get',
    params: query
  });
};

/**
 * 添加涉及产业领域
 * @param body { EnterpriseID: ID, IndustryID: ID, EnterpriseName: Name, DomainName: Name }
 * @returns void
 */
export const addBaseDomain = (body: Record<string, any>) => {
  return request({
    url: '/Enterprise/EnterpriseCmd/AddEnterpriseSubDivisionDomain',
    method: 'post',
    data: body
  });
};

/**
 * 删除产业领域
 * @param body { ID, Name, DomainName }
 * @returns void
 */
export const delBaseDomain = (body: Record<string, any>) => {
  return request({
    url: '/Enterprise/EnterpriseCmd/DeleteEnterpriseSubDivisionDomain',
    method: 'post',
    data: body
  });
};

/**
 * 企业详情数据
 * @param query { EnterpriseID: 33da9bc4-298d-4b78-bbc9-093a47a4ad35 }
 * @returns {}
 */
export const getEnterpriseDetail = (query: Record<string, any> = {}) => {
  return request({
    url: '/Enterprise/EnterpriseView/EnterpriseInfoDetailed',
    method: 'get',
    params: query
  });
};

/**
 * 修改财务状况
 * @param name string
 * @param body { ID: string }
 * @returns void
 */
export const updateFinance = (name: string, body: Record<string, any> = {}) => {
  return request({
    url: `/Enterprise/EnterpriseCmd/UpdateEnterpriseFinance?EnterpriseName=${name}`,
    method: 'post',
    data: body
  });
};

/**
 * 新增财务状况
 * @param name string
 * @param body { ID: string }
 * @returns void
 */
export const addFinance = (name: string, body: Record<string, any> = {}) => {
  return request({
    url: `/Enterprise/EnterpriseCmd/AddEnterpriseFinance?EnterpriseName=${name}`,
    method: 'post',
    data: body
  });
};

/**
 * 删除
 * @param body { ID: string, Name: string }
 * @returns void
 */
export const delFinance = (body: Record<string, any>) => {
  return request({
    url: '/Enterprise/EnterpriseCmd/DeleteEnterpriseFinance',
    method: 'post',
    data: body
  });
};

/**
 * 更新info
 * @param body {}
 * @returns void
 */
export const updateBaseInfo = (body: Record<string, any>) => {
  return request({
    url: '/Enterprise/EnterpriseCmd/UpdateEnterpriseInfo',
    method: 'post',
    data: body
  });
};

/**
 * 添加企业info
 * @param body {}
 * @returns void
 */
export const addBaseInfo = (body: Record<string, any>) => {
  return request({
    url: '/Enterprise/EnterpriseCmd/AddEnterprise',
    method: 'post',
    data: body
  });
};
