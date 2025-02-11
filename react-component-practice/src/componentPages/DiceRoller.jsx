import { useState } from "react";
import "./dice-roller.css"

function DiceRoller() {
  const [diceNum, setDiceNum] = useState(0);
  const [dices, setDices] = useState([]);

  return (
    <div className="dice-roller">
      <RollBar diceNum={diceNum} setDiceNum={setDiceNum} setDices={setDices}/>
      <DiceContainer dices={dices}/>
    </div>
  );
}

// numBox box and Roll button
function RollBar({ diceNum, setDiceNum, setDices }) {
  function handleDiceNum(e) {
    setDiceNum(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    // console.log(diceNum);

    const newDices = Array.from({length: diceNum}, ()=>(
      Math.floor(Math.random() * 6) + 1
    ));

    setDices(newDices);
    // console.log("Generated dices:", newDices);
  }

  

  return (
    <div>
      <h1>Number of Dice</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" min={0} max={12} className = "numInput" onChange = {handleDiceNum} value = {diceNum}/>
        <button type="submit">Roll</button>
      </form>
    </div>
  );
}

// Deces
function DiceContainer({dices}) {
  return (
    <div className="dice-container">
      {dices.map((result, id)=>(
        <Dice key={id} result={result}/>
      ))}
    </div>
  );
}

function Dice({result}){
  if (result === 1) {
    return (
      <div className="dice">
        <div className="dot center"></div>
      </div>
    );
  }
  if (result === 2) {
    return (
      <div className="dice">
        <div className="dot top-left"></div>
        <div className="dot bottom-right"></div>
      </div>
    );
  }
  if (result === 3) {
    return (
      <div className="dice">
        <div className="dot top-left"></div>
        <div className="dot center"></div>
        <div className="dot bottom-right"></div>
      </div>
    );
  }
  if (result === 4) {
    return (
      <div className="dice">
        <div className="dot top-left"></div>
        <div className="dot top-right"></div>
        <div className="dot bottom-left"></div>
        <div className="dot bottom-right"></div>
      </div>
    );
  }
  if (result === 5) {
    return (
      <div className="dice">
        <div className="dot top-left"></div>
        <div className="dot top-right"></div>
        <div className="dot center"></div>
        <div className="dot bottom-left"></div>
        <div className="dot bottom-right"></div>
      </div>
    );
  }
  if (result === 6) {
    return (
      <div className="dice">
        <div className="dot top-left"></div>
        <div className="dot top-right"></div>
        <div className="dot middle-left"></div>
        <div className="dot middle-right"></div>
        <div className="dot bottom-left"></div>
        <div className="dot bottom-right"></div>
      </div>
    );
  }
}

export default DiceRoller;