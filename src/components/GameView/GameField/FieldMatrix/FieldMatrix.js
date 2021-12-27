import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  firstRandomIndex,
  secondRandomIndex,
} from '../../../../features/field/fieldSlice';
import { setUserAnswer } from '../../../../features/user/userSlice';
import { fieldGenerator } from '../../../../shared/generators';
import styles from '../GameField.module.css';
import raceFlag from './../../../../assets/images/race-flag.svg';

export const FieldMatrix = () => {
  const randomPosition = useSelector(
    (state) => state.fieldReducer.randomPosition
  );
  const fieldSize = useSelector((state) => state.fieldReducer.fieldSize);

  const fieldMatrix = fieldGenerator(fieldSize);

  const answer = useSelector((state) => state.userReducer.answer);
  const gameStage = useSelector((state) => state.userReducer.gameStage);
  const dispatch = useDispatch();
  const guess = (i, j) => {
    if (gameStage !== 'finished' || (gameStage === 'finished' && answer.length))
      return;
    dispatch(setUserAnswer([i, j]));
  };

  return (
    <section className={styles.field}>
      {fieldMatrix.map((array, i) => {
        return (
          <div className={styles.row} key={i}>
            {array.map((item, j) => {
              if (
                answer.length &&
                randomPosition[0] === i &&
                randomPosition[1] === j
              ) {
                return (
                  <div className={styles.btnWrapper} key={j}>
                    <button
                      className={styles.btn}
                      style={{ backgroundColor: 'lightgreen' }}
                    ></button>
                  </div>
                );
              }
              
              if (
                answer.length && answer[0] === i && answer[1] === j
              ) {
                return (
                  <div className={styles.btnWrapper} key={j}>
                    <button
                      className={styles.btn}
                      style={{ backgroundColor: 'red' }}
                    ></button>
                  </div>
                )
              }

              return (
                <div className={styles.btnWrapper} key={j}>
                  <button className={styles.btn} onClick={() => guess(i, j)}>
                    {i === firstRandomIndex && j === secondRandomIndex ? (
                      <img src={raceFlag} alt='race flag' />
                    ) : (
                      ''
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};
