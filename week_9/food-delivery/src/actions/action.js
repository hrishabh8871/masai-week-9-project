const ADD_USER = "ADD USER";
const ADD_CART = "ADD_CART"

// create action creators and export
const addUser = (item) => {
//   console.log("add item called");
  return {
    type: ADD_USER,
    userName: item.userName,
    passcode: item.passcode,
    
  };
};
const addCart = (c) => {
  //   console.log("add item called");
    return {
      type: ADD_CART,
      payload: c
      
    };
  };


export { addUser, addCart };