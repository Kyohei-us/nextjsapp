import styles from "../styles/alert.module.css";
import cn from "classnames";
import Layout from "./layout";

export default function Alert({ children }) {
  const [count, setCount] = React.useState("success");

  // useEffect(() => {
  // });

  function handleToggle() {
    if (count === "success") {
      setCount("error");
    } else if (count === "error") {
      setCount("success");
    }
  }

  return (
    <Layout>
      <div
        className={cn({
          [styles.success]: count === "success",
          [styles.error]: count === "error",
        })}
      >
        {children}
      </div>
      <button type="button" onClick={handleToggle}>
        {count}
      </button>
    </Layout>
  );
}
