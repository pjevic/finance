/** @format */
"use client";

import { useState } from "react";
import { useCreateBudget } from "../../features/budgets/useCreateBudget";

import Heading from "../../ui/Heading/Heading";
import Button from "../../ui/Button/Button";
import FormModal from "../../ui/FormModal/FormModal";
import FormSelect from "../../ui/FormSelect/FormSelect";
import FormInput from "../../ui/FormInput/FormInput";
import ThemeSelect from "../../ui/ThemeSelect/ThemeSelect";
import Summary from "../../features/budgets/Summary/Summary";
import Sections from "../../features/budgets/Sections/Sections";
import styles from "./Budgets.module.scss";

import { SELECT_CATEGORY, SELECT_COLOR } from "../../utils/constants";

function Budgets() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(SELECT_CATEGORY.at(0));
  const [newBudget, setNewBudget] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(SELECT_COLOR.at(0));
  const { createBudget } = useCreateBudget();

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

    console.log("New Budget Data:", formData);
    setIsModalOpen(false);

    createBudget(formData);
  };

  return (
    <div className={styles.budgets}>
      <header className={styles.budgets__header}>
        <Heading mb="0">Budgets</Heading>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          + Add New Budget
        </Button>
      </header>
      <div className={styles.budgets__body}>
        <Summary />
        <Sections />
      </div>

      <FormModal
        heading="Add New Budget"
        description="Choose a category to set a spending budget. These categories can help you monitor spending."
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      >
        <FormSelect
          options={SELECT_CATEGORY}
          label="Budget Category"
          selectedOption={selectedOption}
          onChange={setSelectedOption}
        />

        <FormInput
          label="Target "
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
      </FormModal>
    </div>
  );
}

export default Budgets;
