import { MdDeleteOutline } from "react-icons/md";
function GoodsItem({ id, category, price, title }) {
  return (
    <tr className="table-row table-goods-item" data-id={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td className="text-end">{price} &#8381;</td>
      <td className="d-flex">
        <button className="btn-table btn-delete" data-id={id}>
          <MdDeleteOutline style={{ width: "30px", height: "30px" }} />
        </button>
      </td>
    </tr>
  );
}
export { GoodsItem };
