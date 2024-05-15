import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods, fetchDeleteGoods } from "../../redux/GoodsSlice";
import { GoodsItem } from "./GoodsItem";
import { Spinner } from "../Spinner/Spinner";
import { setActiveGoods } from "../../redux/ModalSlice";

function TableOfGoods() {
  const { goods, loading } = useSelector((state) => state.goods);
  const { title, category, minPrice, maxPrice } = useSelector(
    (state) => state.filter
  );
  const filteredGoods = goods.filter((item) => {
    const titleCheck =
      item.title.toLowerCase().includes(title) || item.id.includes(title);
    const categoryCheck = category ? item.category === category : true;
    const minPriceCheck = minPrice ? item.price >= minPrice : true;
    const maxPriceCheck = maxPrice ? item.price <= maxPrice : true;
    return titleCheck && categoryCheck && minPriceCheck && maxPriceCheck;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoods());
  }, []);
  function handleTableClicker(e) {
    if (e.target.parentNode.tagName === "TR") {
      dispatch(setActiveGoods(e.target.parentNode.dataset.id));
    }
    if (e.target.parentNode.classList.contains("btn-delete")) {
      dispatch(fetchDeleteGoods(e.target.parentNode.dataset.id));
    }
    return;
  }
  return (
    <div className="table-responsive">
      {loading == "success" ? (
        <table className="table table-bordered">
          <thead className="table-light wrapper-sort">
            <tr>
              <th>
                <button
                  className="btn-sort btn btn-link w-100 h-100 text-decoration-none"
                  data-sort="id"
                >
                  id
                </button>
              </th>
              <th>
                <button
                  className="btn-sort btn btn-link w-100 h-100 text-decoration-none"
                  data-sort="title"
                >
                  Наименование товара
                </button>
              </th>
              <th>
                <button
                  className="btn-sort btn btn-link w-100 h-100 text-decoration-none"
                  data-sort="category"
                >
                  Категория
                </button>
              </th>
              <th>
                <button
                  className="btn-sort btn btn-link w-100 h-100 text-decoration-none"
                  data-sort="price"
                >
                  Стоимость
                </button>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody
            className="table-group-divider table-goods"
            onClick={handleTableClicker}
          >
            {filteredGoods.map((item) => {
              return <GoodsItem key={item.id} {...item} />;
            })}
          </tbody>
        </table>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
export { TableOfGoods };
