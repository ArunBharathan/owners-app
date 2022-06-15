import {lazyLoad} from '../../utils/Loadable';
export const AmenityAndRent = lazyLoad(() => import('./index'), module => module.AmenityAndRent)
