/** @format */

import { formatToDollars } from "../../utils/helpers";

import ButtonDots from "../ButtonDots/ButtonDots";
import ButtonPot from "../ButtonPot/ButtonPot";

import styles from "./Pot.module.scss";

function Pot({ data }) {
  return (
    <div className={styles.pot}>
      <div className={styles.pot__header}>
        <div
          className={styles["pot__header-circle"]}
          style={{ backgroundColor: data.theme }}
        ></div>
        <div className={styles.pot__heading}>{data.name}</div>
        <ButtonDots />
      </div>

      <div className={styles.pot__data}>
        <div className={styles["pot__data--saved"]}>
          <p className={styles["pot__data--saved-text"]}>Total Saved</p>
          <div className={styles["pot__data--saved-value"]}>
            {formatToDollars(data.total)}
          </div>
        </div>
        <div>{data.target}</div>
      </div>

      <div className={styles.pot__options}>
        <ButtonPot>+ Add Money</ButtonPot>
        <ButtonPot>Withdraw</ButtonPot>
      </div>
    </div>
  );
}

export default Pot;
