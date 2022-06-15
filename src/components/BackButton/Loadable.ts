
import {lazyLoad} from '../../utils/Loadable';
export const BackButton = lazyLoad(() => import('./index'), module => module.BackButton)
