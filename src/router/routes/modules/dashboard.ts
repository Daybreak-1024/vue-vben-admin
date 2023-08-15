import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.analysis'),
      },
    },
    // {
    //   path: 'error',
    //   name: 'Error',
    //   component: () => import('/@/views/sys/error-log/index.vue'),
    //   meta: {
    //     // affix: true,
    //     title: t('routes.dashboard.error'),
    //   },
    // },
  ],
};

export default dashboard;
