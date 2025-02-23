/** @format */

import styles from "./Heading.module.scss";

function Heading({ children, mb = "0rem" }) {
  return (
    <h1 style={{ marginBottom: mb }} className={styles.heading}>
      {children}
    </h1>
  );
}

export default Heading;
