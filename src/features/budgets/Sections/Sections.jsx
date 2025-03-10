/** @format */

import { getCategorizedTransactions } from "../../../utils/helpers";

import SectionHeading from "../../../ui/SectionHeading/SectionHeading";
import SectionSummary from "../SectionSummary/SectionSummary";
import SectionDetails from "../SectionDetails/SectionDetails";
import styles from "./Sections.module.scss";

function BudgetSections({
  isLoadingBudgets,
  budgets,
  isLoadingTransactions,
  transactions,
  selectedOption,
  setSelectedOption,
  newBudget,
  setNewBudget,
  selectedTheme,
  setSelectedTheme,
}) {
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
            <SectionHeading
              heading={category}
              theme={theme}
              data={transactions}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              newBudget={newBudget}
              setNewBudget={setNewBudget}
              selectedTheme={selectedTheme}
              setSelectedTheme={setSelectedTheme}
            />
            <SectionSummary maximum={maximum} theme={theme} spent={spent} />
            <SectionDetails data={transactions} />
          </section>
        )
      )}
    </div>
  );
}

export default BudgetSections;
