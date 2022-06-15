
import {lazyLoad} from '../../utils/Loadable';
export const RoomLists = lazyLoad(() => import('./index'), module => module.RoomLists)
