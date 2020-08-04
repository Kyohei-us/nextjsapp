import Link from "next/link";
import Head from "next/head";

export default function Calculator() {
  const [firstNum, setFirstNum] = React.useState(1);
  const [secondNum, setSecondNum] = React.useState(1);
  const [operator, setOperator] = React.useState("+");
  const [answer, setAnswer] = React.useState();

  async function confirmNum(e) {
    if (isNaN(e)) {
      console.log("wait until a number is typed in");
    } else {
      setFirstNum(e);
      console.log(e + " is e");
      setTimeout(process, 1000);
    }
  }

  async function confirmSecNum(e) {
    if (isNaN(e)) {
      console.log("wait until a number is typed in");
    } else {
      setSecondNum(e);
      console.log(e + " is e second");
      setTimeout(process, 1000);
    }
  }

  async function confirmOp(e) {
    setOperator(e);
    console.log(e + " is op");
    setTimeout(process, 1000);
  }

  async function process() {
    if (isNaN(answer)) {
      console.log("press calculate button");
      setAnswer("");
    }
    if (operator === "+") {
      setAnswer(parseInt(firstNum) + parseInt(secondNum));
    } else if (operator === "-") {
      setAnswer(parseInt(firstNum) - parseInt(secondNum));
    } else if (operator === "*") {
      setAnswer(parseInt(firstNum) * parseInt(secondNum));
    } else if (operator === "/") {
      setAnswer(parseInt(firstNum) / parseInt(secondNum));
    }
  }

  return (
    <>
      <Head>
        <title>Calculator</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine"
        ></link>
      </Head>
      <body>
        <div className="containerRoot">
          <a href="/">Go Back Home</a>
          <p>
            {firstNum} {operator} {secondNum} = {answer}
          </p>
          <p>Press Calculate button</p>
          <input
            type="text"
            placeholder="type number to calculate"
            value={firstNum}
            onChange={(e) => confirmNum(e.target.value)}
          ></input>
          <select
            name="operator"
            id="op-select"
            value={operator}
            onChange={(e) => confirmOp(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input
            type="text"
            placeholder="type number to calculate"
            value={secondNum}
            onChange={(e) => confirmSecNum(e.target.value)}
          ></input>
          <button onClick={process}>cal</button>
        </div>

        <style jsx>
          {`
          body {
            background-image url('/images/DjoFAH.jpg');
            font-family: 'Tangerine', serif;
            font-size: 48px;
            display: grid;}
        containerRoot {
            text-align: center;
            margin: auto;
        }
          `}
        </style>
      </body>
    </>
  );
}
