import styles from "./spinner.module.css";
function Spinner() {
  return (
    <div className={styles["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
export { Spinner };
