import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [profession, setprofession] = useState("");
  const [imgURL, setimgURL] = useState("");
  const [allUsers, setallUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setallUsers([...allUsers,{name,profession,imgURL}]);
    console.log(allUsers);
    setname("");
    setprofession("");
    setimgURL("");
  };
  const deleteHandler = (i) => {
    var copyUsers = [...allUsers]
    copyUsers.splice(i, 1);
    setallUsers(copyUsers);    
  }  
  return (
    <div
      className="h-screen bg-yellow-50 py-10"
      id="main"
    >
      <h1 className="font-[monument] text-3xl text-center mb-[4vw]">TODO LIST</h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="w-screen p-[2vw]"
      >
        <input
          onChange={(elem) => {
            setname(elem.target.value);
          }}
          value={name}
          className="px-10 mr-5 shadow-sm hover:shadow-lg hover:shadow-yellow-200 transition-all h-[3vw] w-[45vw] rounded-lg border-2 border-gray-100 outline-none"
          type="text"
          placeholder="Enter items"
        />
        <input
        onChange={(elem)=>{
          setprofession(elem.target.value);
        }}
        value={profession}
          className="px-10 shadow-sm hover:shadow-lg hover:shadow-yellow-200 transition-all h-[3vw] w-[45vw] rounded-lg border-2 border-gray-100 outline-none"
          type="text"
          placeholder="Enter Profession"
        />
        <input
        onChange={(elem)=>{
          setimgURL(elem.target.value);
        }}
        value={imgURL}
          className=" px-10 mt-5 mr-5 shadow-sm hover:shadow-lg hover:shadow-yellow-200 transition-all h-[3vw] w-[75vw] rounded-lg border-2 border-gray-100 outline-none"
          type="text"
          placeholder="Enter ImageURL"
        />
        <input
          className="py-3 px-5 rounded-xl bg-yellow-400 active:scale-95 hover:bg-yellow-300"
          type="submit"
          value="Submit"
        />
      </form>
      <div className="p-[3vw]">
        {allUsers.map(function (elem,i) {
          return (
            <div
            key={i}
              className="p-2 h-[18vw] w-[16vw] rounded-lg inline-block mr-5 bg-white"
              id="card"
            >
              <button onClick={()=>{
                deleteHandler(i)
              }} className="text-red-500 text-xl"><i class="ri-close-circle-fill"></i></button>
              <img className="mx-auto h-[8vw] w-[8vw] rounded-full object-cover object-center" src={elem.imgURL} alt="" />
              <h1 className="my-4 text-3xl font-semibold text-center">{elem.name}</h1>
              <h3 className="text-gray-700 text-xl font-medium text-center">{elem.profession}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
