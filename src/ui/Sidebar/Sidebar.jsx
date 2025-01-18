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

import Logo from "../Logo/Logo";
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
    <aside className={`${style.sidebar} ${isCollapsed ? style.collapsed : ""}`}>
      <Logo isCollapsed={isCollapsed} />
      <nav className={style.navigation}>
        <ul className={style.navigation__list}>
          {NAV_ITEMS.map(({ to, Icon, label, iconWeight }) => (
            <li key={to} className={style.navigation__item}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? `${style.navigation__link} ${style["navigation__link--active"]}`
                    : style.navigation__link
                }
              >
                <span></span>
                <Icon weight={iconWeight} size="2.4rem" />
                <p>{label}</p>
              </NavLink>
            </li>
          ))}
        </ul>
        <button onClick={toggleSidebar} className={style.btn}>
          <ArrowFatLinesLeft
            size="2.4rem"
            weight="fill"
            mirrored={isCollapsed}
          />
          <p className={style.btn__label}>Minimize Menu</p>
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
