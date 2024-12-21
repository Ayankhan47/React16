import React, { useState } from "react";
const App = () => {
  const [count, setcount] = useState(0);
  const CLickHandler = () => {
    return setcount(count + 1);
  };
  const Reset = () => {
    return setcount(0);
  };
  return (
    <>
      <div
        onClick={CLickHandler}
        id="main"
        className="select-none h-screen bg-black font-[monument] text-white flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl ">Click Anywhere</h1>
        <h2 className="text-6xl my-12">
          Times CLicked{" "}
          <span className=" bg-slate-300 py-2 px-5 rounded-sm text-black">
            {count}
          </span>
        </h2>
      </div>
      <button
        onClick={Reset}
        className="font-[gilroy] text-3xl font-semibold absolute top-[65%] left-[45%] bg-slate-50 text-black py-3 px-6 rounded-lg"
      >
        Reset
      </button>
    </>
  );
};

export default App;
