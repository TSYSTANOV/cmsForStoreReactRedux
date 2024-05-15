import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchActiveGoods = createAsyncThunk("modal/fetch", async (id) => {
  const data = await fetch(`http://localhost:3024/api/goods/${id}`).then(
    (res) => res.json()
  );
  return data;
});

const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    openModal: false,
    activeGoodsId: "",
    activeGoods: {},
  },
  reducers: {
    toggleModal: (state) => {
      state.openModal = !state.openModal;
      state.activeGoodsId = "";
      state.activeGoods = {};
    },
    setActiveGoods: (state, action) => {
      state.activeGoodsId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchActiveGoods.fulfilled, (state, action) => {
      state.activeGoods = action.payload;
      state.openModal = true;
    });
  },
});
export const { toggleModal, setActiveGoods } = ModalSlice.actions;
export default ModalSlice.reducer;
