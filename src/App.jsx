import React, { useContext } from 'react';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { CartContext } from './context/Context';
import ProductDetails from './components/Meals/ProductDetails';

function App() {
  const { cartIsShown, isLoading } = useContext(CartContext);
  return (
    <div className="App"> 
      {cartIsShown && <Cart />}
      <Header />
      {!isLoading && <Meals />}
      <ProductDetails/>
    </div>
  );
}

export default App;
