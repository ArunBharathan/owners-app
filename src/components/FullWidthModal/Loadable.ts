import { lazyLoad } from "../../utils/Loadable";
export const FullWidthModal = lazyLoad(
  () => import("./index"),
  (module) => module.FullWidthModal
);
