/** @format */

import style from "./Main.module.scss";

function Main({ isCollapsed, children }) {
  return (
    <main className={isCollapsed ? style.main : style.main__collapsed}>
      {children}
    </main>
  );
}

export default Main;
