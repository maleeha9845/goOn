import React , { Component } from 'react';
import './habitualheader.css';
import HeaderThreeButton from '../headerthreebuttons/index.js';
import profile from "../../assests/profile.png";

class HabitualHeader extends Component {
  constructor(props) {
     super(props)
     this.state={
      active: '1',
     }
     this.leftBtn= this.leftBtn.bind(this);
     this.middleBtn= this.middleBtn.bind(this);
     this.rightBtn= this.rightBtn.bind(this);
   }
   leftBtn(){
     this.setState({
       active:'2',
     })
   }
   middleBtn(){
     this.setState({
       active:'3',
     })
   }
   rightBtn(){
     this.setState({
       active:'4',
     })
   }
  render(){
  return (
    <div class= "header-container">
      <HeaderThreeButton
        lableLeft= "Day"
        lableMiddle= "week"
        lableRight= 'month'
        onClickLeft = {this.leftBtn}
        />
        <p class = "header-date">04 Dec</p>
        <p class ="header-profile-name">David</p> 
        <img src={profile} alt="profile" class= "header-profile-image"/>

          </div>
  );

}
}

export default HabitualHeader;
