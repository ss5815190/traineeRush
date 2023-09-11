import React, {
  createContext, useState, useEffect, useReducer,
} from 'react';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartContextProvider({ children }) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [OrderHIsShown, setOrderHIsShown] = useState(false);
  const [productDetailIsShown,setProductDetailIsShown]=useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [snapStorage, setSnapStorage] = useState([]);
  // useEffect(() => {
  //   const api = async () => {
  //     try {
  //       const res = await fetch(
  //         'http://localhost:8080/orders',
  //       );
  //       const apiData = await res.json();
  //       setMealItem(apiData.request);
  //       setIsLoading(false);
  //       console.log(apiData.request);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   api();
  // }, []);

  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, action.payload];
      case 'INCREMENT_QUANTITY':
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, itemTotalPrice:item.itemTotalPrice +(item.price*action.payload.quantity)
              ,quantity: item.quantity + action.payload.quantity };
          }
          // 如果目前處理的不是目標商品，就保持原樣返回
          return item;
        });
      case 'DECREASE_QUANTITY':
        return state.map((item) => {
          if (item.id === action.payload.id) {
            if (item.quantity === 1) {
              // 返回 null 會在後面的 .filter(Boolean)過濾掉
              return null;
            }
            return { ...item, quantity: item.quantity - 1 };
          }
          // 如果目前處理的不是目標商品，就保持原樣返回
          return item;
        }).filter(Boolean);
      case 'CLEAR':
        return [];
      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(cartReducer, []);
  useEffect(() => {
    const newTotalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const newTotalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
    setTotalAmount(newTotalAmount);
  }, [cart]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{
      totalQuantity,
      setTotalQuantity,
      cartIsShown,
      setCartIsShown,
      totalAmount,
      setTotalAmount,
      cart,
      dispatch,
      isLoading,
      setIsLoading,
      productDetailIsShown,
      setProductDetailIsShown,
      snapStorage, 
      setSnapStorage,
      OrderHIsShown, 
      setOrderHIsShown,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}
