/** @format */

import { useState } from "react";
import { Outlet } from "react-router-dom";

// import Sidebar from "../Sidebar/Sidebar";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import style from "./AppLayout.module.scss";

function AppLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  return (
    <div className={style.layout}>
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <Main isCollapsed={isCollapsed}>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
