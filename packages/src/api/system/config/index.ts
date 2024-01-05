import request from '@/utils/request';
import { ConfigForm, ConfigQuery, ConfigVO } from './types';
import { AxiosPromise } from 'axios';
import { param } from '@/utils';

// 查询参数列表
export function listConfig(query: ConfigQuery): AxiosPromise<ConfigVO[]> {
  return request({
    url: '/system/config/list',
    method: 'get',
    params: query
  });
}

// 查询参数详细
export function getConfig(configId: string | number): AxiosPromise<ConfigVO> {
  return request({
    url: '/system/config/' + configId,
    method: 'get'
  });
}

// 根据参数键名查询参数值
export function getConfigKey(configKey: string): AxiosPromise<ConfigVO> {
  return request({
    url: '/system/config/configKey/' + configKey,
    method: 'get'
  });
}

// 新增参数配置
export function addConfig(data: ConfigForm) {
  return request({
    url: '/system/config',
    method: 'post',
    data: data
  });
}

// 修改参数配置
export function updateConfig(data: ConfigForm) {
  return request({
    url: '/system/config/edit',
    method: 'post',
    data: data
  });
}

// 修改参数配置
export function updateConfigByKey(key: string, value: any) {
  return request({
    url: '/system/config/updateByKey',
    method: 'post',
    data: {
      configKey: key,
      configValue: value
    }
  });
}

// 删除参数配置
export function delConfig(configId: string | number | Array<string | number>) {
  return request({
    url: '/system/config/remove/' + configId,
    method: 'post'
  });
}

// 刷新参数缓存
export function refreshCache() {
  return request({
    url: '/system/config/refreshCache',
    method: 'post'
  });
}
// 查询配置参数
export function getModelContentList(query: any) {
  return request({
    url: '/review/expertBasicModel/getModelContentList',
    method: 'get',
    params: query
  });
}
// 保存配置参数
export function saveExpertBasicModel(query: any) {
  return request({
    url: '/review/expertBasicModel/save',
    method: 'post',
    data: query
  });
}
// 获取星级
export function ExpertModelStarRating() {
  return request({
    url: '/review/expertModelStarRating/getList',
    method: 'get'
  });
}
// 保存星级
export function saveList(query: any) {
  return request({
    url: '/review/expertModelStarRating/saveList',
    method: 'post',
    data: query
  });
}
// 保存星级
export function getOverallMerit() {
  return request({
    url: '/review/expertBasicModel/getOverallMerit',
    method: 'get'
  });
}
// 保存综合评价
export function saveOverallMerit(query: any) {
  return request({
    url: '/review/expertBasicModel/saveOverallMerit',
    method: 'post',
    data: query
  });
}
