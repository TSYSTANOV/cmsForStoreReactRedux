import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    openModal:false,
    activeGoods:''
  },
  reducers: {
    toggleModal:(state)=>{
        state.openModal = !state.openModal
    },
    setActiveGoods:(state,action)=>{
        state.activeGoods = action.payload
    }
  },
});
export const { toggleModal, setActiveGoods } = ModalSlice.actions;
export default ModalSlice.reducer;
