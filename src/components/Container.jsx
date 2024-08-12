import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

function Container() {
  const [value, setValue] = useState("");

  const handleClick = (input) => {
    if (value == "error" || value == "Infinity") setValue(input);
    else setValue(value + input);
  };

  const clearDisplay = () => {
    setValue("");
  };

  const calculate = () => {
    try {
      setValue(eval(value));
    } catch (error) {
      setValue("error");
    }
  };

  const del = () => {
    if (value == "error" || value == "Infinity") setValue("");
    else setValue(value.toString().split("").slice(0, -1).join(""));
  };

  return (
    <>
      <div className="p-4 rounded-3xl bg-white shadow-2xl">
        <Display currentValue={value} />
        <Buttons
          onButtonClick={handleClick}
          onClearDisplay={clearDisplay}
          onClickCalculate={calculate}
          onClickDelete={del}
        />
      </div>
    </>
  );
}

export default Container;
