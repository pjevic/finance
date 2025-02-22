/** @format */

import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";
import Heading from "../../ui/Heading/Heading";
import Summary from "../../features/budgets/Summary/Summary";
import Sections from "../../features/budgets/Sections/Sections";
import styles from "./Budgets.module.scss";
import { useBudgets } from "../../features/budgets/useBudgets";
import { useTransactions } from "../../features/transactions/useTransactions";

// import { SELECT_CATEGORY, SELECT_COLOR } from "../../utils/constants";

function Budgets() {
  const { isLoadingBudgets, budgets } = useBudgets();
  const { isLoadingTransactions, transactions } = useTransactions();
  return (
    <div className={styles.budgets}>
      <header className={styles.budgets__header}>
        <Heading>Budgets</Heading>
        <Modal>
          <Modal.Open opens="Form: Add New Budget">
            <Button variant="primary">+ Add New Budget</Button>
          </Modal.Open>
          <Modal.Window name="Form: Add New Budget">
            <div>ADD NEW BUDGET</div>
          </Modal.Window>
        </Modal>
      </header>

      <div className={styles.budgets__body}>
        <Summary
          isLoadingBudgets={isLoadingBudgets}
          budgets={budgets}
          isLoadingTransactions={isLoadingTransactions}
          transactions={transactions}
        />
        <Sections
          isLoadingBudgets={isLoadingBudgets}
          budgets={budgets}
          isLoadingTransactions={isLoadingTransactions}
          transactions={transactions}
        />
      </div>
    </div>
  );
}

export default Budgets;
