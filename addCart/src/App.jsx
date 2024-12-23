import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [getdata, setgetdata] = useState([]);
  const [cart, setcart] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setgetdata(data);
    console.log(getdata);
  };

  const trimToWords = (str, wordLimit) => {
    let words = str.split(/\s+/)
    let trimmedStr = words.slice(0, wordLimit).join(" ");
    return trimmedStr;
  };

  const [count, setcount] = useState(0);
  const openCart = () => {
    if (count % 2 == 0) {
      document.getElementById("cart").style.display = "block";
    } else {
      document.getElementById("cart").style.display = "none";
    }
    setcount(count + 1);
    console.log(count);
  };

  const addToCart = (idx) => {
    const copyArr = [...cart, getdata[idx]];
    setcart(copyArr);
    console.log(copyArr);
  };
  const removeFromCart = (idx) => {
    const copyArr = [...cart];
    copyArr.splice(idx, 1);
    setcart(copyArr);
  };

  return (
    <div id="main" className="relative font-[helvetica] bg-black">
      <div
        id="Nav"
        className=" px-10 py-2  fixed z-[999] w-[100vw] top-0 flex items-center justify-between bg-black"
      >
        <h1 className="font-[monument] text-white ml-10 text-2xl tracking-wider">
          <i className="ri-shopping-bag-line"></i> Store
        </h1>
        <div
          id="rightNav"
          className="flex items-center gap-6 text-base text-white font-[gilroy]"
        >
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Category</a>
          <a href="#">Contact Us</a>
          <button
            onClick={fetchData}
            className="py-2 px-4 bg-white text-black rounded-lg font-medium text-base"
            id="getdata"
          >
            Get Data
          </button>
          <button
            onClick={openCart}
            id="cartbtn"
            className="py-2 px-5 text-md text-white"
          >
            Cart <i className="ri-shopping-cart-fill"></i>
          </button>
        </div>
      </div>
      <div id="products" className="p-5 mt-10 grid grid-cols-4 relative">
        {getdata.map(function (elem,idx) {
          let trimTitle = trimToWords(elem.title, 5);
          let trimDiscription = trimToWords(elem.description,6);
          return(
          <div
              key={idx}
              id="card"
              className=" mb-5 px-2  h-[16vw] w-[23vw] bg-white flex rounded-xl overflow-hidden"
            >
              <div className="left w-[50%]">
                <img
                  className=" mx-auto mb-2 h-[100%] w-[100%] object-contain"
                  src={elem.image}
                  alt=""
                />
              </div>
              <div className="right p-4 w-[50%] relative flex flex-col gap-1 justify-end">
                <h5 className=" text-white bg-black rounded-lg py-1 px-2 font-gilroy capitalize absolute top-1 right-1 font-base text-xs">
                  {elem.category}
                </h5>
                <h1>{trimTitle}...</h1>
                <p className="text-xs h-8 overflow-hidden text-gray-700">{trimDiscription}...</p>
                <h3 className="font-semibold text-lg font-[gilroy]">${elem.price}</h3>
                <div
                  id="rating"
                  className="flex items-center justify-start gap-6 text-s text-gray-800"
                >
                  <h5>
                    <i className="ri-star-s-fill"></i>
                    {elem.rating.rate}
                  </h5>
                  <h5>
                    <i className="ri-user-3-fill"></i>
                    {elem.rating.count}
                  </h5>
                </div>
                <button
                  onClick={() => addToCart(idx)}
                  className="py-2 px-4 bg-emerald-500 text-white hover:bg-emerald-600 active:scale-[0.97] rounded-lg font-medium text-base"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          )
        })}
        <div
          id="cart"
          className=" fixed p-5 top-14 right-6 hidden h-[43vw] w-[30vw] rounded-lg overflow-y-auto glass transition-all"
        >
          {cart.map(function (elem,idx) {
            let trimDiscription = trimToWords(elem.description,10)
            let trimTitle = trimToWords(elem.title, 5);
            return (
              <div
                key={idx}
                className=" h-[14vw] w-[28vw] flex  rounded-lg mr-5 bg-white mb-4"
              >
                <div className="left w-[50%]">
                  <img className="h-[80%] mx-auto object-contain" src={elem.image} alt="" />
                </div>
                <div className="right w-[50%] flex flex-col gap-2 justify-center items-start p-5">

                <h1>{trimTitle}</h1>
                <p className="text-[12px] text-gray-700">{trimDiscription}...</p>
                <h3 className="font-semibold text-xl">${elem.price}</h3>
                <button onClick={()=>{
                  removeFromCart(idx)
                }} className="py-1 px-2 bg- bg-red-500 hover:bg-red-700 active:scale-[0.97] rounded-lg text-white">Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
