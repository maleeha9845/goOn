import React , { Component } from 'react';
import './bodybox.css';

const BodyBox= props => {

  return (

      <div class = "body-box-container">
        <tittle class = 'boby-box-tittle'> {props.catergory} - David</tittle>
        <div class='boby-box-habit-block'>
          <p class ='body-box-habit'>{props.habit}</p>
          <p class = 'boby-box-status'>{props.status}</p>
        </div>
      </div>


  );

}

export default BodyBox;
