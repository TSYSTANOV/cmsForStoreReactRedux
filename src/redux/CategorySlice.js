import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk("category/fetch", async () => {
  const data = await fetch("http://localhost:3024/api/category", {
    method: "GET",
  }).then((res) => res.json());

  return data;
});

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    category: [],
    loading: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = "success";
      state.category = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.loading = "failed";
    });
  },
});
export default CategorySlice.reducer;
