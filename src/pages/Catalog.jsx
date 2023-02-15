import React from 'react'

import CartObject from '../components/CartObject';
import Categories from '../components/Categories';
import Skeleton from '../components/CartObject/Skeleton';
import Sort from '../components/Sort';
import { SearchContext } from '../App';

export const Catalog = () => {
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
    <div>
      <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
      <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      {/* каталог товаров на главной странице */}
      <div className=" grid gap-x-[40px] gap-y-[65px] grid-cols-4 grid-rows-1 justify-items-center py-[6vh] xl:grid-cols-2 xl:grid-rows-2 1xl:grid-cols-3 md:grid-cols-1">
        {
          isLoading ? skeletons : meats}
      </div>
    </div>
  )
}
