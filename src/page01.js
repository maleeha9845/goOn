import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  deleteApiRequest } from "./actions";



class DeleteForm extends Component {

  constructor(props) {
     super(props)
     this.delete = this.delete.bind(this);
   }

  delete(){
  console.log("maleeha")
  this.props.deleteApiRequest("mal")
}

 render(){
  return (
    <div>
       <button type =""text onClick ={ this.delete} >
        <p> delete</p>
       </button>
    </div>
      );
    }
 }

// to access redux actions
const mapDispathToProps = dispatch => ({
  deleteApiRequest:(params) => {dispatch(deleteApiRequest(params))},

});

// to access redux store
const mapStateToProps = (state, props) => {
  return {
    deleteData: state.delete01,

  };
};

export default (connect(mapStateToProps, mapDispathToProps)(DeleteForm));
