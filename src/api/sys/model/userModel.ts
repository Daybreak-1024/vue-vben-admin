/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}
export interface SignInParams {
  account: string;
  password: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

export interface PermissionResultModel {
  id: number;
  name: string;
  permissionToken: string;
  serviceName: string;
  permissionDesc: string;
  exValues: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}

export interface QueryCompanyOrganizationParams {
  companyID: number;
  fetchDepth: number;
  includeSubCompany?: boolean;
  includeDepartment?: boolean;
  includeUser?: boolean;
}

export interface UserInCompanyParamsModel {
  companyName?: any;
}
export interface UserInCompanyResultModel {
  companyID: number;
  companyName: string;
}
