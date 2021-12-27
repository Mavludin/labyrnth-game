import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFieldSize } from '../../../features/field/fieldSlice';
import { restartGame } from '../../../shared/logic';
import styles from './FieldForm.module.css';

export const FieldForm = () => {
  const inputRef = useRef();

  const fieldSize = useSelector((state) => state.fieldReducer.fieldSize);

  const dispatch = useDispatch();
  const handleFieldSizeChange = useCallback(() => {
    const fieldSizeValue = Number(inputRef.current.value);
    if (
      fieldSizeValue > 6 ||
      fieldSizeValue < 3 ||
      fieldSizeValue === fieldSize
    )
      return;
    dispatch(setFieldSize(fieldSizeValue));
    restartGame(dispatch);
  }, [dispatch, fieldSize]);

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === 'Enter') handleFieldSizeChange();
    };
    inputRef.current.addEventListener('keyup', handleEnter);
    return () => window.removeEventListener('keyup', handleEnter);
  }, [handleFieldSizeChange]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.fieldForm}>
      <div>
        <h3>Размер лабиринта:</h3>
        <input
          type='number'
          max='6'
          min='2'
          defaultValue={fieldSize}
          ref={inputRef}
          className={styles.input}
        />
      </div>
      <div>
        <button
          className={styles.btn}
          type='button'
          onClick={handleFieldSizeChange}
        >
          Установить
        </button>
      </div>
    </form>
  );
};
