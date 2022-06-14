import {lazyLoad} from '../../utils/Loadable';
export const HostelListPage = lazyLoad(() => import('./index'), module => module.HostelListPage)