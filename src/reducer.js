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
    case 'ADD_PRODUCT':
      return {
        cartProducts:[...state.cartProducts,action.payload]
      }
    case 'PRODUCT_DETAIL':
      return {
        ...state,
        productDetail: [...state.productDetail,action.payload]
      }
    default:
      return state;
  }
}


export default reducer;