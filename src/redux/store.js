import { configureStore } from "@reduxjs/toolkit";
import GoodsSlice from "./GoodsSlice";
import CategorySlice from "./CategorySlice";
import FilterSlice from "./FilterSlice";
import ModalSlice from "./ModalSlice";
export const store = configureStore({
  reducer: {
    goods: GoodsSlice,
    category: CategorySlice,
    filter: FilterSlice,
    modal: ModalSlice,
  },
});
