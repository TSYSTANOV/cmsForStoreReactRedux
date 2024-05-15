import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGoods = createAsyncThunk("goods/fetch", async () => {
  const data = await fetch("http://localhost:3024/api/goods?nopage=true", {
    method: "GET",
  }).then((res) => res.json());

  return data;
});

export const fetchCreateGoods = createAsyncThunk(
  "goods/create",
  async (newGoods, thunkApi) => {
    const data = await fetch("http://localhost:3024/api/goods", {
      method: "POST",
      body: JSON.stringify(newGoods),
    }).then((res) => res.ok);
    if (data) {
      thunkApi.dispatch(fetchGoods());
    }
  }
);
export const fetchDeleteGoods = createAsyncThunk(
  "goods/delete",
  async (id, thunkApi) => {
    const data = await fetch(`http://localhost:3024/api/goods/${id}`, {
      method: "DELETE",
    }).then((res) => res.ok);

    if (data) {
      thunkApi.dispatch(fetchGoods());
    }
  }
);
export const fetchEditGoods = createAsyncThunk(
  "goods/edit",
  async (editGoods, thunkApi) => {
    const data = await fetch(
      `http://localhost:3024/api/goods/${editGoods.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(editGoods),
      }
    ).then((res) => res.ok);
    if (data) {
      thunkApi.dispatch(fetchGoods());
    }
  }
);

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
