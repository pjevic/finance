/** @format */

import styles from "./ButtonDots.module.scss";

function ButtonDots() {
  return (
    <button className={styles.dots}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </button>
  );
}

export default ButtonDots;
