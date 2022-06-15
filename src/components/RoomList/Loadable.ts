import {lazyLoad} from '../../utils/Loadable';
export const RoomList = lazyLoad(() => import('./index'), module => module.RoomList)
