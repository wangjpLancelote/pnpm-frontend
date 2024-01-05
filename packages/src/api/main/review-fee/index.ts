import request from '@/utils/request';

// 评审费用管理列表
export const GetBatchFinanceList = (query: any) => {
  return request({
    url: '/FinanceManage/api/FinanceManageQuery/GetBatchFinanceList',
    method: 'get',
    params: query
  });
};

// 评审费用管理-查询费用详细列表
export const GetBatchFinanceDetailList = (query: any) => {
  return request({
    url: '/FinanceManage/api/FinanceManageQuery/GetBatchFinanceDetailList',
    method: 'get',
    params: query
  });
};

// 发放专家评审费
export const PayBatchReviewFee = (query: any) => {
  return request({
    url: '/FinanceManage/FinanceManageCmd/PayBatchReviewFee',
    method: 'post',
    data: query
  });
};

// 导出评审费用信息
export const ExportFeeInfo = (query: any) => {
  return request({
    url: '/FinanceManage/FinanceManageCmd/ExportExcel',
    method: 'get',
    params: query,
    responseType: 'blob'
  });
};
