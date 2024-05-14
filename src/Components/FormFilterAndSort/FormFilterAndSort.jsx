import {
  resetFilters,
  setCategory,
  setMaxPrice,
  setMinPrice,
  setTitle,
} from "../../redux/FilterSlice";
import styles from "./form.module.css";
import { useDispatch, useSelector } from "react-redux";
function FormFilterAndSort() {
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state.category.category);
  const { title, category, minPrice, maxPrice } = useSelector(
    (state) => state.filter
  );

  return (
    <form className={styles.form}>
      <label className={styles.item}>
        <input
          type="text"
          placeholder="Введите название"
          value={title}
          onChange={(e) => {
            dispatch(setTitle(e.target.value));
          }}
        />
        <br />
        Найти товар
      </label>
      <label className={styles.item}>
        <select
          value={category}
          onChange={(e) => {
            if (e.target.value === "select") return;
            dispatch(setCategory(e.target.value));
          }}
        >
          <option value="select"></option>
          {categoriesList.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        Выберите категорию
      </label>
      <label className={styles.item}>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => {
            dispatch(setMinPrice(+e.target.value));
          }}
        />{" "}
        Min Price
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => {
            dispatch(setMaxPrice(+e.target.value));
          }}
        />
        Max Price
      </label>
      <button
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          dispatch(resetFilters());
        }}
      >
        Сбросить все
      </button>
    </form>
  );
}
export { FormFilterAndSort };
