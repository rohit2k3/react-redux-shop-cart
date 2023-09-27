import React from 'react'
import ImageCard from './ImageCard'
import {AiOutlineHeart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const CardShop = ({ title , price , imageURL , id}) => {

  const navigate = useNavigate();

  return (
    <div onClick={() => {navigate(`/product/${id}`)}} className=' rounded-md m-2 p-2  w-40  max-h-80'>
        <div className='relative bg-gray-300'>
        <AiOutlineHeart className='absolute right-2 text-4xl p-1 bg-white rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]' />
        <img src={imageURL} />
        </div>
        <p className='text-black text-sm  font-inter font-bold'>{title}</p>
        <p className='text-gray-500 text-sm'>INR {price}</p>
    </div>
  )
}

export default CardShop