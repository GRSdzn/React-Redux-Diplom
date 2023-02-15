import React from 'react';

import arrow from '../assets/img/arrow.svg';
import CartObject from '../components/CartObject';
import Categories from '../components/Categories';
import Panel from '../components/Panel';
import Skeleton from '../components/CartObject/Skeleton';
import Sort from '../components/Sort';
import { SearchContext } from '../App';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '-');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    // `http://127.0.0.1:8000/api-v1/products/?ordering=title${sortBy}&ordering=${sortBy}&${category}&${search}`,

    fetch(
      `http://127.0.0.1:8000/api-v1/products/?ordering=title${sortBy}&ordering=${sortBy}&${category}&order=${order}&${search}`,
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
          <p className="text-[#fff] text-[60px] text-center font-bold mt-[35vh] lg:text-[20px]">
            СВЕЖЕЕ <span className="!text-main">МЯСО</span> <br />ЗАЛОГ ЗДОРОВОГО<br /> ЖЕЛУДКА
          </p>
          <div className="flex flex-col items-center mt-[15%] sm:mt-[200px] md:mt-[25vh]]">
            <p className="text-white font-light text-[18px] duration-300 mb-[1vh]">Подробнее</p>
            <div><img src={arrow} alt="arrow-down" className="animate-bounce" /></div>
          </div>
        </div>
      </div>

      <section className="bg-[#272727] py-[8vh] px-[10vh]">

        {/* Каталог товаров Заголовок*/}
        <div className="relative text-left ">
          <div>
            <h2 className="text-secondary font-bold text-[60px] mt-20 mb-12 bg-[#272727]">Каталог</h2>
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