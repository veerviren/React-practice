import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function add() {
    setResult(num1 + num2);
  }

  function subtract() {
    setResult(num1 - num2);
  }

  function multiply() {
    setResult(num1 * num2);
  }

  function divide() {
    if (num2 === 0) {
        alert("You can't divide by 0!");
        return;
    }
    setResult(num1 / num2);
  }

  return (
    <>
      <h1>Calculator</h1>
      <p>Let's do some math.</p>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value))}
      />
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
      <p>Result will appear here: {result}</p>
    </>
  );
}

export default Calculator;
