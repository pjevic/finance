/** @format */
"use client";

import { useState } from "react";

import Heading from "../../ui/Heading/Heading";
import Button from "../../ui/Button/Button";
import FormModal from "../../ui/FormModal/FormModal";
import FormSelect from "../../ui/FormSelect/FormSelect";
import FormInput from "../../ui/FormInput/FormInput";
import Summary from "../../features/budgets/Summary/Summary";
import Sections from "../../features/budgets/Sections/Sections";
import styles from "./Budgets.module.scss";

import { SELECT_CATEGORY } from "../../utils/constants";

function Budgets() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(SELECT_CATEGORY.at(0));
  const [newBudget, setNewBudget] = useState("");

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
      </FormModal>
    </div>
  );
}

export default Budgets;
