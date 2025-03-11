/** @format */

import styles from "./ButtonPot.module.scss";

function ButtonPot({ children }) {
  return (
    <button className={styles.btn} type="submit">
      {children}
    </button>
  );
}

export default ButtonPot;
