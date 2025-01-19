/** @format */

import style from "./Logo.module.scss";

function Logo({ small }) {
  const src = small
    ? "/images/logo/logo-small.svg"
    : "/images/logo/logo-large.svg";

  return (
    <div className={style.logo__container}>
      <img
        src={src}
        alt="logo"
        className={`${style.logo} ${!small ? style.logo__small : ""}`}
      />
    </div>
  );
}

export default Logo;
