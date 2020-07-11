const INITIAL_STATE = {
  products: [],
  cartProducts: [],
  stock: []
}


function reducer(state = INITIAL_STATE,action){
  switch(action.type){
    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: [...action.payload],
        
      }

    case 'ADD_STOCK':
      return {
        ...state,
        stock: [...action.payload],  
      }

//    case 'ADD_PRODUCT_CART':
//      const indexProduct = state.cartProducts.findIndex(item => item.id === action.payload.id);
//      const stock_product = state.stock.filter(item => item.id === action.payload.id);
//      const products_cart = state.cartProducts;
//      if(indexProduct >= 0) {
//        if(stock_product.amount > 0){
//          stock_product.amount -= 1;
//          products_cart[indexProduct].amount += 1;
//
//          return{
//            ...state,
//            cartProducts:[
//              ...products_cart
//            ],
//            stock: [...state.stock,...stock_product]
//          }
//        }
//      }else{
//        if(stock_product.amount > 0){
//          stock_product.amount -= 1;
//          return{
//            ...state,
//            cartProducts:[
//              ...state.cartProducts,
//              {
//                ...action.payload,
//                amount: 1
//              }],
//              stock: [...state.stock,...stock_product],
//            }
//        } 
//      }
    case 'ADD_PRODUCT_CART':
      const indexProduct = state.
                          cartProducts.
                          findIndex(item => item.id === action.payload.id)

      if(indexProduct >= 0){
        const products = state.cartProducts;
        products[indexProduct].amount += 1;
        return{
          ...state,
            cartProducts:[
              ...products
            ],
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
        if(item.id === action.payload.id){
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
    
    case 'DELETE_ITEM_CART':
      const products_filter = state.cartProducts.filter(item => item.id !== action.payload.id)
      
      return {
        ...state,
        cartProducts: [...products_filter],
      }
    default:
      return state;
  }
}


export default reducer;