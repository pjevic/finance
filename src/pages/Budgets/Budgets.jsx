/** @format */

import Heading from "../../ui/Heading/Heading";
import Button from "../../ui/Button/Button";
import Summary from "../../features/budgets/Summary/Summary";
import Sections from "../../features/budgets/Sections/Sections";
import styles from "./Budgets.module.scss";

function Budgets() {
  return (
    <div className={styles.budgets}>
      <header className={styles.budgets__header}>
        <Heading mb="0">Budgets</Heading>
        <Button variant="primary">+ Add New Budget</Button>
      </header>
      <div className={styles.budgets__body}>
        <Summary />
        <Sections />
      </div>
    </div>
  );
}

export default Budgets;
