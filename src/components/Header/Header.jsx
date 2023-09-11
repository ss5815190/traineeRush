import React from 'react';
import classes from '../../styles/Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import { CgProfile } from "react-icons/cg";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>Shoalter</h1>
        <div className={classes.totalIcon}>
          <div className={classes.profile}>
            <NavLink to="./login">
              <CgProfile/>
            </NavLink>
          </div>
          <HeaderCartButton />
          <div className={classes.profile}>
            <NavLink to="./orderHistory">
            <AiOutlineUnorderedList/>
            </NavLink> 
          </div>
          <div className={classes.profile}>
            <FaMapMarkedAlt/>
           </div>
        </div>
        
      </header>
    </>
  );
}

export default Header;
