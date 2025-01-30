/** @format */

import { useBudgets } from "../useBudgets";
import { useTransactions } from "../../transactions/useTransactions";

import SectionHeading from "../../../ui/SectionHeading/SectionHeading";
import SectionSummary from "../SectionSummary/SectionSummary";
import SectionDetails from "../SectionDetails/SectionDetails";
import styles from "./Sections.module.scss";

function BudgetSections() {
  const { isLoadingBudgets, budgets } = useBudgets();
  const { isLoadingTransactions, transactions } = useTransactions();

  if (isLoadingBudgets || isLoadingTransactions)
    return <p>Loading budgets...</p>;

  const budget = budgets.at(0); // Extract the first budget for testing

  const categories = budgets.map((budget) => budget.category);

  const categorizedTransactions = categories.map((category) => ({
    category,
    transactions: transactions
      .filter((transaction) => transaction.category === category)
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
      .slice(0, 3), // Get only the latest 3 transactions
  }));

  console.log(categorizedTransactions);

  return (
    <div className={styles.sections}>
      <section className={styles.section}>
        <SectionHeading heading={budget.category} theme={budget.theme} />
        <SectionSummary maximum={budget.maximum} theme={budget.theme} />
        <SectionDetails />
      </section>
    </div>
  );
}

export default BudgetSections;
