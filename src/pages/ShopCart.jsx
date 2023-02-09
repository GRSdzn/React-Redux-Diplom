import { Link } from "react-router-dom";

const ShopCart = () => {
  return (
    <div className='min-h-[100vh] text-white px-[10vh] py-[8vh]'>
      <div className="flex justify-center text-[38px] font-bold">
        <h1 className="text-main pb-8 stroke-white">Содержимое корзины</h1>
      </div>
      <div>
        <p className="cursor-pointer my-5 text-gray-700 hover:text-gray-500 duration-300">Очистить корзину</p>
      </div>
      <div className="rounded-[5px] bg-[transparent] border-2 border-[#2E2E2E] px-8 py-8">

        {/* БЛОК ТОВАРА */}
        <div className="flex items-center flex-wrap border-2 border-[#2E2E2E] p-4 justify-between">
          <div className="flex h-full max-h-[50px] rounded-[5px] mr-8 items-center">
            <div className="max-w-[50px] bg-cover w-full h-full">
              <img src="https://eda.ru/img/eda/620x-/s1.eda.ru/StaticContent/Photos/170306190614/210119150750/p_O.jpg" />
            </div>
            <div className="flex flex-col ml-5">
              <h1 className="text-[18px] font-bold">Филе мясо птицы</h1>
              <h1 className="font-bold text-gray-400">500 R</h1>
            </div>
          </div>
          <div className="buttons flex gap-4 items-center text-main">
            <button className="border-2 border-main px-3 py-1 rounded-full hover:bg-main hover:text-white duration-300">+</button>
            <h2 className="text-main">2</h2>
            <button className="border-2 border-main px-3 py-1 rounded-full hover:bg-main hover:text-white duration-300">-</button>
          </div>
          <p className="text-gray-600 font-light cursor-pointer hover:text-gray-500 duration-300">удалить</p>
        </div>
        {/* БЛОК ТОВАРА КОНЕЦ*/}

        {/* БЛОК ТОВАРА */}
        <div className="flex items-center flex-wrap border-2 border-[#2E2E2E] p-4 justify-between">
          <div className="flex h-full max-h-[50px] rounded-[5px] mr-8 items-center">
            <div className="max-w-[50px] bg-cover w-full h-full">
              <img src="https://eda.ru/img/eda/620x-/s1.eda.ru/StaticContent/Photos/170306190614/210119150750/p_O.jpg" />
            </div>
            <div className="flex flex-col ml-5">
              <h1 className="text-[18px] font-bold">Филе мясо птицы</h1>
              <h1 className="font-bold text-gray-400">500 R</h1>
            </div>
          </div>
          <div className="buttons flex gap-4 items-center text-main">
            <button className="border-2 border-main px-3 py-1 rounded-full hover:bg-main hover:text-white duration-300">+</button>
            <h2 className="text-main">2</h2>
            <button className="border-2 border-main px-3 py-1 rounded-full hover:bg-main hover:text-white duration-300">-</button>
          </div>
          <p className="text-gray-600 font-light cursor-pointer hover:text-gray-500 duration-300">удалить</p>
        </div>
        {/* БЛОК ТОВАРА КОНЕЦ*/}

      </div>
      <div className="flex justify-between mt-5">
        <div className="flex flex-col">
          <div className="flex">
            <h1>Всего товаров:</h1>
            <h2 className="text-main ml-3 font-bold">1</h2>
          </div>
          <Link to='/'><button className="bg-transparent w-44 h-10 rounded-[5px] border-2 border-gray-700 text-gray-500 hover:bg-gray-700 hover:text-white duration-300 mt-3">Вернуться назад</button></Link>
        </div>
        <div className="  items-center flex flex-col">
          <h1 className="mb-2">Сумма заказа: 1000</h1>
          <button className=" w-44 h-10 rounded-[5px] border-2 bg-main border-none text-white hover:text-gray-700 font-bold duration-300">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  )
}

export default ShopCart;