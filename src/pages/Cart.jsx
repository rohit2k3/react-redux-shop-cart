import React, { useLayoutEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineBell,
} from "react-icons/ai";
import CartCard from "../components/CartCard";
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Cart = () => {
  const navigate = useNavigate();
  const data = useSelector(state => state.cart.items);
  const [totalPrice, settotalPrice] = useState(0);
  useLayoutEffect(() => {
    const newTotalPrice = data.reduce((acc, item) => acc + item.price, 0);
    settotalPrice(newTotalPrice);
  }, [data])
  return (
    <div>
      {/* home nav start */}
      <div className="m-4 mt-4 flex items-center justify-between">
        <AiOutlineArrowLeft className="text-2xl" onClick={() => {navigate("/")}}/>
        <h1 className="text-2xl font-inter font-semibold leading-[49px] break-words">
          Cart
        </h1>
        <div className="relative">
          <p className="absolute right-0 bg-black text-white text-center w-3 h-3 rounded-full flex items-center justify-center text-xs">
            1
          </p>
          <AiOutlineBell className="text-2xl" />
        </div>
      </div>
      {/* home nav end */}
      {data.length ? <><div>
        {data.map((item) => (
          <CartCard
          data={item}
          key={item.id}
          src={item.imageurl}
          title={item.title}
          price={item.price}
          size={item.size}
        />
        ))}
        
        
      </div>
      <div className="w-full my-4 h-10 flex justify-center items-center">
        <input
          className="bg-gray-300 h-full m-5 rounded-md w-full outline-none p-2"
          type="text"
          placeholder="Add a Voucher"
          name="voucher"
        />
      </div>
      <div>
        <div className="flex justify-between mx-6 my-2">
          <p className="text-gray-500 text-sm">Sub-total</p>
          <p className="text-black text-md font-inter font-semibold">
            INR {totalPrice}
          </p>
        </div>
        <div className="flex justify-between mx-6 my-2">
          <p className="text-gray-500 text-sm">VAT (%)</p>
          <p className="text-black text-md font-inter font-semibold">
            INR 0.00
          </p>
        </div>
        <div className="flex justify-between mx-6 my-2">
          <p className="text-gray-500 text-sm">Shipping</p>
          <p className="text-black text-md font-inter font-semibold">INR 80</p>
        </div>
        <hr className="mx-6  my-2" />
        <div className="flex justify-between mx-6 my-2">
          <p className="text-black text-md font-inter font-semibold">Total</p>
          <p className="text-black text-md font-inter font-semibold">INR {totalPrice + 80}</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-center items-center my-5 w-full h-10">
          <button className="w-full h-full text-center m-4 rounded-md flex justify-center items-center bg-black text-white p-2">
            Checkout <AiOutlineArrowRight className=" text-white m-2" />
          </button>
        </div>
      </div></> : <><h1 className="flex justify-center items-center">Cart is Empty</h1></>}
    </div>
  );
};

export default Cart;
