/** @format */

import DataPie from "../../../ui/DataPie/DataPie";
import styles from "./Summary.module.scss";

import {
  getCategorizedTransactions,
  formatToDollars,
} from "../../../utils/helpers";
import Spinner from "../../../ui/Spinner/Spinner";

function Summary({
  isLoadingBudgets,
  budgets,
  isLoadingTransactions,
  transactions,
}) {
  if (isLoadingBudgets || isLoadingTransactions) return <Spinner />;

  const categorizedTransactions = getCategorizedTransactions(
    budgets,
    transactions
  );

  return (
    <div className={styles.summary}>
      <DataPie budgets={budgets} />

      <div className={styles.stats}>
        <h2 className={styles.stats__heading}>Spending Summary</h2>
        <ul className={styles.stats__list}>
          {categorizedTransactions.map((category, i) => (
            <li key={i} className={styles.stats__item}>
              <span
                style={{ backgroundColor: category.theme }}
                className={styles.stats__line}
              ></span>
              <div className={styles.stats__name}>{category.category}</div>
              <div className={styles.stats__sum}>
                {formatToDollars(category.totalSpent)}
              </div>
              <div className={styles.stats__maximum}>
                of {formatToDollars(Number(category.maximum))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Summary;
