import styles from "../styles/alert.module.css";
import Layout from "./layout";
import imageLayout from "../styles/imageLayout.module.css";

export default function GridImage({
  children,
  description,
  imagePath,
  classnamenumber,
}) {
  const [count, setCount] = React.useState("success");

  function handleToggle() {
    if (count === "success") {
      setCount("error");
    } else if (count === "error") {
      setCount("success");
    }
  }

  return (
    <div>
      <Layout>
        <div className={classnamenumber}>
          <img
            className={imageLayout.image}
            src={imagePath}
            onClick={handleToggle}
          ></img>
          <div>
            <p className={count}>{description}</p>
          </div>
        </div>
      </Layout>
      <style jsx>
        {`
          .success {
            color: green;
          }
          .error {
            color: red;
          }
        `}
      </style>
    </div>
  );
}
