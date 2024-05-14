import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGoods = createAsyncThunk("goods/fetch", async () => {
  const data = await fetch("http://localhost:3024/api/goods?nopage=true", {
    method: "GET",
  }).then((res) => res.json());

  return data;
});

const GoodsSlice = createSlice({
  name: "goods",
  initialState: {
    goods: [],
    loading: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.loading = "success";
      state.goods = action.payload;
    });
    builder.addCase(fetchGoods.rejected, (state) => {
      state.loading = "failed";
    });
  },
});
export default GoodsSlice.reducer;
