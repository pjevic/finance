/** @format */

"use client";

import { useBudgets } from "../../features/budgets/useBudgets";
import { useTransactions } from "../../features/transactions/useTransactions";
import { useCreateBudget } from "../../features/budgets/useCreateBudget";

import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";
import Heading from "../../ui/Heading/Heading";
import Form from "../../ui/Form/Form";
import Summary from "../../features/budgets/Summary/Summary";
import Sections from "../../features/budgets/Sections/Sections";
import FormSelect from "../../ui/FormSelect/FormSelect";
import FormInput from "../../ui/FormInput/FormInput";
import ThemeSelect from "../../ui/ThemeSelect/ThemeSelect";
import styles from "./Budgets.module.scss";

import { SELECT_CATEGORY, SELECT_COLOR } from "../../utils/constants";
import { useState } from "react";
import PageHeader from "../../ui/PageHeader/PageHeader";

function Budgets() {
  const { isLoadingBudgets, budgets } = useBudgets();
  const { isLoadingTransactions, transactions } = useTransactions();
  const { createBudget } = useCreateBudget();

  const [selectedOption, setSelectedOption] = useState(SELECT_CATEGORY.at(0));
  const [newBudget, setNewBudget] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(SELECT_COLOR.at(0));

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      category: selectedOption,
      maximum: newBudget,
      theme: selectedTheme.color,
      userID: 1, // This is for now hardcoded, if the app scales up with authentication and different users, it will not be hardcoded
    };

    SELECT_CATEGORY.forEach((theme) => {
      if (theme.name === selectedTheme.name) {
        theme.used.budget = true;
      }
    });

    createBudget(formData);
  };

  return (
    <div className={styles.budgets}>
      <PageHeader className={styles.budgets__header}>
        <Heading>Budgets</Heading>

        <Modal>
          <Modal.Open opens="Form: Add New Budget">
            <Button variant="primary">+ Add New Budget</Button>
          </Modal.Open>
          <Modal.Window
            name="Form: Add New Budget"
            heading="Add New Budget"
            description="Choose a category to set a spending budget. These categories can help you monitor spending."
          >
            <Form onSubmit={handleSubmit}>
              <FormSelect
                options={SELECT_CATEGORY}
                label="Budget Category"
                selectedOption={selectedOption}
                onChange={setSelectedOption}
              />

              <FormInput
                label="Maximum Spend"
                placeholder="$   e.g. 2000"
                value={newBudget}
                onChange={(e) => setNewBudget(e.target.value)}
              />

              <ThemeSelect
                label="Theme"
                options={SELECT_COLOR}
                selectedTheme={selectedTheme}
                onChange={setSelectedTheme}
              />

              <Button variant="primary--wide" type="submit">
                Add Budget
              </Button>
            </Form>
          </Modal.Window>
        </Modal>
      </PageHeader>

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
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          newBudget={newBudget}
          setNewBudget={setNewBudget}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
        />
      </div>
    </div>
  );
}

export default Budgets;
