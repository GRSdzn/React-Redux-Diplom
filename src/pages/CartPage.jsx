import React from 'react'

const CartPage = () => {
  return (
    <div className="">
      <div className="flex p-8 justify-between flex-wrap  rounded-[5px] bg-[transparent] border-2 border-[#2E2E2E] ">
        <div className="">
          <img src="https://media.wired.com/photos/5b493b6b0ea5ef37fa24f6f6/1:1/w_1800,h_1800,c_limit/meat-80049790.jpg" alt="img" width='700' className="rounded-[5px] max-h-[700px] h-full w-full max-w-[600px]" />
        </div>
        <div className="flex flex-col">
          <div className="text-white max-w-[800px]">
            <h1 className="text-[35px] text-main font-bold mb-10">Title</h1>
            <p className="">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quod atque id nam, dolorum numquam est maxime velit quidem saepe. Facere dolore in fugit, ducimus molestias dignissimos officia perspiciatis et? a dipisicing elit. Sequi quia eligendi atque ratione ipsum modi, a dolores quibusdam non quae tempore eveniet repellat nemo asperiores architecto sint error provident voluptas?</p>
          </div>
          <div className="text-gray-600 mt-5">
            <h2>Категории</h2>
            <ul className="flex gap-2">
              <li className="border-b-[1px] border-gray-600">Мясо</li>
              <li>Говядина</li>
              <li>Новинки</li>
            </ul>
          </div>
          <div>
            <button href="#" className="text-white hover:text-gray-800 font-bold bg-main hover:bg-main duration-300 rounded-[25px] text-[17px] py-[10px] px-[30px] mt-8 ">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage;