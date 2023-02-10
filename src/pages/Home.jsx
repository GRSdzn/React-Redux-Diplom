import React from 'react';

import arrow from '../assets/img/arrow.svg';
import CartObject from '../components/CartObject';
import Categories from '../components/Categories';
import Panel from '../components/Panel';
import Skeleton from '../components/CartObject/Skeleton';
import Sort from '../components/Sort';

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `http://127.0.0.1:8000/api-v1/products/?ordering=title${sortBy}&ordering=${sortBy}&${category}&${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    // window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  const meats = items.map((obj) => <CartObject key={obj.id} {...obj} />)  // Динамический поиск товаров (из бека)

  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />) // Скелет товаров (предпрогрузка)

  return (
    <div className="pb-14">
      <div className="w-full h-[100vh] bg-no-repeat bg-cover bg-background">
        <div className=" flex flex-col justify-center items-center">
          <p className="text-[#fff] text-[60px] font-bold mt-[35vh] lg:text-[20px]">
            СВЕЖЕЕ <span className="!text-main">МЯСО</span> - ЗАЛОГ <br />ЗДОРОВОГО ЖЕЛУДКА
          </p>
          <div className="flex flex-col items-center mt-[38vh] sm:mt-[200px] md:mt-[25vh]]">
            <a href="#" className="text-white font-light text-[18px] duration-300 mb-[1vh]">Подробнее</a>
            <a href='#'><img src={arrow} alt="arrow-down" className="animate-bounce" /></a>
          </div>
        </div>
      </div>

      <section className="bg-[#272727] py-[8vh] px-[10vh]">

        {/* Каталог товаров title*/}
        <div className="border-solid border-[2px] h-0 mt-[80px] mb-20 flex justify-center border-[#c9c4af] rounded-[10px] uppercase text-center relative lg:border-none">
          <div>
            <h2 className="text-white m-[-17px] font-bold text-[40px] leading-7 w-96 text-center mb-[-11px] -bottom-2/4 bg-[#272727] lg:w-0 lg:text-[20px]">Каталог</h2>
          </div>
        </div>

        <div className=" rounded-[5px] bg-[#202020] border-2 border-[#2E2E2E] lg:bg-transparent lg:border-none">
          <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
          {/* каталог товаров на главной странице */}
          <div className=" grid gap-x-[40px] gap-y-[65px] grid-cols-4 grid-rows-1 justify-items-center py-[6vh] xl:grid-cols-2 xl:grid-rows-2 1xl:grid-cols-3 md:grid-cols-1">
            {
              isLoading ? skeletons : meats}
          </div>
        </div>

      </section>
      {/* items.map((obj) => <CartObject key={obj.id} {...obj} />) */}
      <Panel />


    </div>
  )
}

export default Home;