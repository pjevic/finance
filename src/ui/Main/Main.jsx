/** @format */

import style from "./Main.module.scss";

function Main({ isCollapsed, children }) {
  return (
    <main
      className={`${style.main} ${!isCollapsed ? style.main__collapsed : ""}`}
    >
      {children}
    </main>
  );
}

export default Main;
