import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { addUser, addCart } from '../actions/action'
var checkArr = [];
var cartItem = [];
class HomeProduct extends React.Component{
  constructor (props) {
    super(props);
    this.state = {

    }
  }
    render () {
      checkArr.push(this.props.userList)
      const checkUser = (see) => {
        if(checkArr.length === 1) {
            alert('Please Login')
        }
        else {
          var cartId = JSON.stringify(see.target.name)
          // console.log(cartId);
          // cartItem.push();
          // console.log(cartItem);
          alert("Successfull Added To Your Cart");
          this.props.cartSend(Number(JSON.parse(cartId)))
          
          
        }
      }
      return (
        <div className ='row'>
     
       {
         this.props.foodDetails.map((item) => {
           return (
             <div className ="col-lg-3 col-sm-12 col-md-6">
               <div class="card" style={{"width": "18rem"}}>
                     <img src={item.image} class="card-img-top" alt="..." />
                     <div class="card-body">
                       <h5 class="card-title">{item.title}<p class="card-title">price: {item.price} Rs</p></h5>
                       <p class="card-text">{item.description}</p>
                       <input type = "submit" onClick = {(name) => checkUser(name)} name = {item.id} value = "Add to cart" class="btn btn-primary" />
                     </div>
                   </div>
             </div>             
                   
                     
           )
         })
       }
     </div>
   );

    }
  }
  
  // console.log(checkArr.length)


function mapStateToProps (state) {
    return {
      foodDetails: state.foodDetails,    
    }
  }
  

function mapDispatchToProps(dispatch) {
 return {
      cartSend: (c) => {dispatch(addCart(c))},
      // itemShow: (s) => {dispatch({type: 'ITEM_SHOW', payload: s})}
    }
  }
export default connect (mapStateToProps, mapDispatchToProps) (HomeProduct) 