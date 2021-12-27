import { useDispatch, useSelector } from "react-redux";
import { GameView } from "./components/GameView/GameView";
import { RulesModal } from "./components/RulesModal/RulesModal";
import { showModal } from "./features/modal/modalSlice";

function App() {
  const modalVisibility = useSelector(state => state.modalReducer.visible);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button className="rulesBtn" onClick={() => dispatch(showModal())}>
        Показать правила игры
      </button>
      <h1>Игра "Лабиринт"</h1>
      <GameView />
      {modalVisibility && (
        <RulesModal />
      )}
    </div>
  );
}

export default App;
