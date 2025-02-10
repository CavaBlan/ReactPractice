import { useState } from "react";
import "./counter.css";

function Counter() {
  const [step, setStep] = useState(0);
  const [num, setNum] = useState(0);

  function handleAddStep() {
    setStep((prev) => prev + 1);
  }

  function handleMinusStep() {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  }

  function handleAddNum() {
    setNum((prev) => prev + step);
  }

  function handleMinusNum() {
    setNum((prev) => prev - step);
  }

  return (
    <div className="counter">
      <div>
        <span>Step:</span>
        <Btn onClick={handleMinusStep}>-</Btn>
        <Number data={step} />
        <Btn onClick={handleAddStep}>+</Btn>
      </div>
      <div>
        <span>Number:</span>
        <Btn onClick={handleMinusNum}>-</Btn>
        <Number data={num} />
        <Btn onClick={handleAddNum}>+</Btn>
      </div>
    </div>
  );
}

function Btn({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function Number({ data }) {
  return <span>{data}</span>;
}

export default Counter;
