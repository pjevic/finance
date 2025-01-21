/** @format */

import style from "./Heading.module.scss";

function Heading({ children, mb = "3.2rem" }) {
  return (
    <h1 style={{ marginBottom: mb }} className={style.heading}>
      {children}
    </h1>
  );
}

export default Heading;
