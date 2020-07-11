// Pegando dados da Api
//const URL = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'

const URL_PRODUCTS = 'http://localhost:4000/products'
const URL_STOCK = 'http://localhost:4000/stock'


const api = () => {
  return fetch(URL_PRODUCTS).then(response => response.json()).catch(error => alert(error))
}


const stock_product = () => {
  return fetch(URL_STOCK).then(response => response.json()).catch(error => alert(error))
}


export{
  api,
  stock_product
}