import { IRoute } from "./interfaces";

export type TRoutesContext = IRoute[] | [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TGetRoutes<T> = (data: T | []) => any[];

export type TGetLazyComponent = (
  path: string
) => Promise<{ Component: React.ComponentType }>;

export type TGetIdByOrder<T> = (order: number, items: T) => string;
