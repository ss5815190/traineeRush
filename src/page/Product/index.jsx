import React, { lazy, useContext, Suspense} from 'react';
import Header from '../../components/Header/Header';
import Meals from '../../components/Meals/Meals';
import { CartContext } from '../../context/Context';
import Modal from '../../components/UI/Modal';

const OrderHistory = lazy(() => import ('../../components/OrderHistory/OrderHistory'));
const LazyCart = lazy(() => import ('../../components/Cart/Cart'));
const LazyProductDetails = lazy(() => import('../../components/Meals/ProductDetails'));

function Loading() {
  return (
    <Modal>
      <div>Loading...</div>
    </Modal>
  )
}

function Product() {
  const { cartIsShown, isLoading, productDetailIsShown, OrderHIsShown } = useContext(CartContext);
  return (
    <div className="Product">            
      <Suspense fallback={<Loading/>}>
        {cartIsShown && <LazyCart />}  
      </Suspense>

      <Header />
      { <Meals />}
      <Suspense fallback={<Loading/>}>
        {productDetailIsShown && <LazyProductDetails />}
      </Suspense>

      <Suspense fallback={<Loading/>}>
      {OrderHIsShown && <OrderHistory/>}
      </Suspense>
    </div>
  );
}

export default Product;
