import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import fieldReducer from '../features/field/fieldSlice';
import userReducer from '../features/user/userSlice';

const reducer = combineReducers({
  modalReducer,
  fieldReducer,
  userReducer,
});

export const store = configureStore({ reducer });
