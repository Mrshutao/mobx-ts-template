import loadable from "loadable-components";
export default [{ path: "/", page: loadable(() => import("@ctn/Home")) }, { path: "/detail", page: loadable(() => import("@ctn/Detail")) }];
