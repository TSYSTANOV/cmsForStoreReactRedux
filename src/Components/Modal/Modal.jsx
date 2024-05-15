import { useDispatch, useSelector } from "react-redux";
import { fetchActiveGoods, toggleModal } from "../../redux/ModalSlice";
import { useEffect, useState } from "react";
import { fetchCreateGoods, fetchEditGoods } from "../../redux/GoodsSlice";
const formState = {
  title: "",
  price: "",
  display: "",
  description: "",
  category: "",
  image: "",
};
function Modal() {
  const dispatch = useDispatch();
  const [form, setForm] = useState(formState);
  const { openModal, activeGoodsId, activeGoods } = useSelector(
    (state) => state.modal
  );
  const categoryList = useSelector((state) => state.category.category);
  useEffect(() => {
    if (activeGoodsId) {
      dispatch(fetchActiveGoods(activeGoodsId));
    }
  }, [activeGoodsId]);
  useEffect(() => {
    if (activeGoods.id) {
      setForm({
        ...activeGoods,
        image: `http://localhost:3024/${activeGoods.image}`,
      });
    }
  }, [activeGoods]);

  function handleImageSave(e) {
    const file = new FileReader();
    file.addEventListener("loadend", () => {
      setForm({ ...form, image: file.result });
    });
    file.readAsDataURL(e.target.files[0]);
  }
  function handleSubmitForm(e) {
    e.preventDefault();
    dispatch(toggleModal());
    setForm(formState);
    if (activeGoodsId) {
      dispatch(fetchEditGoods(form));
    } else {
      dispatch(fetchCreateGoods(form));
    }
  }
  if (openModal || activeGoodsId) {
    return (
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={handleSubmitForm}>
            <div className="modal-header">
              <h5 className="modal-title" name="header">
                {activeGoodsId ? "Изменить товар" : "Добавить новый товар"}
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Закрыть модальное окно"
                onClick={() => {
                  dispatch(toggleModal());
                }}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Наименование"
                    aria-label="Наименование товара"
                    value={form.title}
                    onChange={(e) => {
                      setForm({ ...form, title: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <select
                    name="category"
                    className="form-control"
                    aria-label="Категория товара(eng/rus)"
                    value={form.category}
                    onChange={(e) => {
                      setForm({ ...form, category: e.target.value });
                    }}
                    required
                  >
                    <option></option>
                    {categoryList.map((item) => {
                      return <option key={item}>{item}</option>;
                    })}
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Описание"
                    aria-label="Описание товара"
                    rows="5"
                    value={form.description}
                    onChange={(e) => {
                      setForm({ ...form, description: e.target.value });
                    }}
                    required
                  ></textarea>
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="number"
                    className="form-control"
                    name="display"
                    step="0.01"
                    placeholder="Экран"
                    aria-label="Размер экрана"
                    value={form.display}
                    onChange={(e) => {
                      setForm({ ...form, display: +e.target.value });
                    }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    step="1"
                    name="price"
                    placeholder="Цена"
                    aria-label="Цена товара"
                    required
                    value={form.price}
                    onChange={(e) => {
                      setForm({ ...form, price: +e.target.value });
                    }}
                  />
                </div>
              </div>
              <hr />
              <label
                tabIndex="0"
                htmlFor="image"
                className="btn btn-primary d-block mx-auto"
              >
                Добавить изображение
              </label>
              <input
                className="visually-hidden"
                tabIndex="-1"
                type="file"
                name="image"
                id="image"
                accept="image/png"
                onChange={handleImageSave}
              />
              <input type="hidden" name="imagesave" />
              <div className="wrapper-preview">
                <img
                  className="preview"
                  src={form.image}
                  style={{ display: form.image ? "block" : "none" }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <input type="hidden" name="id" />
              <button
                type="submit"
                className="btn btn-primary modal-submit-btn"
              >
                {activeGoodsId ? "Изменить товар" : "Добавить товар"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export { Modal };
