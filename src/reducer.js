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
      const indexProduct = state.
                          cartProducts.
                          findIndex(item => item.style === action.payload.style && 
                            item.sizeSelect === action.payload.sizeSelect)

      if(indexProduct >= 0 && state.cartProducts[indexProduct].sizeSelect !== action.payload.sizeSelect){
        return{
          ...state,
          cartProducts:[
            ...state.cartProducts,
            {
              ...action.payload,
              amount: 1
            }]
          }
      }else if(indexProduct >= 0 && state.cartProducts[indexProduct].sizeSelect === action.payload.sizeSelect){
        const products = state.cartProducts;
        products[indexProduct].amount += 1;
        return{
          ...state,
            cartProducts:[
              ...products
            ]
          }
      }else{
        return{
          ...state,
          cartProducts:[
            ...state.cartProducts,
            {
              ...action.payload,
              amount: 1
            }]
          }
      } 
    
    // eslint-disable-next-line no-fallthrough
    case 'DECREASE_AMOUNT_PRODUCT':
      const products = state.cartProducts.map(item =>{
        if(item.sizeSelect === action.payload.sizeSelect && item.style === action.payload.style){
          return {
            ...item,
            amount: item.amount -1 
          }
        }else{
          return item
        }
      })
      return{
        ...state,
        cartProducts:[...products]
      }
      
    default:
      return state;
  }
}


export default reducer;