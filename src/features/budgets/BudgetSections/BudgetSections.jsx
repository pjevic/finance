/** @format */

import { Link } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";

import { useBudgets } from "../useBudgets";
import { formatToDollars } from "../../../utils/helpers";

import SectionHeading from "../../../ui/SectionHeading/SectionHeading";
import styles from "./BudgetSections.module.scss";

function BudgetSections() {
  const { isLoadingBudgets, budgets } = useBudgets();

  if (isLoadingBudgets) return <p>Loading budgets...</p>;

  const budget = budgets.at(0); // Extract the first budget for testing
  const width = 50;

  return (
    <div className={styles.sections}>
      <section className={styles.section}>
        <SectionHeading heading={budget.category} theme={budget.theme} />

        <div className={styles.summary}>
          <div>
            <span className={styles.summary__label}>Maximum of </span>
            <span className={styles.summary__value}>
              {formatToDollars(Number(budget.maximum))}
            </span>
          </div>

          <div className={styles.summary__range}>
            <div
              className={styles["summary__range-value"]}
              style={{ backgroundColor: budget.theme, width: `${width}%` }}
            ></div>
          </div>

          <div className={styles.summary__sub}>
            <div className={styles.summary__review}>
              <span
                className={styles["summary__review-theme"]}
                style={{ backgroundColor: budget.theme }}
              ></span>
              <span className={styles["summary__review-label"]}>Spent</span>
              <span className={styles["summary__review-value"]}>
                {formatToDollars(25)}
              </span>
            </div>

            <div className={styles.summary__review}>
              <span className={styles["summary__review-theme"]}></span>
              <span className={styles["summary__review-label"]}>Remaining</span>
              <span className={styles["summary__review-value"]}>
                {formatToDollars(25)}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <header className={styles.box__header}>
            <h3 className={styles["box__header-heading"]}>Latest Spending</h3>
            <button className={styles["box__header-button"]}>
              <Link to="/transactions" className={styles["box__header-link"]}>
                See All
              </Link>
              <span className={styles["box__header-icon-container"]}>
                <CaretDown weight="fill" size="1.2rem" />
              </span>
            </button>
          </header>
        </div>
      </section>
    </div>
  );
}

export default BudgetSections;
