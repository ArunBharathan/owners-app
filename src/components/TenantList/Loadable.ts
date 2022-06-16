
import {lazyLoad} from '../../utils/Loadable';
export const TenantList = lazyLoad(() => import('./index'), module => module.TenantList)
