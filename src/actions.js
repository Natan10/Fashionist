
export function addProducts(products){
  return {
    type: 'ADD_PRODUCTS',
    payload: products,
  }
}

export function addProductCart(product){
  console.log(product)
  return {
    type: 'ADD_PRODUCT_CART',
    payload: product,
  }
}


