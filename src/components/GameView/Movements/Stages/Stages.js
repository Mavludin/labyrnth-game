import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Movements.module.css';
import { startGame } from '../../../../features/user/userSlice';

export const Stages = ({ restartGame }) => {
  const answer = useSelector((state) => state.userReducer.answer);
  const gameStage = useSelector((state) => state.userReducer.gameStage);

  const dispatch = useDispatch();

  if (gameStage === 'processing') {
    return (
      <p className={styles.await}>
        <i>Следите за движениями ...</i>
      </p>
    );
  }

  if (gameStage === 'finished' && !answer.length) {
    return (
      <p className={styles.action}>
        <strong>
          <i>Выберите ячейку</i>
        </strong>
      </p>
    );
  }

  if (gameStage === 'finished' && answer.length) {
    return <button onClick={restartGame}>Перезапустить игру</button>;
  }

  return (
    <button
      onClick={() => {
        dispatch(startGame());
      }}
    >
      Старт
    </button>
  );
};
