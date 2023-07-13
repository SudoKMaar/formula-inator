import "./calculator.scss";
import { useContext, useEffect, useState } from "react";
import cx from "classnames";
import { FiMoon, FiSun } from "react-icons/fi";
import { LightModeContext } from "./lightModeContext";

export default function Calculator() {
  const { lightMode, toogleLightMode } = useContext(LightModeContext);
  const handleClick = () => {
    toogleLightMode();
  };

  const [inputNum, setInputNum] = useState(0);
  const [monitor, setMonitor] = useState(0);
  const [decimal, setDecimal] = useState(false);
  const [decimalcount, setDecimalCount] = useState(1);
  const [operator, setOperator] = useState("");
  const [calculatednum, setCalculatednum] = useState(0);

  useEffect(() => {
    setMonitor(inputNum);
  }, [inputNum]);

  useEffect(() => {
    setMonitor(calculatednum);
  }, [calculatednum]);

  const inputNumTotal = (num) => {
    if (decimal) {
      num = num / Math.pow(10, decimalcount);
      setDecimalCount(decimalcount + 1);
      setInputNum(parseFloat((inputNum + num).toFixed(decimalcount)));
    } else {
      setInputNum(inputNum * 10 + num);
    }
  };

  const inputOperator = (operator) => {
    setOperator(operator);
    calculate();
    setInputNum(0);
  };

  const calculate = () => {
    setDecimal(false);
    setDecimalCount(1);
    if (operator === "/" && inputNum === 0) {
      setCalculatednum(NaN);
      setInputNum(0);
      return;
    }
    if (calculatednum === 0 && inputNum === 0) {
      return;
    }
    switch (operator) {
      case "+":
        setCalculatednum(calculatednum + inputNum);
        break;
      case "/":
        setCalculatednum(calculatednum / inputNum);
        break;
      case "*":
        setCalculatednum(calculatednum * inputNum);
        break;
      case "-":
        setCalculatednum(calculatednum - inputNum);
        break;
    }
    if (operator === "") setCalculatednum(inputNum);
    else setInputNum(0);
    return;
  };

  const equal = () => {
    calculate();
    setOperator("");
  };

  const clearall = () => {
    setInputNum(0);
    setCalculatednum(0);
    setMonitor(0);
    setOperator("");
  };

  return (
    <>
      <div
        className={
          lightMode ? cx("lightcalculator", "calculator") : "calculator"
        }
      >
        <section className="theme" onClick={handleClick}>
          {lightMode ? <FiSun className="lighticon" /> : <FiMoon />}
        </section>
        <section className="monitor">
          <p>{monitor}</p>
        </section>
        <section className="calcbtnContainer">
          <button
            onClick={clearall}
            className={lightMode ? "btnyellow" : "btngrey"}
          >
            AC
          </button>
          <button className={lightMode ? "btnyellow" : "btngrey"}>-/+</button>
          <button className={lightMode ? "btnyellow" : "btngrey"}>%</button>
          <button
            onClick={() => inputOperator("/")}
            className={lightMode ? "btnyellow" : "btngrey"}
          >
            /
          </button>
          <button
            onClick={() => inputNumTotal(7)}
            className={lightMode ? "btnred" : "btndavygrey"}
          >
            7
          </button>
          <button
            onClick={() => inputNumTotal(8)}
            className={lightMode ? "btnred" : "btndavygrey"}
          >
            8
          </button>
          <button
            onClick={() => inputNumTotal(9)}
            className={lightMode ? "btnred" : "btndavygrey"}
          >
            9
          </button>
          <button
            onClick={() => inputOperator("*")}
            className={lightMode ? "btnyellow" : "btngrey"}
          >
            *
          </button>
          <button
            onClick={() => inputNumTotal(4)}
            className={lightMode ? "btnred" : "btndavygrey"}
          >
            4
          </button>
          <button
            onClick={() => inputNumTotal(5)}
            className={lightMode ? "btnred" : "btndavygrey"}
          >
            5
          </button>
          <button
            onClick={() => inputNumTotal(6)}
            className={lightMode ? "btnred" : "btndavygrey"}
          >
            6
          </button>
          <button
            onClick={() => inputOperator("-")}
            className={lightMode ? "btnyellow" : "btngrey"}
          >
            -
          </button>
          <button
            onClick={() => inputNumTotal(1)}
            className={lightMode ? "btnred" : "btndavygrey"}
          >
            1
          </button>
          <button
            onClick={() => inputNumTotal(2)}
            className={lightMode ? "btnred" : "btndavygrey"}
          >
            2
          </button>
          <button
            onClick={() => inputNumTotal(3)}
            className={lightMode ? "btnred" : "btndavygrey"}
          >
            3
          </button>
          <button
            onClick={() => inputOperator("+")}
            className={lightMode ? "btnyellow" : "btngrey"}
          >
            +
          </button>
          <button
            onClick={() => inputNumTotal(0)}
            className={cx(lightMode ? "btnred" : "btndavygrey", "btnzero")}
          >
            0
          </button>
          <button
            onClick={() => setDecimal(true)}
            className={cx(lightMode ? "btnred" : "btndavygrey", "btndot")}
          >
            .
          </button>
          <button
            onClick={equal}
            className={lightMode ? cx("btntotallight", "btntotal") : "btntotal"}
          >
            =
          </button>
        </section>
      </div>
    </>
  );
}
