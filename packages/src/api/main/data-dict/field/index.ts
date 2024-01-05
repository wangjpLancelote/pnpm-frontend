import request from '@/utils/request';

// 查询一级产业列表
export const GetFirstIndustryList = (query: any) => {
  return request({
    url: '/DataDictionary/api/DataDictionaryQuery/GetFirstIndustryList',
    method: 'get',
    params: query
  });
};

// 查询二级产业列表
export const GetSubIndustryList = (query: any) => {
  return request({
    url: '/DataDictionary/api/DataDictionaryQuery/GetSubIndustryList',
    method: 'get',
    params: query
  });
};
