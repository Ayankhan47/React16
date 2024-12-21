import React, { useState } from 'react';

const App = () => {

  const [value, setvalue] = useState(0);

  const incerse =()=>{
    setvalue(value+1)
  }
  const decrese =()=>{
    setvalue(value-1)
  }
  const incerse100 =()=>{
    setvalue(value+100)
  }
  const Reset =()=>{
    setvalue(0)
  }
  return (
    <div id='main' className='select-none bg-slate-200 h-screen flex flex-col gap-20 items-center justify-center'>
    <h1 className='font-[monument] text-blue-950 text-8xl  text-center'>VALUE IS <span className='bg-blue-200 rounded-xl py-3 px-5'>{value}</span></h1>
    <div id="buttons" className='flex gap-6'>
      <button onClick={incerse} className='bg-black text-white py-3 px-6 font-semibold text-2xl rounded-xl active:scale-95 '>INCRESE</button>
      <button onClick={decrese} className='bg-black text-white py-3 px-6 font-semibold text-2xl rounded-xl active:scale-95 '>DECRESE</button>
      <button onClick={incerse100} className='bg-black text-white py-3 px-6 font-semibold text-2xl rounded-xl active:scale-95 '>INCERSE BY 100</button>
      <button onClick={Reset} className='bg-black text-white py-3 px-6 font-semibold text-2xl rounded-xl active:scale-95 '>RESET</button>
    </div>
    </div>
  );
}

export default App;
