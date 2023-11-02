import React from "react";
import { NavLink } from "react-router-dom";

import "./tab.styles.scss";

interface ITabTitleProps {
  title: string;
  path: string;
}

const TabTitle: React.FC<ITabTitleProps> = ({ path, title }) => {
  return (
    <li className="tab">
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default TabTitle;
