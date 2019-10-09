import React, { Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { addUser } from '../actions/action'
import Home from './home'
// import Home from './Home'
var getData = [];
var count = 0;
class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userName:'',
            passcode:'',
            reffer: false,
           
           
        };
    }
    handleChange = (event) => {
        // console.log(this.state.userName,   this.state.passcode)
        // console.log('handle change called')
        this.setState({[event.target.name]:event.target.value});
        // console.log(event)
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state.userName, this.state.passcode, this.state.mobile, this.state.email)
        // localStorage.setItem('userName', this.state.userName) 
        // this.setState({
        //   reffer: true,
        // })
        let objUser = {
            userName: this.state.userName,
            passcode: this.state.passcode,            
        };
        var count = 0;
        
        var getLocalData = JSON.parse(localStorage.getItem('userDetail'));
        getData.push(getLocalData)
        for(var i = 0; i < getLocalData.length; i++) {
            console.log(getLocalData)
            if(getLocalData[i].userName === this.state.userName && getLocalData[i].passcode === this.state.passcode) {
                this.setState({
                    reffer: true,
                  })
                  this.props.addUser(objUser)
                  console.log(this.state.reffer)
                  
                  alert('Login Successful');
                  break;
            }
            else {
                count = count + 1;
            }
            
        }
        if(count >= getLocalData.length) {
          alert("Criditial not match")
        }
       
   
              
                
    }; 
    render () {
        if(this.state.reffer) {
            return (  
           <div className ='App'>
                 
                    <h1>You are successfully Login Please Click Home to get rid of your Hungry</h1><br></br>
                            
            
             
             
              
           </div>
            );
           }
        return (     
            <div>
               <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In</h5>
                  <form onSubmit={this.handleSubmit} className="form-signin">
                    <div className="form-label-group">
                      <input onChange = {(e) => this.handleChange(e)} value ={this.state.userName} name = 'userName'  type="text" id="inputEmail" className="form-control" placeholder="User Name" required autofocus />
                      <label for="inputEmail">User Name</label>
                    </div>
      
                    <div class="form-label-group">
                      <input onChange = {(e) => this.handleChange(e)} value ={this.state.email} name = 'passcode'  type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                      <label for="inputPassword">Password</label>
                    </div>
      
                    <div class="custom-control custom-checkbox mb-3">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label className="custom-control-label" for="customCheck1">Remember password</label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                    <hr className="my-4" />
                    <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                    <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
          // </div>
    );

    }
  }
  const mapStateToProps = (state) => {
    return {
        userList: state.userList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: item => {dispatch (addUser(item))}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);