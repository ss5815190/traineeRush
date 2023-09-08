/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useContext, useState } from 'react';
import classes from '../../styles/Checkout.module.css';
import { CartContext } from '../../context/Context';

const isEmpty = (value) => value.trim() === '';

function Checkout({ onCancel, onSubmit, setIsSubmit }) {
  const { dispatch } = useContext(CartContext);
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    email: true,
    phone: true,
    address:true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    // 表單驗證
    setFormInputsValidity({
      email: !isEmpty(enteredEmail),
      phone: !isEmpty(enteredPhone),
      address: !isEmpty(enteredAddress),
    });

    const formIsValid = !isEmpty(enteredEmail)
      && !isEmpty(enteredPhone)
      && !isEmpty(enteredAddress)
    if (!formIsValid) {
      return null;
    }
    // 送出訂單
    onSubmit({
      email: enteredEmail,
      phone: enteredPhone,
      address:enteredAddress,
    });
    dispatch({ type: 'CLEAR' });
    setIsSubmit(true);
    return null;
  };
  // 輸入錯誤變紅
  const nameControlClasses = ({ id }) => `${classes.control} ${
    formInputsValidity[id] ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses({ id: 'email' })}>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" ref={emailInputRef} />
        {!formInputsValidity.email && <p>Please enter a valid email!</p>}
      </div>
      <div className={nameControlClasses({ id: 'phone' })}>
        <label htmlFor="phone">Your Phone</label>
        <input type="phone" id="phone" ref={phoneInputRef} />
        {!formInputsValidity.phone && <p>Please enter a valid phone!</p>}
      </div>
      <div className={nameControlClasses({ id: 'address' })}>
        <label htmlFor="address">Your Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputsValidity.address
        && <p>Please enter a valid address! </p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit} type="submit">Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
