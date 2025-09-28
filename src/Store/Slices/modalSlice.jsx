import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  modalData: {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalVisible: (state) => {
      state.isModalOpen = true;
    },
    modalInVisible: (state) => {
      state.isModalOpen = false;
    },
    setModalData: (state, action) => {
      state.modalData = action.payload;
    }
  },
});

export const { modalInVisible, modalVisible, setModalData } = modalSlice.actions;

export default modalSlice.reducer;
