/** @format */

import PageHeader from "../../ui/PageHeader/PageHeader";
import Heading from "../../ui/Heading/Heading";
import Spinner from "../../ui/Spinner/Spinner";

import styles from "./RecurringBills.module.scss";

function RecurringBills() {
  return (
    <div className={styles.bills}>
      <PageHeader>
        <Heading>Recurring Bills</Heading>
      </PageHeader>

      <div className={styles.bills__body}>
        <div className={styles.bills__total}>TOTAL</div>
        <div className={styles.bills__summary}>SUMMARY</div>
        <div className={styles.bills__table}>TABLE</div>
        <div></div>
      </div>
    </div>
  );
}

export default RecurringBills;
