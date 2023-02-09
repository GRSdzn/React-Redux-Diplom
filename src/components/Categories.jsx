import React from 'react';

function Categories({ value, onChangeCategory }) {

  const categories = ['Все', 'Скидки', 'Куриные', 'Говяжьи']

  return (
    <div>
      <ul className="flex flex-row justify-center pt-8 flex-wrap lg:flex-col lg:items-center">
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'border-b-[3px] font-bold easy-in duration-300  text-main text-[22px] border-main' : 'text-[#fff] hover:text-main duration-300 text-[22px] cursor-pointer'}>
            <h1 className="px-5">{categoryName}</h1>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Categories