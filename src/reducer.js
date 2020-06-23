const INITIAL_STATE = {
  products: [],
  cartProducts: [],
}


function reducer(state = INITIAL_STATE,action){
  switch(action.type){
    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: [...action.payload]
      }
    case 'ADD_PRODUCT_CART':
      return {
        cartProducts:[...state.cartProducts,action.payload]
      }
    default:
      return state;
  }
}


export default reducer;