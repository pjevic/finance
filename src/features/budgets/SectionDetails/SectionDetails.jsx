/** @format */
import { Link } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";
import { formatToDollarsWithPrefix, formatDate } from "../../../utils/helpers";
import styles from "./SectionDetails.module.scss";

function SectionDetails({ data }) {
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

      <div className={styles.table}>
        {data.map((transaction, i) => (
          <div key={i} className={styles.table__item}>
            <img
              src={transaction.avatar}
              alt={transaction.name}
              className={styles.table__img}
            />
            <p className={styles.table__name}>{transaction.name}</p>
            <div className={styles.table__details}>
              <p className={styles.table__amount}>
                {formatToDollarsWithPrefix(transaction.amount)}
              </p>
              <p className={styles.table__date}>
                {formatDate(transaction.date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionDetails;
