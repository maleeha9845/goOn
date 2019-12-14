import React , { Component } from 'react';
import './headerthreebuttons.css' ;

const HeaderThreeButton = props => {

  return (
    <div >
    <button class ="left-button"  onClick = {props.onClickLeft}>
      <p class= "header-nav-button-text-onselect">{props.lableLeft}</p>
    </button>
    <button class ="middle-button"  onClick = {props.onClickMiddle}>
      <p class= "header-nav-button-text">{props.lableMiddle}</p>
    </button>
    <button class ="right-button"  onClick = {props.onClickRight}>
      <p class= "header-nav-button-text">{props.lableRight}</p>
    </button>
</div>
  ); 

}

export default HeaderThreeButton;
