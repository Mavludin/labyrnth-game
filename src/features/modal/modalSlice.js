import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visible: localStorage.getItem('showModal') !== 'false',
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state) => {
      state.visible = true
    },
    hideModal: (state) => {
      state.visible = false
    },
  },
})

export const { showModal, hideModal } = modalSlice.actions

export default modalSlice.reducer