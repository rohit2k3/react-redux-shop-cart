import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsSearch , BsFilter } from "react-icons/bs";
import CardShop from "../components/CardShop";
import JSONdata from "../product/product.json";
import { useNavigate } from 'react-router-dom'
import Nav from "../components/Nav";
const Home = () => {

  const [date, setdate] = useState("All");
  const navigate = useNavigate();


  const buttonOptions = [
    { text: "All", id: 1 },
    { text: "Men", id: 2 },
    { text: "Women", id: 3 },
    { text: "Kids", id: 4 }
  ];




  const optionsButtons = buttonOptions.map((option) => (
    <button
      className={`bg-gray-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 ${date === option.text ? 'invert' : ''
      }`}
      key={option.id}
      onClick={() => setdate(option.text)}
    >
      {option.text}
    </button>
  ));
  

  return (
    <div>
      {/* home nav start */}
      <div className="m-4 mt-4 flex items-center justify-between">
        <h1 className="text-2xl font-inter font-semibold leading-[49px] break-words"> Discover </h1>
        <div className="relative">
          <p className="absolute right-0 bg-black text-white text-center w-3 h-3 rounded-full flex items-center justify-center text-xs">
            1
          </p>
          <AiOutlineBell className="text-2xl" />
        </div>
      </div>
      {/* home nav end */}
      {/* search start */}
      <div className="flex justify-around items-center w-auto m-4 h-10 rounded-md bg-transparent bg-slate-400">
        <div className="rounded-md h-full w-3/4 p-2 bg-gray-300 flex items-center">
          <BsSearch className="text-3xl"/>
          <input placeholder="Search anything" className="m-4 bg-transparent h-full w-full outline-none" type="text" name="" id="" />
        </div>
        <div className="bg-black rounded-md">
          <BsFilter className="text-white text-4xl"/>
        </div>
      </div>
      {/* search end */}

      <div className="flex items-center justify-center">
      {optionsButtons}
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {JSONdata.map((data) => (
          <CardShop id={data.id} key={data.id} title={data.title} price={data.price} imageURL={data.image}/>
        ))}
      </div>
      <div className="mt-16">
        <Nav />
      </div>
    </div>
  );
};

export default Home;
