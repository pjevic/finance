/** @format */

import ButtonDots from "../ButtonDots/ButtonDots";
import styles from "./SectionHeading.module.scss";

function SectionHeading({
  heading,
  theme,
  data,
  selectedOption,
  setSelectedOption,
  newBudget,
  setNewBudget,
  selectedTheme,
  setSelectedTheme,
}) {
  return (
    <header className={styles.header}>
      <span
        className={styles["header__heading-dot"]}
        style={{ backgroundColor: theme }}
      ></span>

      <h2 className={styles["header__heading"]}>{heading}</h2>
      <ButtonDots
        type="Budget"
        data={data}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        newBudget={newBudget}
        setNewBudget={setNewBudget}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        heading={heading}
      />
    </header>
  );
}

export default SectionHeading;
