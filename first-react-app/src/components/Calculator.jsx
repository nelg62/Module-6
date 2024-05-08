import { useState } from "react";

const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log(data);
};

function Calculator() {
  const [fnumber, setFNumber] = useState("");
  const [MathValues, setMathValues] = useState("");
  const [snumber, setSnumber] = useState("");

  switch (MathValues) {
    case "+":
      OutputText.innerHTML = Number(fnumber) + Number(snumber);
      break;

    case "-":
      OutputText.innerHTML = Number(fnumber) + Number(snumber);
      break;

    case "*":
      OutputText.innerHTML = Number(fnumber) + Number(snumber);
      break;

    case "/":
      OutputText.innerHTML = Number(fnumber) + Number(snumber);
      break;
  }

  return (
    <form onSubmit={handleSubmit}>
      {MathValues}
      <label htmlFor="fnumber">First Number:</label>
      <input
        type="number"
        id="fnumber"
        name="fnumber"
        value={fnumber}
        onChange={(e) => setFNumber(e.target.value)}
        min="0"
        max="100"
      />

      <select id="MathValues" onChange={(e) => setMathValues(e.target.value)}>
        <option className="typebtn" name="+" value="+">
          +
        </option>
        <option className="typebtn" name="-" value="-">
          -
        </option>
        <option className="typebtn" name="*" value="*">
          *
        </option>
        <option className="typebtn" name="/" value="/">
          /
        </option>
      </select>

      <label htmlFor="snumber">Secound Number: </label>
      <input
        type="number"
        id="snumber"
        name="snumber"
        value={snumber}
        onChange={(e) => setSnumber(e.target.value)}
        min="0"
        max="100"
      />

      <button className="enter" value="=">
        =
      </button>
    </form>
  );
}

export default Calculator;
