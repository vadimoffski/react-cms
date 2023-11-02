import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useMemo } from "react";

import { IRoute } from "./utils/interfaces";
import { RoutesContext } from "./utils/context";
import { getRoutes } from "./utils/functions";
import { API_BASE_URL } from "./utils/constants";

import useFetch from "./hooks/useFetch";

import Spinner from "./components/Spinner/Spinner";

const App = () => {
  const { data = [] } = useFetch<IRoute[]>(`${API_BASE_URL}`);

  const routes = useMemo(() => getRoutes(data), [data]);
  const router = createBrowserRouter(routes);

  if (!data?.length) {
    return <Spinner />;
  }

  return (
    <RoutesContext.Provider value={data}>
      <RouterProvider router={router} />
    </RoutesContext.Provider>
  );
};

export default App;
