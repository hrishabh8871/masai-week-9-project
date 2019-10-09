import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import CompanyLogo from './companyLogo';
import Home from './home';
import CartIcon from './cart.js';
import CartDesign from './cartDesign';
import Register from './register';
import Login from './login';
import { connect } from 'react-redux'
import { addUser } from '../actions/action'
import reducer from '../reducers/reducer'
// import SignIn from './userKnow';
// import SignUp from './SignUp';
// import Restaurant from './specialRestaurant';
// import signIn from './userKnow';
// import Signout from './signout.js';
import Checkout from './Checkout';
// import CartIcon from './Cart';
// import CartShow from './cartShow';
// import ShowAlertUser from './showLogin';
// var getUserName = ' ';
// var getUserName = localStorage.getItem('userName');
var userData = [];

// const userExist = (props) => {
//     if(props.userList.length === 0) {
//         return (
//             <div>
//                 Hi User
//             </div>
//         )
//     }
//     else {
//         return (
//             <div>
//                 Hi {props.userList.userName[1]}
//             </div>
//         )
//     }
// }
// console.log(userData)

function Navigation (props) {
    userData.push(props.userList)
    // console.log(userData[1].userName)
   
   
    
//    console.log(props.userList.length)
    
        return (
            <div>
                <div className = "navbar navbar-expand-lg navbar-light bg-white navbar-fixed-top">
                <div className = "navbar-brand">
                     <CompanyLogo />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto col-lg-6">               
                        <li className="nav-item">
                            <React.Fragment>
                                    <Link to="/">Home</Link>             
                            </React.Fragment>
                            
                        </li>
                        <li className="nav-item">
                            <React.Fragment>
                                    <Link to="/NewArrival"> <img src="https://img.icons8.com/color/30/000000/two-smartphones.png"/>App</Link>             
                            </React.Fragment>
                            
                        </li>
                        <li className="nav-item">
                            <React.Fragment>
                                    <Link to="/specialRestaurant">Special Restaurant</Link>             
                            </React.Fragment>
                           
                        </li>
                        <li className="nav-item">
                            <React.Fragment>
                                    <Link to="/NewArrival"> Offer Zone</Link>             
                            </React.Fragment>                        
                        </li>
                        <li className="nav-item">
                            
                        </li>
                    </ul>
                 
                    <div>
                    <React.Fragment>
                            <Link to="/cart"> <CartIcon /></Link>             
                    </React.Fragment>
                        
                    </div>
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle bg-white text-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       {name()}
                    </button>
                   
                    {getStatus()}
                    
                    
                    
               </div>
                    
            </div>     
                
            </div>
          
           
                
            <div>
                    {
                        <Route path = "/" exact component = {Home} />
                    }
                    {
                        <Route path = "/login" component = {Login} />
                    }
                     {
                         <Route path = "/register" component = {Register} />
                     }
                     {/* {
                         <Route path = "/specialRestaurant" component = {Restaurant} />
                     }
                     {
                         <Route path = "/signout" component = {Signout} />
                     } */}
                     {
                         <Route path = "/cart" component = {CartDesign} />
                     }
                       
                    {
                        <Route path = "/checkout" component = {Checkout} />
                    }
           
            
                   
              </div>
            </div>
        );
}
const mapStateToProps = (state) => {
    return {
        userList: state.userList
    };
};
function getStatus ()  {
    // console.log(userData.length)
    if(userData.length === 1) {
        // getUserName = 'User'
        return (
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <React.Fragment>
                                <Link to="/login"> Login</Link>             
                        </React.Fragment><br></br>
                        <React.Fragment>
                                <Link to="/register"> Sign-Up</Link>             
                        </React.Fragment>
                        
                    </div>
        );
    }
    else {
      return (
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <React.Fragment>
                    <Link to="/login">My order</Link>             
            </React.Fragment><br></br>
            <React.Fragment>
                    <Link to="/signUp">History</Link>             
            </React.Fragment><br></br>
            <React.Fragment>
                <a href ="/">Sign Out</a>           
            </React.Fragment>
            
        </div>
      );  
    }
}
function name () {
    if(userData.length === 1) {
        return (
            <p>Hi User</p>
        )
    }
    else {
        return (
            <p>Hi {userData[1][0].userName}</p>
        )
    }
}


export default connect (mapStateToProps, null) (Navigation);