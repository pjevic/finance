/** @format */

import DataPie from "../../../ui/DataPie/DataPie";
import styles from "./Summary.module.scss";

import { useBudgets } from "../useBudgets";
import { Spinner } from "@phosphor-icons/react";

function Summary() {
  const { isLoadingBudgets, budgets } = useBudgets();
  console.log(budgets);

  if (isLoadingBudgets) return <Spinner />;

  return (
    <div className={styles.summary}>
      <DataPie budgets={budgets} />
    </div>
  );
}

export default Summary;
