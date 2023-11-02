import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RoutesContext } from "../../utils/context";
import { getIdByOrder } from "../../utils/functions";
import { BASE_URL } from "../../utils/constants";

import TabTitle from "../TabTitle/TabTitle";

import "./tabs.styles.scss";

const Tabs: React.FC = () => {
  const routes = useContext(RoutesContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (routes) {
      const firstElement = getIdByOrder(0, routes);

      navigate(`${BASE_URL}${firstElement}`);
    }
  }, [routes, navigate]);

  if (!routes?.length) return null;

  return (
    <nav className="tabs">
      {routes?.map((tab) => (
        <TabTitle key={tab.id} title={tab.title} path={tab.id} />
      ))}
    </nav>
  );
};

export default Tabs;
