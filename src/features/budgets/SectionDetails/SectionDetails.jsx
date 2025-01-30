/** @format */
import { Link } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";
import styles from "./SectionDetails.module.scss";

function SectionDetails() {
  return (
    <div className={styles.box}>
      <header className={styles.box__header}>
        <h3 className={styles["box__header-heading"]}>Latest Spending</h3>
        <button className={styles["box__header-button"]}>
          <Link to="/transactions" className={styles["box__header-link"]}>
            See All
          </Link>
          <span className={styles["box__header-icon-container"]}>
            <CaretDown weight="fill" size="1.2rem" />
          </span>
        </button>
      </header>

      <div></div>
    </div>
  );
}

export default SectionDetails;
