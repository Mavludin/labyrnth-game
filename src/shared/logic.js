import { resetField, setRandomDirections } from "../features/field/fieldSlice";
import { resetToIdle, setUserAnswer } from "../features/user/userSlice";

export const restartGame = (dispatch) => {
  dispatch(setRandomDirections([]));
  dispatch(resetField());
  dispatch(setUserAnswer([]));
  dispatch(resetToIdle());
}