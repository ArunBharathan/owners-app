import {lazyLoad} from '../../utils/Loadable';
export const NavMenu = lazyLoad(() => import('./index'), module => module.NavMenu)
