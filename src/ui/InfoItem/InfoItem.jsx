/** @format */

import { formatToDollars } from "../../utils/helpers";
import styles from "./InfoItem.module.scss";

function InfoItem({ name, color, total }) {
  return (
    <div key={name} className={styles.detail}>
      <div className={styles.line} style={{ backgroundColor: color }}></div>
      <div>
        <span className={styles.name}>{name}</span>
        <div className={styles.sum}>
          {formatToDollars(Number(total)).slice(0, -3)}
        </div>
      </div>
    </div>
  );
}

export default InfoItem;
