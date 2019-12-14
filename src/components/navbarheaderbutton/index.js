import React , { Component } from 'react';
import './headerbutton.css';

const HeaderButton = props => {

  return (
    <div >
      <button class= "headerbutton">
        <p class= "headerbutton-text">{props.lable}</p>
      </button>
    </div>
  );

}

export default HeaderButton;
