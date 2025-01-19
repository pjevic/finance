/** @format */
import { NavLink } from "react-router-dom";
import {
  House,
  ArrowsDownUp,
  ChartDonut,
  TipJar,
  Receipt,
  ArrowFatLinesLeft,
} from "@phosphor-icons/react";
import Logo from "./Logo/Logo";
import style from "./Sidebar.module.scss";

const NAV_ITEMS = [
  {
    to: "/overview",
    Icon: House,
    label: "Overview",
    iconWeight: "fill",
  },
  {
    to: "/transactions",
    Icon: ArrowsDownUp,
    label: "Transactions",
  },
  {
    to: "/budgets",
    Icon: ChartDonut,
    label: "Budgets",
    iconWeight: "fill",
  },
  {
    to: "/pots",
    Icon: TipJar,
    label: "Pots",
    iconWeight: "fill",
  },
  {
    to: "/recurring-bills",
    Icon: Receipt,
    label: "Recurring bills",
    iconWeight: "fill",
  },
];

function Sidebar({ isCollapsed, toggleSidebar }) {
  return (
    <aside className={style.col__main}>
      <div className={style.col__1}>
        <Logo small={true} isCollapsed={isCollapsed} />
        <nav className={style.navigation}>
          <ul className={style.navigation__list}>
            {NAV_ITEMS.map(({ to, Icon, iconWeight }) => (
              <li className={style.navigation__item} key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? `${style.navigation__link} ${style["navigation__link--active"]}`
                      : style.navigation__link
                  }
                >
                  <span></span>
                  <Icon size="2.4rem" weight={iconWeight} />
                </NavLink>
              </li>
            ))}
          </ul>
          <button onClick={toggleSidebar}>
            <ArrowFatLinesLeft
              size="2.4rem"
              weight="fill"
              mirrored={isCollapsed}
            />
          </button>
        </nav>
      </div>
      <div
        className={`${style.col__2} ${
          isCollapsed ? style["col__2--collapsed"] : ""
        }`}
      >
        <div className={style.logo__container}>
          <Logo small={false} />
        </div>
        <nav className={style.navigation}>
          <ul className={style.navigation__list}>
            {NAV_ITEMS.map(({ to, label }) => (
              <li className={style.navigation__item} key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? `${style.navigation__link} ${style["navigation__link--active"]}`
                      : style.navigation__link
                  }
                >
                  <p>{label}</p>
                </NavLink>
              </li>
            ))}
          </ul>
          <button onClick={toggleSidebar}>
            <p>Minimize Menu</p>
          </button>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
