import React from 'react'

function CartObject({ title, price, imageUrl }) {


  return (
    <>
      <div className="w-[300px] h-[420px] bg-[#e0e0e0] rounded-[10px] px-[15px] py-[15px] hover:shadow-gray-900 hover:shadow-lg hover:scale-105 duration-300 easy-out ">
        <img src={imageUrl} alt="" className="w-[270px] h-[200px] rounded-[10px] " />
        <p className="text-[16px] mt-[10px]">{title}</p>
        <p className="text-[16px] mt-[12px] font-light text-[#707070]">Артикул: 16512</p>
        <p className="text-[24px] mt-[5px] font-bold text-[#292929] mb-2">{price} <span className="text-[#707070] text-[15px]"> ₽/1кг</span></p>
        <div className="flex justify-between">
          <a href="#" className="text-white hover:text-gray-800 font-bold bg-main hover:bg-black duration-300 rounded-[25px] text-[17px] py-[10px] px-[30px] w-fit mt-[1vh] ">В корзину</a>
          <b href="#" className="text-white font-bold bg-main rounded-[25px] text-[17px] py-[10px] px-[20px] w-fit mt-[1vh] ">0</b>
        </div>
      </div>
    </>
  )
}

export default CartObject;
