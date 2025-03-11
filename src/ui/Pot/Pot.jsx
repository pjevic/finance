/** @format */

import { formatToDollars } from "../../utils/helpers";
import ButtonDots from "../ButtonDots/ButtonDots";
import ButtonPot from "../ButtonPot/ButtonPot";

import styles from "./Pot.module.scss";

function Pot({ data }) {
  const percentage = (data.total / data.target) * 100;

  return (
    <div className={styles.pot}>
      <div className={styles.pot__header}>
        <div
          className={styles.pot__icon}
          style={{ backgroundColor: data.theme }}
        ></div>
        <div className={styles.pot__title}>{data.name}</div>
        <ButtonDots />
      </div>

      <div className={styles.pot__content}>
        <div className={styles.saved}>
          <p className={styles.saved__label}>Total Saved</p>
          <div className={styles.saved__value}>
            {formatToDollars(data.total)}
          </div>
        </div>

        <div className={styles.target}>
          <div className={styles.target__progress}>
            <div
              className={styles.target__bar}
              style={{
                width: `${percentage}%`,
                backgroundColor: data.theme,
              }}
            ></div>
          </div>

          <div className={styles.target__info}>
            <div className={styles.target__percentage}>
              {percentage.toFixed(2)}%
            </div>
            <div className={styles.target__amount}>
              Target of {formatToDollars(data.target)}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pot__actions}>
        <ButtonPot>+ Add Money</ButtonPot>
        <ButtonPot>Withdraw</ButtonPot>
      </div>
    </div>
  );
}

export default Pot;
