import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import * as firebaseConfig from './index';
class App extends Component {
    constructor(){
      super();
      this.state = {
        speed: 10,
        value: 100,

      }
      this.read = this.read.bind(this);
      this.write = this.write.bind(this);
      this.delet = this.delet.bind(this);
      this.updat = this.updat.bind(this);
      this.change = this.change.bind(this);
      this.showstate = this.showstate.bind(this);
      this.signin = this.signin.bind(this);
      //A = {this.state};

  }
    showstate(A){
      console.log(A);
    }
    read(){
      firebase.database().ref().child('react').child('speed').on('value', snap => {
          this.setState({
            speed: snap.val(),
          })
        })
    }
     write(userObj){
      firebase.database().ref('react').set({
          username:  userObj.user,
          age: userObj.age,
          email: userObj.email,
          phone: userObj.phone,
          address: userObj.address,
          country: userObj.country,
          blood: userObj.blood,
          string: userObj.string

      })
    }

    delet(a){
      firebase.database().ref().child('react').child(a).remove();
    }

    updat(b){
     firebase.database().ref().child('react').update({'age':b});
    }

    change(q,s){
     // firebase.database().ref().child('react').on("value", snap=>{
       this.setState({
         speed: q,
         value: s,
       })
     // })
   }
    // loginbtn
    signin(){
      var email
      var password
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    }


  render() {
    return (
        <div className="App">
         <div>
           <h1>{this.state.speed}</h1>
           <button onClick = {() => this.showstate(this.state)}>click me</button>
           <button onClick = {() => this.change(15,50)}>change</button>
           <button  onClick = {this.read}>read</button>
           <button  onClick =  {() => this.write({
             user: "ella",
             age: 30,
             email: "ella@gmail.com",
             phone: 9087654321,
             address: "mysore",
             country: "india",
             blood: "b",
             string: "hello",
           })}>write</button>
           <button  onClick = {() => this.delet("address")}>delete</button>
           <button  onClick = {() => this.updat(30)}>update</button>
          </div>
          <br/>
          <div>
           <h4>Authentication</h4>
           <input id="txtEmail" type="email" placeholder="Email"/><br/>
           <input id="txtPass" type="password" placeholder="Password"/><br/>
           <button onClick = {this.login}>log in</button>
           <button onClick = {this.signin}>sign up</button>
           <button onClick = {this.logout}>log out</button>
          </div>
        </div>


      );
  }
}
export default App;
