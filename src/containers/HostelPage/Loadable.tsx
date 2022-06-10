import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() =>
  import("./index").then((module) => ({ default: module.HostelPage }))
);

export const HostelPage = (props: any) => {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
