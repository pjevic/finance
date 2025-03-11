/** @format */

import PageHeader from "../../ui/PageHeader/PageHeader";
import Heading from "../../ui/Heading/Heading";
import Spinner from "../../ui/Spinner/Spinner";
import Pot from "../../ui/Pot/Pot";

import { usePots } from "../../features/pots/usePots";

import styles from "./Pots.module.scss";

function Pots() {
  const { isLoadingPots, pots } = usePots();

  return (
    <div className={styles.pots}>
      <PageHeader>
        <Heading>Pots</Heading>
      </PageHeader>

      <div className={styles.pots__body}>
        {isLoadingPots ? (
          <Spinner />
        ) : (
          pots?.map((pot) => <Pot key={pot.id} data={pot}></Pot>)
        )}
      </div>
    </div>
  );
}

export default Pots;
