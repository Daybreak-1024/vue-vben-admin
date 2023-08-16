import { Persistent, BasicKeys } from '/@/utils/cache/persistent';
import { CacheTypeEnum, TOKEN_KEY } from '/@/enums/cacheEnum';
import projectSetting from '/@/settings/projectSetting';

const { permissionCacheType } = projectSetting;

const cacheTypes = {
  [CacheTypeEnum.SESSION]: 'Session',
  [CacheTypeEnum.LOCAL]: 'Local',
  [CacheTypeEnum.COOKIES]: 'Cookies',
};

export function getToken() {
  return getAuthCache(TOKEN_KEY, CacheTypeEnum.COOKIES);
}
export function getAuthCache<T>(key: BasicKeys, cachetype: CacheTypeEnum = permissionCacheType) {
  const fn = Persistent[`get${cacheTypes[cachetype]}`];
  return fn(key) as T;
}

export function setAuthCache(
  key: BasicKeys,
  value,
  cachetype: CacheTypeEnum = permissionCacheType,
) {
  const fn = Persistent[`set${cacheTypes[cachetype]}`];
  return fn(key, value, true);
}

export function clearAuthCache(immediate = true, cachetype: CacheTypeEnum = permissionCacheType) {
  const fn = Persistent[`clear${cacheTypes[cachetype]}`];
  return fn(immediate);
}
