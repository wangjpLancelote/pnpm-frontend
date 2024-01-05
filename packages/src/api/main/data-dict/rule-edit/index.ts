import request from '@/utils/request';

// 查询评分规则列表
export const reviewGradesRoleList = (query: any) => {
  return request({
    url: '/reviewGradesRole/list',
    method: 'get',
    params: query
  });
};
// 添加评分规则
export const reviewGradesRole = (query: any) => {
  return request({
    url: '/reviewGradesRole',
    method: 'post',
    data: query
  });
};
// 删除评分规则
export const reviewGradesRoleRemove = (query: any) => {
  return request({
    url: `/reviewGradesRole/remove?roleId=${query}`,
    method: 'post'
  });
};
// // 获取评分规则
// export const getReviewGradesRole = (query: any) => {
//   return request({
//     url: `/reviewGradesRole/detail?roleId=${query}`,
//     method: 'get'
//   });
// };
// 修改评分规则
export const editReviewGradesRole = (query: any) => {
  return request({
    url: `/reviewGradesRole/edit`,
    method: 'post',
    data: query
  });
};
