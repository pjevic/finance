/** @format */

import { useBudgets } from "../useBudgets";
import styles from "./BudgetSummary.module.scss";

function BudgetSummary() {
  const { isLoadingBudgets, budgets } = useBudgets();

  return <div className={styles.summary}>Spending Summary</div>;
}

export default BudgetSummary;
