import Link from "next/link";
import Head from "next/head";
import Alert from "../components/alertjs";
import imageLayout from "../styles/imageLayout.module.css";
import GridImage from "../components/gridImage";

// function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

export default function Sub() {
  return (
    <>
      <Head>
        <title>Sub page</title>
      </Head>
      <body>
        <div>from Sub</div>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <Alert children="children"></Alert>
        <div className={[imageLayout.wrapper]}>
          <GridImage
            description="Himiko Toga"
            imagePath="/images/EYXzephVcAAdSzx_orig.jpg"
            classnamenumber="one"
          ></GridImage>

          <GridImage
            description="Jojo Part5"
            imagePath="/images/4a13fbfffaf41113759507a86c12b0af.png"
            classnamenumber="two"
          ></GridImage>
          <GridImage
            description="Jolyne"
            imagePath="/images/Jolyne-mug-shot.jpg"
            classnamenumber="three"
          ></GridImage>
          <GridImage
            description="Killer Queen"
            imagePath="/images/253-2531050_killer-queen-jojo-stats.jpg"
            classnamenumber="four"
          ></GridImage>
        </div>
        <style jsx>
          {`
          body {background-image url('/images/DjoFAH.jpg');}
          `}
        </style>
      </body>
    </>
  );
}
