import React, { lazy, Suspense } from "react";

const LazyComponent = lazy(() =>
  import("./index").then((module) => ({ default: module.RoomLists }))
);

export const RoomLists = (props: any) => {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
