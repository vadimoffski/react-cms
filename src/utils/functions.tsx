import ErrorPage from "../routes/ErrorPage.tsx";
import Layout from "../routes/CustomLayout/CustomLayout.tsx";

import { IRoute } from "./interfaces";
import { TGetIdByOrder, TGetLazyComponent, TGetRoutes } from "./types";

const getLazyComponent: TGetLazyComponent = async (path) => {
  const module = await import(`../routes/${path}.tsx`);
  return { Component: module?.default };
};

export const getRoutes: TGetRoutes<IRoute[]> = (data) => {
  if (!data) return [];

  return [
    {
      path: "/react-cms",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: data?.length
        ? data.map((child) => ({
            path: `/react-cms/${child.id}`,
            lazy: () => getLazyComponent(child.path),
          }))
        : undefined,
    },
  ];
};

export const getIdByOrder: TGetIdByOrder<IRoute[]> = (order, items) => {
  const item = items.find((item) => item.order === order);
  return item ? item.id : "";
};
