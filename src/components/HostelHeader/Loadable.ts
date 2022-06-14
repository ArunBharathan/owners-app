// import React, { lazy, Suspense } from "react";

// const LazyComponent = lazy(() =>
//   import("./index").then((module) => ({ default: module.HostelHeader }))
// );

// export const HostelHeader = (props: React.ComponentProps<any>) => {
//   return (
//     <Suspense fallback={<p>Loading ...</p>}>
//       <LazyComponent {...props}/>
//     </Suspense>
//   );
// };
import {lazyLoad} from '../../utils/Loadable';
export const HostelHeader = lazyLoad(() => import('./index'), module => module.HostelHeader)
