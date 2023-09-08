import React, { lazy, useContext, Suspense} from 'react';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import { CartContext } from './context/Context';
import Modal from './components/UI/Modal';
import OrderHistory from './components/OrderHistory/OrderHistory';

const LazyCart=lazy(()=> import ('./components/Cart/Cart'));
const LazyProductDetails = lazy(() => import('./components/Meals/ProductDetails'));

function Loading() {
  return (
    <Modal>
      <div>Loading...</div>
    </Modal>
  )
}

function App() {
  const { cartIsShown, isLoading, productDetailIsShown } = useContext(CartContext);
  return (
    <div className="App"> 
    
      <Suspense fallback={<Loading/>}>
        {cartIsShown && <LazyCart />}  
      </Suspense>

      <Header />
      {!isLoading && <Meals />}
      <Suspense fallback={<Loading/>}>
        {productDetailIsShown && <LazyProductDetails />}
      </Suspense>

      <OrderHistory/>
    </div>
  );
}

export default App;
