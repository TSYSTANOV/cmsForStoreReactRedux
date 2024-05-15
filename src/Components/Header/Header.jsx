import { useDispatch } from "react-redux";
import { FormFilterAndSort } from "../FormFilterAndSort/FormFilterAndSort";
import { useEffect } from "react";
import { fetchCategories } from "../../redux/CategorySlice";
import { HeaderFilterText } from "../FormFilterAndSort/HeaderFilterText";
import { toggleModal } from "../../redux/ModalSlice";
function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <>
      <h1 className="mb-3">Приложение для управления товарами</h1>
      <FormFilterAndSort />
      <HeaderFilterText />
      <button
        type="button"
        className="modal-open-btn btn btn-success d-block mb-3 ms-auto"
        onClick={()=>{
          dispatch(toggleModal())
        }}
      >
        Добавить товар
      </button>
    </>
  );
}
export { Header };
