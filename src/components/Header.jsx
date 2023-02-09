import React from 'react';
import Basket from '../assets/img/basket.svg';
import Profile_icon from '../assets/img/profile-icon.svg';
import Logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import Search from './Search';


function Header({ searchValue, setSearchValue }) {
  return (
    <>
      <div className="bg-[#27272780] z-10 flex flex-row px-[70px] py-[23px] justify-between items-center fixed w-full">
        <Link to="/"><img src={Logo} alt="text" /></Link>
        <ul className="flex flex-row gap-x-[64px] float-left w-full ml-[64px] font-html flex-wrap items-center">
          <li className="text-[#fff] text-[16px] hover:text-main duration-300"><Link to="/">Главная</Link></li>
          <li className="text-[#fff] text-[16px] hover:text-main duration-300"><Link to="/">Товары</Link></li>
          <li className="text-[#fff] text-[16px] hover:text-main duration-300"><Link to="/">О нас</Link></li>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </ul>

        <div className="flex flex-row gap-x-[36px]">
          <Link to="/shopcart"><img src={Basket} alt="cart" className="min-w-[35px]" /></Link>
          <img src={Profile_icon} alt="text" />
        </div>
      </div>
    </>
  );
}

export default Header;
