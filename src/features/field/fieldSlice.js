import { createSlice } from '@reduxjs/toolkit';
import { generateRandomIndexes } from '../../shared/generators';

const fieldSize = 3;
export let firstRandomIndex;
export let secondRandomIndex;

({ firstRandomIndex, secondRandomIndex } = generateRandomIndexes(fieldSize));

const initialState = {
  fieldSize,
  randomPosition: [firstRandomIndex, secondRandomIndex],
  randomDirections: [],
}

export const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    setRandomPosition: (state, action) => {
      state.randomPosition = action.payload
    },
    setFieldSize: (state, action) => {
      state.fieldSize = action.payload;
      ({ firstRandomIndex, secondRandomIndex } = generateRandomIndexes(state.fieldSize));
      state.randomPosition = [firstRandomIndex, secondRandomIndex]
    },
    resetField: (state) => {
      ({ firstRandomIndex, secondRandomIndex } = generateRandomIndexes(state.fieldSize));
      state.randomPosition = [firstRandomIndex, secondRandomIndex]
    },
    setRandomDirections: (state, action) => {
      state.randomDirections = action.payload
    }
  },
})

export const { setRandomPosition, setFieldSize, resetField, setRandomDirections } = fieldSlice.actions

export default fieldSlice.reducer