import React, { useEffect } from 'react';
import FadeIn from 'react-fade-in';
import { useDispatch, useSelector } from 'react-redux';
import {
  setRandomDirections,
  setRandomPosition,
} from '../../../features/field/fieldSlice';
import {
  finishGame,
} from '../../../features/user/userSlice';
import { directions } from '../../../shared/generators';
import { restartGame } from '../../../shared/logic';
import styles from './Movements.module.css';
import { Stages } from './Stages/Stages';

export const Movements = () => {
  const randomPosition = useSelector(
    (state) => state.fieldReducer.randomPosition
  );
  const maxIndex = useSelector((state) => state.fieldReducer.fieldSize) - 1;
  const randomDirections = useSelector((state) => state.fieldReducer.randomDirections);

  const gameStage = useSelector((state) => state.userReducer.gameStage);

  const dispatch = useDispatch();
  useEffect(() => {
    let delay;
    let timeOut;
    if (randomDirections?.length < 10 && gameStage === 'processing') {
      delay = setTimeout(() => {
        const randomDirection = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        const a = [...randomPosition];

        if (randomDirection < 3) {
          a[0] += directions[randomDirection]?.addingBy;
        } else {
          a[1] += directions[randomDirection]?.addingBy;
        }
        if (a[0] < 0) a[0] = 0;
        if (a[1] < 0) a[1] = 0;
        if (a[0] > maxIndex) a[0] = maxIndex;
        if (a[1] > maxIndex) a[1] = maxIndex;
        dispatch(setRandomPosition(a));
        dispatch(setRandomDirections([...randomDirections, randomDirection]));
      }, 800);
    } else if (randomDirections?.length === 10) {
      timeOut = setTimeout(() => {
        dispatch(finishGame());
      }, 800);
    }
    return () => {
      clearTimeout(delay);
      clearTimeout(timeOut);
    };
  }, [dispatch, maxIndex, gameStage, randomDirections, randomPosition]);

  const directionContainers = Array.from(Array(10)).map((e, i) => i + 1);

  return (
    <section className={styles.directions}>
      <div className={styles.stages}>
        <Stages restartGame={() => restartGame(dispatch)} />
      </div>

      <div className={styles.list}>
        {directionContainers.map((number, i) => {
          return (
            <div className={styles.container} key={number}>
              <FadeIn>
                {randomDirections?.length
                  ? directions[randomDirections[i]]?.icon
                  : null}
              </FadeIn>
            </div>
          );
        })}
      </div>
    </section>
  );
};
