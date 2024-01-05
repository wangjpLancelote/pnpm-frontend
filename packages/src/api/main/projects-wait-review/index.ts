import request from '@/utils/request';

// 添加评审批次
export const CreateProjectBatchWithProject = (query: any) => {
  return request({
    url: '/ProjectReview/ProjectBatchCmd/CreateProjectBatchWithProject',
    method: 'post',
    data: query
  });
};

// 退回已选项目
export const ReturnAssignProject = (query: any) => {
  return request({
    url: '/CommissionBatch/CommissionBatchCmd/ReturnAssignProject',
    method: 'post',
    data: query
  });
};
