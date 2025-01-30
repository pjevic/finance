/** @format */

import { useBudgets } from "../useBudgets";
import { useTransactions } from "../../transactions/useTransactions";

import SectionHeading from "../../../ui/SectionHeading/SectionHeading";
import SectionSummary from "../SectionSummary/SectionSummary";
import SectionDetails from "../SectionDetails/SectionDetails";
import styles from "./Sections.module.scss";

function getCategorizedTransactions(budgets, transactions) {
  return budgets.map(({ category, theme, maximum }) => {
    const categoryTransactions = transactions
      .filter((transaction) => transaction.category === category)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    const totalSpent = categoryTransactions.reduce(
      (sum, { amount }) => sum + amount,
      0
    );
    const spent =
      maximum > 0 ? Math.round(Math.abs((totalSpent / maximum) * 100)) : 0;

    return {
      category,
      theme,
      maximum,
      spent,
      transactions: categoryTransactions.slice(0, 3),
    };
  });
}

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
