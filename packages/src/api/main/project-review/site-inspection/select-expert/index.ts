import request from '@/utils/request';

//现场考察选取专家，专家列表
export const GetSelectedSpecialistList = (query: any) => {
  return request({
    url: '/ProjectReview/api/LiveInspectQuery/GetSelectedSpecialistList',
    method: 'get',
    params: query
  });
};
//提交专家评级信息
export const SubmitReviewLevel = (query: any) => {
  return request({
    url: '/ReviewManager/ReviewManagerCmd/SubmitReviewLevel',
    method: 'post',
    data: query
  });
};
