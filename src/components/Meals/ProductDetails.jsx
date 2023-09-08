import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from '../../styles/ProductDetails.module.css';
import { CartContext } from '../../context/Context';

function ProductDetails() {
  const [ice, setIce] = useState('regular-ice'); 
  const [sweetness, setSweetness] = useState('regular-sugar');
  const [PDquantity,setPDquantity] =useState(1);
  const { setProductDetailIsShown, cart, 
    dispatch,snapStorage }=useContext(CartContext);

  // 事件處理程序，當選擇冰塊時觸發
  const handleIceChange = (event) => {
    setIce(event.target.value); // 更新冰塊的值
    };
  
    // 事件處理程序，當選擇甜度時觸發
  const handleSweetnessChange = (event) => {
    setSweetness(event.target.value); // 更新甜度的值
  }
    // 隱藏細項畫面
  const disableProductDetailHandler = () => {
    setProductDetailIsShown(false);
  };

  //加入購物車
  const checkCart = (checkId, quantity) => {
    const existingItemIndex = cart.findIndex((item) => item.id === checkId);
    // 購物車有該商品的話，沒有的話會返回-1
    if (existingItemIndex !== -1) {
      // 增加數量
      //使用 useReducer 的 dispatch 函數來發送一個 'INCREMENT_QUANTITY' 類型的 action，以增加特定商品的數量
      dispatch({
        type: 'INCREMENT_QUANTITY',
        payload: { id: checkId, quantity: parseInt(quantity, 10) },
      });
    } else {
      // 新增商品到購物車
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          id:snapStorage[0].id,
          name:snapStorage[0].name,
          img:snapStorage[0].img,
          price:snapStorage[0].price,
          quantity: parseInt(quantity, 10),
          ice,
          sweetness,
        },
      });
    }
    setProductDetailIsShown(false);
  };
  
  return (
    <Modal onClose={disableProductDetailHandler}>
      <div className={classes.container}>
        <h2>飲料甜度和冰塊選擇</h2>
        <div className={classes.dd}>
            <div className={classes.selectGrid}>
              <div className={classes.optionLabel}>冰塊 :</div>
              <div className={classes.option}>
                <input onChange={handleIceChange} defaultChecked type="radio" name="ice" className={classes.radioInput} id="regular-ice" value="regular-ice"/>
                <label className={classes.btnChoice} htmlFor="regular-ice">正常</label>

                <input onChange={handleIceChange} type="radio" name="ice" className={classes.radioInput} id="less-ice" value="less-ice"/>
                <label className={classes.btnChoice} htmlFor="less-ice">少冰</label>

                <input onChange={handleIceChange} type="radio" name="ice" className={classes.radioInput} id="no-ice" value="no-ice"/>
                <label className={classes.btnChoice} htmlFor="no-ice">去冰</label>
              </div>
                
            </div>
        
            <div className={classes.selectGrid}>
              <div className={classes.optionLabel}>甜度 :</div>
              <div className={classes.option}>
                <input  onChange={handleSweetnessChange} defaultChecked type="radio" name="sweetness" className={classes.radioInput} id="regular-sugar" value="regular-sugar"/>
                <label className={classes.btnChoice} htmlFor="regular-sugar">正常</label>

                <input  onChange={handleSweetnessChange} type="radio" name="sweetness" className={classes.radioInput} id="less-sugar" value="less-sugar"/>
                <label className={classes.btnChoice} htmlFor="less-sugar">少糖</label>

                <input  onChange={handleSweetnessChange} type="radio" name="sweetness" className={classes.radioInput} id="no-sugar" value="no-sugar"/>
                <label className={classes.btnChoice} htmlFor="no-sugar">無糖</label>
              </div>
            </div>

            <div className={classes.selectGrid}>
              <div className={classes.optionLabel}>加料 :</div>
              <input type="checkbox" name="bonus" className={classes.radioInput} id="bubble" value="bubble"/>
              <label className={classes.btnChoice} htmlFor="bubble">珍珠 +5$</label>

              <input type="checkbox" name="bonus" className={classes.radioInput} id="coconut jelly" value="coconut jelly"/>
              <label className={classes.btnChoice} htmlFor="coconut jelly">椰果 +5$</label>

              <input type="checkbox" name="bonus" className={classes.radioInput} id="pudding" value="pudding"/>
              <label className={classes.btnChoice} htmlFor="pudding">布丁 +10$</label>
            </div>

            <div className={classes.selectGrid}>
              <label className={classes.optionLabel} htmlFor="quantity">數量</label>
              <input className={classes.quantity} id="quantity" type="number"
               defaultValue="1" onChange={(e)=>{setPDquantity(e.target.value)}} />
            </div>
            <div className={classes.selectGrid}>
              <label className={classes.optionLabel} htmlFor="remark">備註 :</label>
              <textarea name="remark" id="remark" ></textarea>
            </div>
            <div className={classes.addToCart}>
              <button onClick={()=>checkCart(snapStorage[0].id,PDquantity)}>加入購物車</button>
            </div>
        </div>
    </div>
    </Modal>
  )
}

export default ProductDetails;