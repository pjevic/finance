/** @format */

import { formatToDollarsWithPrefix, formatDate } from "../../utils/helpers";
import style from "./Table.module.scss";

const Table = ({ children }) => <div className={style.table}>{children}</div>;

const Header = ({ columns }) => (
  <header className={style.table__header}>
    {columns.map((col, index) => (
      <div key={index} className={style.table__headerCell}>
        {col}
      </div>
    ))}
  </header>
);

const Body = ({ rows }) => (
  <div>
    {rows.map((row, rowIndex) => {
      const { avatar, name, category, date, amount } = row;
      const amountClass =
        amount > 0 ? style.positiveAmount : style.negativeAmount;

      return (
        <div key={rowIndex} className={style.table__row}>
          <div className={style.table__cell}>
            <img
              src={avatar}
              alt={name || "User avatar"}
              width={40}
              height={40}
            />
            <span className={style.name}>{name}</span>
          </div>
          <p className={style.table__cell}>{category}</p>
          <p className={style.table__cell}>{date}</p>
          <data value={amount} className={`${style.amount} ${amountClass}`}>
            {amount}
          </data>
        </div>
      );
    })}
  </div>
);

Table.Header = Header;
Table.Body = Body;

export default Table;
