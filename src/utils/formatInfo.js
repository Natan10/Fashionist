

const formatPrice = (amount,price) => {
  const value = parseFloat(price.slice(3).replace(',','.'))

  return (value * amount).toFixed(2)
}


export{
  formatPrice,
}