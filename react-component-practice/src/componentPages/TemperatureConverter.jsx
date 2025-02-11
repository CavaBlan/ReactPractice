import { useState } from "react";
import "./temperature-converter.css";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  function handleCtoF(value) {
    if (value === "") {
      setCelsius("");
      setFahrenheit("");
      return;
    }
    setCelsius(value);
    setFahrenheit(((value * 9) / 5 + 32).toFixed(2));
  }

  function handleFtoC(value) {
    if (value === "") {
      setFahrenheit("");
      setCelsius("");
      return;
    }
    setFahrenheit(value);
    setCelsius((((value - 32) * 5) / 9).toFixed(2));
  }

  return (
    <div className="container">
      <TemperBar type="celsius" display={celsius} onChange={handleCtoF} />
      <p>=</p>
      <TemperBar type="fahrenheit" display={fahrenheit} onChange={handleFtoC} />
    </div>
  );
}

function TemperBar({ type, display, onChange }) {
  return (
    <div>
      <input
        type="number"
        value={display}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <div>{type}</div>
    </div>
  );
}

export default TemperatureConverter;
