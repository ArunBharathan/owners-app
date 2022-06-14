import {lazyLoad} from '../../utils/Loadable';
export const ProtectedRoute = lazyLoad(() => import('./index'), module => module.ProtectedRoute)