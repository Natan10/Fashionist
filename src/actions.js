
export function addProducts(products){
  return {
    type: 'ADD_PRODUCTS',
    payload: products,
  }
}

export function addStock(stock){
 
  return {
    type: 'ADD_STOCK',
    payload: stock,
  }
}


export function addProductCart(product){
  return {
    type: 'ADD_PRODUCT_CART',
    payload: product,
  }
}



export function decreaseAmountProduct(product){
  return{
    type: 'DECREASE_AMOUNT_PRODUCT',
    payload: product,
  }
}



export function deleteItemCart(product){
  console.log(product)
  return{
    type: 'DELETE_ITEM_CART',
    payload: product,
  }
}