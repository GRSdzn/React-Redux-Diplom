import React from 'react';
import ArrowDown from '../assets/img/down_arrow.svg';

function Sort({ value, onChangeSort }) {
  const [open, setOpen] = React.useState(false);
  const list = [
    { name: 'популярности DESC', sortProperty: 'rating' },
    { name: 'популярности ASC', sortProperty: '-rating' },
    { name: 'цене desc', sortProperty: 'price' },
    { name: 'цене asc', sortProperty: '-price' },
    { name: 'алфавиту desc', sortProperty: 'title' },
    { name: 'алфавиту asc', sortProperty: '-title' },
  ];

  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div className="flex flex-col text-[292929] px-[6vh]  pt-8 flex-wrap text-[17px] lg:items-center " >
      <div className="flex flex-wrap">
        <b className="text-white">Сортировка по:  </b>
        <span className="text-main duration-300 hover:text-mainLight font-light flex ml-1 cursor-pointer border-dotted border-b-[3px] border-main" onClick={() => setOpen(!open)}> {value.name} <img src={ArrowDown} alt='arrow' className="ml-2 cursor-pointer" /></span>
      </div>
      {open && (
        <div className="pt-4 pb-4 bg-[#fff] absolute z-10 my-8 shadow-[#272727] shadow-lg text-center rounded-[5px] h-[full] w-[150px] ml-[140px] text-[17px] lg:items-center lg:m-0 lg:my-9">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={value.sortProperty === obj.sortProperty ? 'text-main font-bold' : 'cursor-pointer duration-100 ease-in hover:bg-[#eeeeeed8]'} >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div >
  )
}

export default Sort;