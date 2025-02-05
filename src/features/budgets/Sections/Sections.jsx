/** @format */

import { useBudgets } from "../useBudgets";
import { useTransactions } from "../../transactions/useTransactions";

import { getCategorizedTransactions } from "../../../utils/helpers";

import SectionHeading from "../../../ui/SectionHeading/SectionHeading";
import SectionSummary from "../SectionSummary/SectionSummary";
import SectionDetails from "../SectionDetails/SectionDetails";
import styles from "./Sections.module.scss";

function BudgetSections() {
  const { isLoadingBudgets, budgets } = useBudgets();
  const { isLoadingTransactions, transactions } = useTransactions();

  if (isLoadingBudgets || isLoadingTransactions)
    return <p>Loading budgets...</p>;

  const categorizedTransactions = getCategorizedTransactions(
    budgets,
    transactions
  );

  return (
    <div className={styles.sections}>
      {categorizedTransactions.map(
        ({ category, theme, maximum, spent, transactions }) => (
          <section key={category} className={styles.section}>
            <SectionHeading heading={category} theme={theme} />
            <SectionSummary maximum={maximum} theme={theme} spent={spent} />
            <SectionDetails data={transactions} />
          </section>
        )
      )}
    </div>
  );
}

export default BudgetSections;
