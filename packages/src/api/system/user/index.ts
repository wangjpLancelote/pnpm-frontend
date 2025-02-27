import { DeptVO } from "./../dept/types";
import { RoleVO } from "@/api/system/role/types";
import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { UserForm, UserQuery, UserVO, UserInfoVO } from "./types";
import { parseStrEmpty } from "@/utils/ruoyi";
import { encrypt } from "@/utils/encryptUtil";

/**
 * 查询用户列表
 * @param query
 */
export function listUser(query: UserQuery): AxiosPromise<UserVO[]> {
  return request({
    url: "/system/user/list",
    method: "get",
    params: query
  });
}

/**
 * 获取用户详情
 * @param userId
 */
export function getUser(userId?: string | number): AxiosPromise<UserInfoVO> {
  return request({
    url: "/system/user/" + parseStrEmpty(userId),
    method: "get"
  });
}

/**
 * 新增用户
 */
export function addUser(data: UserForm) {
  return request({
    url: "/system/user",
    method: "post",
    data: data
  });
}

/**
 * 修改用户
 */
export function updateUser(data: UserForm) {
  return request({
    url: "/system/user/edit",
    method: "post",
    data: data
  });
}

/**
 * 删除用户
 * @param userId 用户ID
 */
export function delUser(userId: Array<string | number> | string | number) {
  return request({
    url: "/system/user/remove/" + userId,
    method: "post"
  });
}

/**
 * 密码重置
 * @param userId 用户ID
 * @param password 密码
 */
export function resetUserPwd(userId: string | number, nickName: string) {
  const data = {
    userId,
    nickName
  };
  return request({
    url: "/system/user/resetPwd",
    method: "post",
    data: data
  });
}

/**
 * 用户状态修改
 * @param userId 用户ID
 * @param status 用户状态
 */
export function changeUserStatus(userId: number | string, status: string) {
  const data = {
    userId,
    status
  };
  return request({
    url: "/system/user/changeStatus/edit",
    method: "post",
    data: data
  });
}

/**
 * 查询用户个人信息
 */
export function getUserProfile(): AxiosPromise<UserInfoVO> {
  return request({
    url: "/system/user/profile",
    method: "get"
  });
}

/**
 * 修改用户个人信息
 * @param data 用户信息
 */
export function updateUserProfile(data: UserForm) {
  return request({
    url: "/system/user/profile/edit",
    method: "post",
    data: data
  });
}

/**
 * 密码重置
 * @param oldPassword 旧密码
 * @param newPassword 新密码
 */
export function updateUserPwd(oldPassword: string, newPassword: string) {
  oldPassword = encrypt((oldPassword || "").trim());
  newPassword = encrypt((newPassword || "").trim());
  const data = {
    oldPassword,
    newPassword
  };
  return request({
    url: "/system/user/profile/updatePwd",
    method: "post",
    params: data
  });
}

/**
 * 用户头像上传
 * @param data 头像文件
 */
export function uploadAvatar(data: FormData) {
  return request({
    url: "/system/user/profile/avatar",
    method: "post",
    data: data
  });
}

/**
 * 查询授权角色
 * @param userId 用户ID
 */
export function getAuthRole(userId: string | number): AxiosPromise<{ user: UserVO; roles: RoleVO[] }> {
  return request({
    url: "/system/user/authRole/" + userId,
    method: "get"
  });
}

/**
 * 保存授权角色
 * @param data 用户ID
 */
export function updateAuthRole(data: { userId: string; roleIds: string }) {
  return request({
    url: "/system/user/authRole/edit",
    method: "post",
    params: data
  });
}

/**
 * 查询部门下拉树结构
 */
export function deptTreeSelect(): AxiosPromise<DeptVO[]> {
  return request({
    url: "/system/user/deptTree",
    method: "get"
  });
}

/**
 * 同步用户信息内容
 */
export function synchroUserInfo() {
  return request({
    url: "/system/user/synchro",
    method: "post"
  });
}
