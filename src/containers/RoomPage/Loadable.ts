// import React, { lazy, Suspense } from "react";

// const LazyComponent = lazy(() =>
//   import("./index").then((module) => ({ default: module.RoomPage }))
// );

// export const RoomPage = (props: any) => {
//   return (
//     <Suspense fallback={<p>Loading ...</p>}>
//       <LazyComponent {...props} />
//     </Suspense>
//   );
// };
import {lazyLoad} from '../../utils/Loadable';
export const RoomPage = lazyLoad(() => import('./index'), module => module.RoomPage)