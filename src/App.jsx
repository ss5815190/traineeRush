import React, { lazy, useContext, Suspense} from 'react';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import { CartContext } from './context/Context';

const LazyCart=lazy(()=> import ('./components/Cart/Cart'));
const LazyProductDetails = lazy(() => import('./components/Meals/ProductDetails'));

function App() {
  const { cartIsShown, isLoading, productDetailIsShown } = useContext(CartContext);
  return (
    <div className="App"> 
      <Suspense fallback={<div>Loading...</div>}>
        {cartIsShown && <LazyCart />}  
      </Suspense>
      

      <Header />
      {!isLoading && <Meals />}
      <Suspense fallback={<div>Loading...</div>}>
        {productDetailIsShown && <LazyProductDetails />}
      </Suspense>
      
    </div>
  );
}

export default App;
