import {lazyLoad} from '../../utils/Loadable';
export const RequestPage = lazyLoad(() => import('./index'), module => module.RequestPage)