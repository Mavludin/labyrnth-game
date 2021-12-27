import { FieldForm } from './FieldForm/FieldForm';
import { GameField } from './GameField/GameField';
import { Movements } from './Movements/Movements';

export const GameView = () => {
  return (
    <main>
      <FieldForm />
      <hr />
      <GameField />
      <Movements />
    </main>
  );
};
