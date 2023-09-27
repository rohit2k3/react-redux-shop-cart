import React, { useState } from "react";
import {AiOutlineHome ,AiOutlineHeart , AiOutlineShoppingCart, AiOutlineSetting} from 'react-icons/ai'

import { Link } from "react-router-dom";


const Nav = () => {

const [selectBtn, setselectBtn] = useState("Home")


const buttonOptions = [
    { navUrl:"/", text: "Home", id: 1, logo:<AiOutlineHome className="w-5 h-5 mb-2 text-gray-500" />},
    { navUrl:"/", text: "Saved", id: 2,  logo:<AiOutlineHeart className="w-5 h-5 mb-2 text-gray-500" />},
    { navUrl:"/cart", text: "Cart", id: 3,  logo:<AiOutlineShoppingCart className="w-5 h-5 mb-2 text-gray-500" />},
    { navUrl:"/", text: "Setting", id: 4,  logo:<AiOutlineSetting className="w-5 h-5 mb-2 text-gray-500" />}
  ];


const optionsButtons = buttonOptions.map((option) => (
    <Link to={option.navUrl} onClick={() => setselectBtn(option.text)} key={option.id} className={`inline-flex flex-col items-center justify-center px-5 group ${
        selectBtn === option.text ? '' : ''
      }`}  >
        {React.cloneElement(option.logo, {
      className: `w-5 h-5 mb-2 ${
        selectBtn === option.text
          ? ''
          : 'text-gray-500'
      }`,
    })}
      {/* {option.logo} */}
    <span className={`text-sm ${
        selectBtn === option.text
          ? ''
          : 'text-gray-500'
      }`}>
      {option.text}
    </span>
  </Link>
  ));


  return (
    <div className="fixed bg-white bottom-0 left-0 z-50 w-full h-16 ">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {optionsButtons}
      </div>
    </div>
  );
};

export default Nav;
