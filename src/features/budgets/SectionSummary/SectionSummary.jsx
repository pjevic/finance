/** @format */

import { formatToDollars } from "../../../utils/helpers";
import styles from "./SectionSummary.module.scss";

function SectionSummary({ maximum, theme }) {
  const width = 50;
  return (
    <div className={styles.summary}>
      <div>
        <span className={styles.summary__label}>Maximum of </span>
        <span className={styles.summary__value}>
          {formatToDollars(Number(maximum))}
        </span>
      </div>

      <div className={styles.summary__range}>
        <div
          className={styles["summary__range-value"]}
          style={{ backgroundColor: theme, width: `${width}%` }}
        ></div>
      </div>

      <div className={styles.summary__sub}>
        <div className={styles.summary__review}>
          <span
            className={styles["summary__review-theme"]}
            style={{ backgroundColor: theme }}
          ></span>
          <span className={styles["summary__review-label"]}>Spent</span>
          <span className={styles["summary__review-value"]}>
            {formatToDollars(25)}
          </span>
        </div>

        <div className={styles.summary__review}>
          <span className={styles["summary__review-theme"]}></span>
          <span className={styles["summary__review-label"]}>Remaining</span>
          <span className={styles["summary__review-value"]}>
            {formatToDollars(25)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionSummary;
