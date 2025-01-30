/** @format */

import Heading from "../../ui/Heading/Heading";
import Button from "../../ui/Button/Button";
import BudgetSummary from "../../features/budgets/BudgetSummary/BudgetSummary";
import BudgetSections from "../../features/budgets/BudgetSections/BudgetSections";
import styles from "./Budgets.module.scss";

function Budgets() {
  return (
    <div className={styles.budgets}>
      <header className={styles.budgets__header}>
        <Heading mb="0">Budgets</Heading>
        <Button variant="primary">+ Add New Budget</Button>
      </header>
      <div className={styles.budgets__body}>
        <BudgetSummary />
        <BudgetSections />
      </div>
    </div>
  );
}

export default Budgets;
