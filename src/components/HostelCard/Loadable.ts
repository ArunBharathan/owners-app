// import React, { lazy, Suspense } from "react";

// const LazyComponent = lazy(() =>
//   import("./index").then((module) => ({ default: module.HostelCard }))
// );

// export const HostelCard = (props: any) => {
//   return (
//     <Suspense fallback={<p>Loading ...</p>}>
//       <LazyComponent {...props} />
//     </Suspense>
//   );
// };
import {lazyLoad} from '../../utils/Loadable';
export const HostelCard = lazyLoad(() => import('./index'), module => module.HostelCard)
