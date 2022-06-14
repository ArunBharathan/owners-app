// import React, { lazy, Suspense } from "react";

// const LazyComponent = lazy(() =>
//   import("./index").then((module) => ({ default: module.HostelPage }))
// );

// export const HostelPage = (props: any) => {
//   return (
//     <Suspense fallback={<p>Loading ...</p>}>
//       <LazyComponent {...props} />
//     </Suspense>
//   );
// };
import {lazyLoad} from '../../utils/Loadable';
export const HostelPage = lazyLoad(() => import('./index'), module => module.HostelPage)