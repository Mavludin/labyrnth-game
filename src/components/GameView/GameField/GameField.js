import { abcGenerator} from "../../../shared/generators";
import styles from "./GameField.module.css";
import { useSelector } from "react-redux";
import { FieldMatrix } from "./FieldMatrix/FieldMatrix";

export const GameField = () => {

  const fieldSize = useSelector(state => state.fieldReducer.fieldSize);

  const alphabetList = abcGenerator(fieldSize);
  return (
    <section className={styles.main}>
      <section className={styles.numbers}>
        {alphabetList.map((letter, i) => {
          return <div key={letter}>{i + 1}</div>;
        })}
      </section>
      <div>
        <section className={styles.letters}>
          {alphabetList.map((letter) => {
            return <div key={letter}>{letter}</div>;
          })}
        </section>
        <FieldMatrix />
      </div>
    </section>
  );
};
