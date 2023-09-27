import React, { useEffect, useState } from "react";
import JOSNdata from "../product/product.json";
import { useParams } from "react-router-dom";
import { AiFillStar, AiOutlineArrowLeft, AiOutlineBell, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { add } from "../redux/Slices/cart";
import { useNavigate } from 'react-router-dom'

const Detail = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();

  const [size, setsize] = useState("");

  useEffect(() => {
    JOSNdata.forEach((dataset) => {
      if (dataset.id == id) {
        setdata(dataset);
      }
    });
  }, [id]);

// Define button classes based on whether they are selected or not
const getButtonClass = (buttonSize) => {
  return `p-4 mx-1 ${
    size === buttonSize ? "bg-black text-white" : "bg-gray-300 text-black"
  }`;
};
  const addToCartHandle = () => {
    if (size === "") {
      alert("First select size");
      return; // Exit the function if size is not selected
    }
    dispatch(add({ name: data.title, imageurl: data.image, quantity: 1, size, price: data.price, id }));
  };

  return (
    <div>
      {/* home nav start */}
      <div className="m-4 mt-4 flex items-center justify-between">
        <AiOutlineArrowLeft className="text-2xl" onClick={() => {navigate("/")}} />
        <h1 className="text-2xl font-inter font-semibold leading-[49px] break-words">
          {" "}
          Details{" "}
        </h1>
        <div className="relative">
          <p className="absolute right-0 bg-black text-white text-center w-3 h-3 rounded-full flex items-center justify-center text-xs">
            1
          </p>
          <AiOutlineBell className="text-2xl" />
        </div>
      </div>
      {/* home nav end */}
      <div className="flex justify-center items-center">
        <div className="relative h-2/5 w-3/5 ">
          <AiOutlineHeart className="absolute right-2 text-4xl p-1 bg-white rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10_px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" />
          <img src={data.image} alt={data.title} />
        </div>
      </div>
      <div className="m-4">
        <p className="text-black text-md font-inter font-semibold">{data.title}</p>
        <div className="flex my-4 items-center">
          <AiFillStar className="text-yellow-500" />
          {data.rate}/5 ({data.count} reviews)
        </div>
        <p className="text-gray-500 text-xs">{data.description}</p>
      </div>

      <div className="m-4">
        <p className="text-black text-sm font-inter font-semibold">Choose size</p>
        <div className="my-2">
        <button onClick={() => setsize("S")} className={getButtonClass("S")}>
            S
          </button>
          <button onClick={() => setsize("M")} className={getButtonClass("M")}>
            M
          </button>
          <button onClick={() => setsize("L")} className={getButtonClass("L")}>
            L
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center m-3">
        <div>
          <p className="text-gray-500 text-sm">Price</p>
          <p className="text-black text-2xl font-inter font-semibold">INR {data.price}</p>
        </div>
        <div>
          <button onClick={addToCartHandle} className="rounded-md flex justify-center items-center bg-black text-white p-2">
            <AiOutlineShoppingCart className="text-white m-2" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
