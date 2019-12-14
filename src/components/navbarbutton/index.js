import React , { Component } from 'react';
import './navbarbutton.css';

const NavButton = props => {

  return (
    <div >
      <button class = { props.active === props.myNum ? "navbuttonselected" : "navbutton"}  onClick = {props.onClick}>
        <p class= "navbutton-text">{props.lable}</p>
      </button>
    </div>
  );

}

export default NavButton;
