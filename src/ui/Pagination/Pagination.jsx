/** @format */
import { CaretDown } from "@phosphor-icons/react";
import Button from "../Button/Button";
import styles from "./Pagination.module.scss";

function Pagination({ totalPages, currentPage }) {
  return (
    <div className={styles.pagination}>
      <Button
        label="Prev"
        icon={
          <CaretDown
            size="1.6rem"
            weight="fill"
            style={{ transform: "rotate(90deg)" }}
          />
        }
        iconPosition="left"
      />
      <div className={styles.pagination__pages}>
        <Button type="square">1</Button>
        <Button type="square--active">2</Button>
        <Button type="square">3</Button>
        <Button type="square">4</Button>
        <Button type="square">5</Button>
      </div>
      <Button
        label="Next"
        icon={
          <CaretDown
            size="1.6rem"
            weight="fill"
            style={{ transform: "rotate(-90deg)" }}
          />
        }
        iconPosition="right"
      />
    </div>
  );
}

export default Pagination;
