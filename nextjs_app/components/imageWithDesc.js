import Layout from "./layout";
import imageLayout from "../styles/imageLayout.module.css";

export default function ImageWithDesc({ description, imagePath }) {
  return (
    <div>
      <Layout>
        <div className="container">
          <div className="hov">
            <img
              className={imageLayout.image}
              className="charImage"
              src={imagePath}
            ></img>
            <p className="desc">{description}</p>
          </div>
        </div>
      </Layout>
      <style jsx>
        {`
          .hov:hover .charImage {
            opacity: 0;
          }
          .hov:hover .desc {
            opacity: 1;
          }
          .desc {
            -webkit-transition: opacity 0.5s ease-in-out;
            transition: opacity 0.5s ease-in-out;
            justify-content: center;
            opacity: 0;
          }
          .charImage {
            -webkit-transition: opacity 0.5s ease-in-out;
            transition: opacity 0.5s ease-in-out;
            opacity: 1;
          }
          .container {
            width: 250px;
          }
          .hov {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .hov > * {
            grid-column-start: 1;
            grid-row-start: 1;
          }
        `}
      </style>
    </div>
  );
}
