import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../features/modal/modalSlice';
import styles from './RulesModal.module.css';

export const RulesModal = () => {
  const checkbox = useRef();

  const visible = useSelector((state) => state.modalReducer.visible);

  const dispatch = useDispatch();
  const handleModalShow = () => {
    if (checkbox.current.checked) {
      localStorage.setItem('showModal', false);
    } else {
      localStorage.removeItem('showModal');
    }
    dispatch(hideModal());
  };

  const fieldSize = useSelector((state) => state.fieldReducer.fieldSize);

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.rules}>
        <header>
          <h2>Вот что тебя ждет в игре:</h2>
          <ul>
            <li>
              В начале игры в случайную ячейку помещается маркер. Далее, по
              нажатию на кнопку <strong>Старт</strong>, генерируются 10{' '}
              <strong>ходов</strong> (возможные варианты «вверх», «влево»,
              «вниз», «вправо»);
            </li>
            <li>
              {' '}
              Вы должены в уме <strong>пройти</strong> по этим ходам по
              лабиринту и указать конечную точку маркера;
            </li>
            <li>
              {' '}
              После ответа (клик на ячейку) идет проверка ответа: если выбрана
              правильная ячейка: она подстветится зеленым цветом, если
              неправильная - красным и параллельно подстветится зеленой
              правильная;
            </li>
            <li> Вы также можете перезапустить игру.</li>
          </ul>
        </header>

        <ul>
          <li>Уровней сложности - 4. Каждый уровень зависит от количества ячеек в игровой зоне;</li>
          <li>Самый легкий уровень - 1, это зона 3х3;</li>
          <li>Самый сложный уровень - 4, это зона 6х6.</li>
        </ul>
          
        <h2>Текущие параметры игры:</h2>
        <p>
          <strong>Уровень сложности: </strong> {fieldSize - 2}
        </p>
        <p>
          <strong>Скорость:</strong> 1
        </p>
        <p>
          <strong>Количество ходов:</strong> 10
        </p>

        <footer>
          <form>
            <input
              ref={checkbox}
              defaultChecked={visible}
              type='checkbox'
              id='forModal'
            />
            <label htmlFor='forModal'>Не показывать больше</label>
          </form>
          <button onClick={handleModalShow}>Понятно</button>
        </footer>
      </div>
    </>
  );
};
