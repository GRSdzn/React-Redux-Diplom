import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import ShopCart from './pages/ShopCart';

export const SearchContext = React.createContext();
console.log(SearchContext);

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  console.log(searchValue, 'INPUT CHANGED')
  return (
    <div className="bg-[#272727]">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
          <div className="">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/CartPage' element={<CartPage />}/>
              <Route path='/ShopCart' element={<ShopCart />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </div>
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
