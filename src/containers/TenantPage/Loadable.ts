import {lazyLoad} from '../../utils/Loadable';
export const TenantPage = lazyLoad(() => import('./index'), module => module.TenantPage)