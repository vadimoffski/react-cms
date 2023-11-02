import { Outlet } from "react-router-dom";

import Tabs from "../../components/Tabs/Tabs";

import "./layout.styles.scss";

const CustomLayout = () => {
  return (
    <div className="layout">
      <Tabs />
      <Outlet />
    </div>
  );
};

export default CustomLayout;
