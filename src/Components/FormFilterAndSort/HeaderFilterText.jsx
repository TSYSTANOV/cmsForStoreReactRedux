import { useSelector } from "react-redux";

const translate = {
  title: "Название",
  minPrice: "Минимальная цена",
  maxPrice: "Максимальная цена",
  category: "Категория",
};

function HeaderFilterText() {
  const filterParams = useSelector((state) => state.filter);
  const string = Object.keys(filterParams).reduce((acc, item) => {
    if (filterParams[item]) {
      acc.push(`${translate[item] + ": " + filterParams[item]}`);
    }
    return acc;
  }, []);

  return (
    <>
      {string.length > 0 && (
        <>
          <h3>Результаты поиска по запросу:</h3> <p>{string.join(", ")}</p>
        </>
      )}
    </>
  );
}
export { HeaderFilterText };
