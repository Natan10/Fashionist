

const formatPrice = (amount,price) => {
  const value = parseFloat(price.slice(3).replace(',','.'))

  return (value * amount).toFixed(2)
}


const totalValue = (cartProducts) => {
  console.log(cartProducts)
  const valueTotal = cartProducts.reduce((sumValue,item) => 
                              sumValue += parseFloat(formatPrice(item.amount,item.actual_price)) ,0)
  return valueTotal.toFixed(2)
}


export{
  formatPrice,
  totalValue
}