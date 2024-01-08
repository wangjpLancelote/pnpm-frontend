/**
 * 注册
 */
export type RegisterForm = {
  tenantId: string;
  username: string;
  password: string;
  confirmPassword?: string;
  code?: string;
  uuid?: string;
  userType?: string;
};

/**
 * 登录请求
 */
export interface LoginData {
  username?: string;
  password?: string;
  rememberMe?: boolean;
  socialCode?: string;
  socialState?: string;
  source?: string;
  code?: string;
  uuid?: string;
  // grantType: string;
}

/**
 * 登录响应
 */
export interface LoginResult {
  token: string;
}

/**
 * 验证码返回
 */
export interface VerifyCodeResult {
  captchaOnOff: boolean;
  uuid?: string;
  img?: string;
}
