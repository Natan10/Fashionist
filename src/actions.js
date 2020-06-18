
export function addProducts(products){
  return {
    type: 'ADD_PRODUCTS',
    payload: products,
  }
}

export function addProduct(product){
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  }
}



export function productDetail(product){
  return{
    type: 'PRODUCT_DETAIL',
    payload: product,
  }
}