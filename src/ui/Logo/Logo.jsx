/** @format */

import { Link } from "react-router-dom";
import style from "./Logo.module.scss";

function Logo({ isCollapsed }) {
  const src = isCollapsed
    ? "/images/logo/logo-small.svg"
    : "/images/logo/logo-large.svg";

  return (
    <Link to="/overview">
      <img src={src} alt="Finance Logo" className={style.logo} />
    </Link>
  );
}

export default Logo;
