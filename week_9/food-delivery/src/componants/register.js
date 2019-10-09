import React, { Fragment } from 'react';
import redux from 'redux'
import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import Home from './Home'
import { connect } from 'react-redux'
import { addUser } from '../actions/action'
var allUser = [];
class Register extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        userName:'',
        passcode:'',
        email: '',
        mobile: +91,
        reffer : false
        // reffer: false,
       
       
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
        email: this.state.email,
        mobile: this.state.mobile,
    };
    let objLogin = {
      userName: this.state.userName,
      passcode: this.state.passcode,
    }
    allUser.push(objUser)
    var getObjUserString = JSON.stringify(allUser)
    localStorage.setItem('userDetail', getObjUserString);
    // localStorage.removeItem('userDetail')
    this.props.addUser(objLogin);
    this.setState({
      reffer: true
    })
    // var sendObj = JSON.stringify(objLogin)
   
    
 
          
            
}; 
  render () {
    if(this.state.reffer) {
     return (  
    <div className ='App'>
          
             <h1>You are successfully Register Please Click Home to get rid of your Hungry</h1><br></br>
                  
     </div>
     );
    }
    return (
      <div className = 'App'>
       {/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type = 'text' name = 'userName' onChange = {(e) => this.handleChange(e)} value ={this.state.userName} placeholder = 'Enter User Name' />
        </label><br></br><br></br>
        <label>
          Email:
          <input type = 'email' name = 'email' onChange = {(e) => this.handleChange(e)} value ={this.state.email} placeholder = 'Enter Email' />
        </label><br></br><br></br>
        <label>
          Mobile:
          <input type = 'mobile' name = 'mobile' onChange = {(e) => this.handleChange(e)} value ={this.state.mobile} placeholder = 'Enter Mobile' />
        </label><br></br><br></br>
        <label>
          Passcode:
          <input type = 'password' name = 'passcode' onChange = {(e) => this.handleChange(e)} value ={this.state.passcode} placeholder = 'Enter Passcode' />
        </label><br></br>
       <input className ='btn bg-primary text-white' type="submit" value="Submit" />
      </form> */}


<div className="col-md-4 col-md-offset-4" id="login">
						<section id="inner-wrapper" className="login">
							<article>
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-user"> </i></span>
											<input name ="userName" onChange = {(e) => this.handleChange(e)} value ={this.state.userName} type="text" className="form-control" placeholder="Name" />
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i className="fa fa-envelope"> </i></span>
											<input name ="email" onChange = {(e) => this.handleChange(e)} value ={this.state.email} type="email" className="form-control" placeholder="Email Address" />
										</div>
									</div>
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-key"> </i></span>
											<input name ="mobile" onChange = {(e) => this.handleChange(e)} value ={this.state.mobile} type="mobile" class="form-control" placeholder="Password" />
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon"><i class="fa fa-key"> </i></span>
											<input name ="passcode" onChange = {(e) => this.handleChange(e)} value ={this.state.passcode} type="password" className="form-control" placeholder="Confirm Password" />
										</div>
									</div>
									  <button type="submit" className="btn btn-success btn-block">Submit</button>
								</form>
							</article>
						</section></div>
      </div>
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

export default connect (mapStateToProps,mapDispatchToProps) (Register);