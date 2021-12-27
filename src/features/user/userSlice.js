import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  answer: [],
  gameStage: 'idle',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAnswer: (state, { payload }) => {
      state.answer = payload
    },
    startGame: (state) => {
      state.gameStage = 'processing'
    },
    finishGame: (state) => {
      state.gameStage = 'finished'
    },
    resetToIdle: (state) => {
      state.gameStage = 'idle'
    },
  },
})

export const { setUserAnswer, startGame, finishGame, resetToIdle } = userSlice.actions

export default userSlice.reducer