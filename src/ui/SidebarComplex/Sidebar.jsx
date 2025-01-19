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
  const handleMouseEnter = (key) => {
    document
      .querySelectorAll(`[data-key="${key}"]`)
      .forEach((el) => el.classList.add(style["hover"]));
  };

  const handleMouseLeave = (key) => {
    document
      .querySelectorAll(`[data-key="${key}"]`)
      .forEach((el) => el.classList.remove(style["hover"]));
  };

  return (
    <aside className={style.col__main}>
      <div className={style.col__1}>
        <Logo small={true} />

        <nav className={style.navigation}>
          <ul className={style.navigation__list}>
            {NAV_ITEMS.map(({ to, Icon, iconWeight }) => (
              <li
                className={style.navigation__item}
                key={to}
                data-key={to}
                onMouseEnter={() => handleMouseEnter(to)}
                onMouseLeave={() => handleMouseLeave(to)}
              >
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
          <button
            onClick={toggleSidebar}
            data-key="sidebar-toggle"
            onMouseEnter={() => handleMouseEnter("sidebar-toggle")}
            onMouseLeave={() => handleMouseLeave("sidebar-toggle")}
            className={style.navigation__btn}
          >
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
        <Logo small={false} />

        <nav className={style.navigation}>
          <ul className={style.navigation__list}>
            {NAV_ITEMS.map(({ to, label }) => (
              <li
                className={style.navigation__item}
                key={to}
                data-key={to}
                onMouseEnter={() => handleMouseEnter(to)}
                onMouseLeave={() => handleMouseLeave(to)}
              >
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
          <button
            onClick={toggleSidebar}
            data-key="sidebar-toggle"
            onMouseEnter={() => handleMouseEnter("sidebar-toggle")}
            onMouseLeave={() => handleMouseLeave("sidebar-toggle")}
            className={style.navigation__btn}
          >
            <p>Minimize Menu</p>
          </button>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
