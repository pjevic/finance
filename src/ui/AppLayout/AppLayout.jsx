/** @format */

import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import style from "./AppLayout.module.scss";

function AppLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  return (
    <div className={style.layout}>
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
