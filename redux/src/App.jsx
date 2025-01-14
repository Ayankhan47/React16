import { useDispatch, useSelector } from "react-redux";
import { add, asyncremove } from "./store/action/productAction";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);
  const [productName, setproductName] = useState("");
  const [Amount, setAmount] = useState("");
  const [category, setcategory] = useState("");

  const AddHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: nanoid(),
      name: `${productName}`,
      price: `${Amount}`,
      category: `${category}`,
    };
    dispatch(add(newProduct));
    setAmount("");
    setproductName("");
    setcategory("");
    console.log(products);
    
  };
  const deleteHandler = (index) => {
    dispatch(asyncremove(index));
  };

  return (
    <div className="h-screen flex flex-col items-center p-10">
      <form className=" w-[90vw] px-8 py-4 rounded-xl bg-black flex flex-col gap-3" onSubmit={(e)=>{
        AddHandler(e)
      }}>
        <input
        className="h-[4vh] w-[50vw] rounded-xl px-4 border border-yellow-300"
          onChange={(elem) => {
            setproductName(elem.target.value);
          }}
          type="text"
          placeholder="enter product name"
          value={productName}
        />
        <input
          className="h-[4vh] w-[50vw] rounded-xl px-4 border border-yellow-300"
          onChange={(elem) => {
            setAmount(elem.target.value);
          }}
          type="text"
          placeholder="enter Amount"
          value={Amount}
        />
        <input
          className="h-[4vh] w-[50vw] rounded-xl px-4 border border-yellow-300"
          onChange={(elem) => {
            setcategory(elem.target.value);
          }}
          type="text"
          placeholder="enter category"
          value={category}
        />

        <button
          type="submit"
          className="bg-emerald-500 py-2 mx-[20vw] mt-6 px-3 rounded-lg"
          onClick={AddHandler}
        >
          Add Product
        </button>
      </form>
      <h1 className="text-4xl font-[monument]">Products</h1>
      <div className="h-[70vh] w-[50vw] grid grid-cols-3 p-10 bg-black overflow-x-auto ScrollbarHidden  text-white rounded-xl">
        {products?.map((product, index) => (
          <div className="mb-5 h-[20vh] w-[12vw] bg-cyan-600 rounded-3xl p-8" key={product.id}>
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <p>{product.category}</p>
            <button
              className="px-3 py-1 bg-red-500 rounded-lg text-white text-lg "
              onClick={() => {
                deleteHandler(index);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
