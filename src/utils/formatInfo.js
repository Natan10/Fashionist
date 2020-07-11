

const formatPrice = (amount,price) => {
  const value = parseFloat(price)

  return (value * amount).toFixed(2)
}


const totalValue = (cartProducts) => {
  const valueTotal = cartProducts.reduce((sumValue,item) => 
                              sumValue += parseFloat(formatPrice(item.amount,item.price)) ,0)
  return valueTotal.toFixed(2)
}


export{
  formatPrice,
  totalValue
}