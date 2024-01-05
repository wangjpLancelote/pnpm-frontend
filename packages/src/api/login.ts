import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { LoginData, LoginResult, VerifyCodeResult, ExpertLoginResult } from './types';
import { UserInfo } from '@/api/system/user/types';

/**
 * @param data {LoginData}
 * @returns
 */
export function login(data: object): AxiosPromise<LoginResult> {
  const params = {
    ...data
    // grantType: data.grantType || 'password'
  };
  return request({
    url: '/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: params
  });
}

/**
 * 注销
 */
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  });
}

/**
 * 获取验证码
 */
export function getCodeImg(): AxiosPromise<VerifyCodeResult> {
  return request({
    url: '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  });
}

// 获取用户详细信息
export function getInfo(): AxiosPromise<UserInfo> {
  return request({
    url: '/getInfo',
    method: 'get'
  });
}
// 获取用户详细信息
export function ExpertAuthLogin(query: any): AxiosPromise<ExpertLoginResult> {
  return request({
    url: '/Sso/ExpertAuthLogin',
    method: 'get',
    params: query
  });
}

// 注册方法
export function register(data: any) {
  return request({
    url: '/auth/register',
    headers: {
      isToken: false,
    },
    method: 'post',
    data: data,
  })
}
