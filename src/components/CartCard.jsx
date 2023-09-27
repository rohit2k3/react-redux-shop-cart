import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux"; 
import { add, remove, removePermanent } from "../redux/Slices/cart";

const CartCard = ({ data, src, title, size, price }) => {
  const dispatch = useDispatch(); 

  const incrementHandle = () => {
    dispatch(add(data)); 
  };

  const decrementHandle = () => {
    dispatch(remove(data)); 
  };
  const removeHandle = () => {
    dispatch(removePermanent(data)); 
  }

  return (
    <div className="flex border p-2 my-2 rounded">
      <div className="w-1/4">
        <img src={src} alt={title} className="w-16 h-16 object-cover" />
      </div>
      <div className="w-1/2">
        <p className="text-black text-md font-inter font-semibold">{title}</p>
        <p className="text-gray-500 text-sm">SIZE: {size}</p>
        <p className="text-gray-500 text-md">INR {price}</p>
      </div>
      <div className="w-1/4 flex flex-col items-end mx-2 justify-between">
        <RiDeleteBin6Line className="text-red-600" onClick={removeHandle}/>
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={decrementHandle}
            className="px-2 py-0.5 text-black text-lg font-inter font-semibold border border-gray-400 rounded-lg"
          >
            -
          </button>
          <p className="text-black text-md font-inter font-semibold">{data.quantity}</p>
          <button
            onClick={incrementHandle}
            className="px-2 py-0.5 text-black text-md font-inter font-semibold border border-gray-400 rounded-lg"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
