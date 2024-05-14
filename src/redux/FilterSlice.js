import { createSlice } from "@reduxjs/toolkit";
const filterState = {
  title: "",
  category: "",
  minPrice: "",
  maxPrice: "",
};
const FilterSlice = createSlice({
  name: "filter",
  initialState: filterState,
  reducers: {
    resetFilters: (state) => {
      return filterState;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});
export const { resetFilters, setTitle, setCategory, setMinPrice, setMaxPrice } =
  FilterSlice.actions;
export default FilterSlice.reducer;
