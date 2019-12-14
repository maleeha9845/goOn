import React , { Component } from 'react';

import './habitualbody.css';
import  BodyBox from '../habitualbodybox/index.js';

const HabitualBody = props => {

  return (
    <div class= 'habitual-body-container' >
     <div class = "habitual-body-header">
       <p class = 'body-header-tittle-left'>Habits</p>
       <p class = 'body-header-tittle-right'>Status</p>
     </div>
     <BodyBox  habit= 'check email' status= 'completed' catergory= 'work'/>
     <div class= 'habitual-body-status-division'>
     </div>
     <BodyBox  habit= 'work out' status= 'pending' catergory= 'self'/>
     <BodyBox  habit= 'play with kids' status= 'pending' catergory= 'family'/>
    </div>
  );

}

export default HabitualBody ;
