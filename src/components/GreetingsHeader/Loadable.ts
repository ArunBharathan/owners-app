// import React, { lazy, Suspense } from "react";

// const LazyComponent = lazy(() =>
//   import("./index").then((module) => ({ default: module.GreetingsHeader }))
// );

// export const GreetingsHeader = (props: any) => {
//   return (
//     <Suspense fallback={<p>Loading ...</p>}>
//       <LazyComponent {...props} />
//     </Suspense>
//   );
// };
import {lazyLoad} from '../../utils/Loadable';
export const GreetingsHeader = lazyLoad(() => import('./index'), module => module.GreetingsHeader)
