import { defHttp } from '/@/utils/http/axios';

import {
  SignInParams,
  GetUserInfoModel,
  PermissionResultModel,
  QueryCompanyOrganizationParams,
  UserInCompanyParamsModel,
  UserInCompanyResultModel,
} from './model/userModel';
import { UrlPrefixEnum } from '@/enums/httpEnum';
import { ErrorMessageMode } from '#/axios';

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/getUserInfo',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
  Error = '/error',

  SignIn = '/SignIn',
  GetUserByToken = '/GetUserByToken',
  QueryAllPermissionInService = '/QueryAllPermissionInService',
  QueryCompanyOrganization = '/QueryCompanyOrganization',
  QueryUserInCompanyList = '/QueryUserInCompanyList',
}
/**
 * @description: Trigger ajax error
 */

export const fireErrorApi = () => defHttp.get({ url: Api.Error });

/**
 * @description: user login api
 */
export function signIn(params: SignInParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<string>(
    {
      url: Api.SignIn,
      params,
      headers: { access_service: 'mdwt' },
    },
    {
      urlPrefix: UrlPrefixEnum.AUTH,
      errorMessageMode: mode,
    },
  );
}
/**
 * @description: 通过token获取用户信息
 */
export function getUserByToken(mode: ErrorMessageMode = 'modal') {
  return defHttp.get<any>(
    {
      url: Api.GetUserByToken,
    },
    {
      urlPrefix: UrlPrefixEnum.AUTH,
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: user login api
 */
export function queryAllPermissionInService(params: any, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<PermissionResultModel[]>(
    {
      url: Api.QueryAllPermissionInService,
      params,
    },
    {
      urlPrefix: UrlPrefixEnum.AUTH,
      errorMessageMode: mode,
    },
  );
}

export function queryUserInCompanyList(params: UserInCompanyParamsModel) {
  return defHttp.post<UserInCompanyResultModel>(
    {
      url: Api.QueryUserInCompanyList,
      params,
    },
    {
      urlPrefix: UrlPrefixEnum.AUTH,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function queryCompanyOrganization(
  params: QueryCompanyOrganizationParams,
  mode: ErrorMessageMode = 'modal',
) {
  return defHttp.post(
    {
      url: Api.QueryCompanyOrganization,
      params,
    },
    {
      urlPrefix: UrlPrefixEnum.AUTH,
      errorMessageMode: mode,
    },
  );
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
