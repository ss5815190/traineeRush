import React, { useRef, useContext } from 'react';
import classes from '../../styles/Meals.module.css';
import { CartContext } from '../../context/Context';

function MealItem({
  // eslint-disable-next-line react/prop-types
  id, name, img, price,
}) {
  const amountInputRef = useRef();
  const { setProductDetailIsShown, setSnapStorage } = useContext(CartContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setProductDetailIsShown(true);
    const NewData =[{id,name,img,price}]
    setSnapStorage(NewData);
  };
  return (
    <li className={classes.meal} key={id} ref={amountInputRef}>
      <div>
        <h3>{name}</h3>
        <img src={img} alt="" />
        <div className={classes.price}>$$:{price}</div>
      </div>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.input}>
        </div>
        <button type="submit">+ Add</button>
      </form>
    </li>
  );
}

export default MealItem;
