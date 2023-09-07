import React from 'react';
import Modal from '../UI/Modal';
import classes from '../../styles/ProductDetails.module.css';

function ProductDetails({}) {
  return (
    <Modal>
      <div className={classes.container}>
        <h2>飲料甜度和冰塊選擇</h2>
        <div>
            <label className={classes.optionLabel}>冰塊：</label>
            <input type="radio" name="ice" className={classes.radioInput} id="regular-ice" value="regular-ice"/>
            <label className={classes.btnChoice} htmlFor="regular-ice">正常</label>

            <input type="radio" name="ice" className={classes.radioInput} id="less-ice" value="less-ice"/>
            <label className={classes.btnChoice} htmlFor="less-ice">少冰</label>

            <input type="radio" name="ice" className={classes.radioInput} id="no-ice" value="no-ice"/>
            <label className={classes.btnChoice} htmlFor="no-ice">去冰</label>

            
        </div>
      
        <div>
            <label className={classes.optionLabel}>甜度：</label>
            <input type="radio" name="sweetness" className={classes.radioInput} id="sugar" value="sugar"/>
            <label className={classes.btnChoice} htmlFor="sugar">正常</label>

            <input type="radio" name="sweetness" className={classes.radioInput} id="less-sugar" value="less-sugar"/>
            <label className={classes.btnChoice} htmlFor="less-sugar">少糖</label>

            <input type="radio" name="sweetness" className={classes.radioInput} id="no-sugar" value="no-sugar"/>
            <label className={classes.btnChoice} htmlFor="no-sugar">無糖</label>
        </div>
    </div>
    </Modal>
  )
}

export default ProductDetails;