/** @format */

import { Link } from "react-router-dom";
import style from "./Logo.module.scss";

function Logo({ small }) {
  const src = small
    ? "/images/logo/logo-small.svg"
    : "/images/logo/logo-large.svg";

  return (
    <Link className={style.logo__container} to="/">
      <img
        src={src}
        alt="logo"
        className={`${style.logo} ${!small ? style.logo__small : ""}`}
      />
    </Link>
  );
}

export default Logo;
