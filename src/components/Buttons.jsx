function buttons({
  onButtonClick,
  onClearDisplay,
  onClickCalculate,
  onClickDelete,
}) {
  return (
    <>
      <div>
        <div className="flex justify-around mt-5 mb-5">
          <button onClick={() => onClearDisplay()}>clr</button>
          <button onClick={() => onClickDelete()}>DEL</button>
          <button onClick={() => onButtonClick("%")}>%</button>
          <button onClick={() => onButtonClick("/")}>/</button>
        </div>

        <div className="flex justify-around mt-5 mb-5">
          <button onClick={() => onButtonClick("7")}>7</button>
          <button onClick={() => onButtonClick("8")}>8</button>
          <button onClick={() => onButtonClick("9")}>9</button>
          <button onClick={() => onButtonClick("*")}>x</button>
        </div>

        <div className="flex justify-around mt-5 mb-5">
          <button onClick={() => onButtonClick("4")}>4</button>
          <button onClick={() => onButtonClick("5")}>5</button>
          <button onClick={() => onButtonClick("6")}>6</button>
          <button onClick={() => onButtonClick("-")}>-</button>
        </div>

        <div className="flex justify-around mt-5 mb-5">
          <button onClick={() => onButtonClick("1")}>1</button>
          <button onClick={() => onButtonClick("2")}>2</button>
          <button onClick={() => onButtonClick("3")}>3</button>
          <button onClick={() => onButtonClick("+")}>+</button>
        </div>

        <div className="flex justify-around mt-5 mb-5">
          <button onClick={() => onButtonClick(".")}>.</button>
          <button onClick={() => onButtonClick("0")}>0</button>
          <button id="equalButton" onClick={() => onClickCalculate()}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default buttons;
