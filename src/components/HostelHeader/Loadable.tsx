import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() =>
  import("./index").then((module) => ({ default: module.HostelHeader }))
);

export const HostelHeader = (props: any) => {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
