import React, { useState } from "react";

function Calculator() {
  const [formData, setFormData] = useState({
    fnumber: "",
    MathValues: "+",
    snumber: "",
    calculatedValue: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fnumber, MathValues, snumber } = formData;
    let result = 0;
    switch (MathValues) {
      case "+":
        result = Number(fnumber) + Number(snumber);
        break;
      case "-":
        result = Number(fnumber) - Number(snumber);
        break;
      case "*":
        result = Number(fnumber) * Number(snumber);
        break;
      case "/":
        result = Number(fnumber) / Number(snumber);
        break;
      default:
        break;
    }
    setFormData({ ...formData, calculatedValue: result });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fnumber">First Number:</label>
      <input
        type="number"
        id="fnumber"
        name="fnumber"
        value={formData.fnumber}
        onChange={handleChange}
        min="0"
        max="100"
      />
      <select
        id="MathValues"
        name="MathValues"
        value={formData.MathValues}
        onChange={handleChange}
      >
        <option className="typebtn" value="+">
          +
        </option>
        <option className="typebtn" value="-">
          -
        </option>
        <option className="typebtn" value="*">
          *
        </option>
        <option className="typebtn" value="/">
          /
        </option>
      </select>
      <label htmlFor="snumber">Second Number:</label>
      <input
        type="number"
        id="snumber"
        name="snumber"
        value={formData.snumber}
        onChange={handleChange}
        min="0"
        max="100"
      />
      <button className="enter" type="submit">
        =
      </button>
      <p>{formData.calculatedValue}</p>
    </form>
  );
}

export default Calculator;
