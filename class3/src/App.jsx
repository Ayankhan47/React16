import React, { useState } from "react";
import { Suspense } from "react";
const App = () => {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const submitHandler = (elem) => {
    elem.preventDefault();
  };
  const resetHandler = (elem) => {
    alert(`welcome ${name}`)
    setname("");
    setpass("");
  };
  return (
    <div id="main" className="h-screen flex items-center justify-center bg-[#DBE8D8] font-[gilroy]">
      <div id="box" className="h-[40vw] w-[40vw] bg-[#0A7029] rounded-lg py-8">
      <h1 className="text-center font-semibold text-2xl text-white mb-16">Log In With</h1>
        <div className="flex items-center justify-around mb-8" id="pre">
          <div className="h-10 w-[35%] bg-white rounded-md flex items-center justify-center hover:bg-gray-100 cursor-pointer" id="google">
            <h4 className="text-xl font-semibold"><i className="ri-google-fill text-[#0A7029] mr-3"></i>Google</h4>
          </div>
          <div className="h-10 w-[35%] bg-white rounded-md flex items-center justify-center hover:bg-gray-100 cursor-pointer" id="apple">
            <h4 className="text-xl font-semibold"><i className="ri-apple-fill mr-3"></i>Apple</h4>
          </div>
        </div>
        <div className="h-4 w-full flex items-center justify-around" id="division">
        <div className="line h-[1px] w-[45%] bg-gray-400"></div>
        <h3 className="text-white">or</h3>
        <div className="line h-[1px] w-[45%] bg-gray-400"></div>
        </div>
        <form
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className="h-[80%] flex flex-col items-start pl-8 justify-center  text-white font-semibold text-xl"
          action=""
        >
          <label><i className="ri-user-3-line"></i>Username/email</label>
          <input
            value={name}
            onChange={(elem) => {              
              setname(elem.target.value);
            }}
            className="mb-6 mt-2 w-[90%] bg-transparent border py-2 px-3 text-lg rounded-xl outline-none "
            type="text"
            placeholder="Username/email"
          />
          <label><i className="ri-lock-2-line"></i>Password</label>
          
          <input
          value={pass}
          onChange={(elem) => {
            setpass(elem.target.value)
          }}
            className=" mt-2 w-[90%] bg-transparent border py-2 px-3 text-lg rounded-xl outline-none "
            type="password"
            placeholder="Password"
          />
          <label className="mb-6"><a className="text-base text-[#C8DF52]" href="#">Forgot Password?</a></label>
          <input
            onClick={resetHandler}
            className="relative left-[50%] -translate-x-2/3 bg-[#FEDE00] py-3 px-10 mb-6 rounded-lg active:scale-95 cursor-pointer font-[monument] text-[#0A7029]"
            type="submit"
            value="Submit"
          />
          <label className=" mb-10 text-lg font-medium">Don't have an account? <a className="text-[#C8DF52]" href="#">Sign Up</a></label>
        </form>
      </div>
    </div>
  );
};

export default App;
