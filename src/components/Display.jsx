function Display({ currentValue }) {
  return (
    <>
      <div>
        <input
          id="display"
          className="bg-white text-5xl text-slate-400 mt-7 mb-7 p-4 h-20 w-72 shadow-xl border-none rounded-full cursor-default max-sm:w-72 max-sm:mt-3 max-sm:mb-3"
          type="text"
          value={currentValue}
          readOnly
        />
      </div>
    </>
  );
}

export default Display;
