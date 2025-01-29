/** @format */

import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import styles from "./Budgets.module.scss";

function Budgets() {
  return (
    <div className={styles.budgets}>
      <header className={styles.budgets__header}>
        <Heading mb="0">Budgets</Heading>
        <Button variant="primary">+ Add New Budget</Button>
      </header>
      <div className={styles.budgets__body}>
        <section>Spending Summary</section>
        <section>Entertaiment</section>
        <section>Bills</section>
        <section>Dining Out</section>
        <section>Personal Care</section>
      </div>
    </div>
  );
}

export default Budgets;
