// Pegando dados da Api
const URL = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'

export default function api(){
  return fetch(URL).
         then(response => response.json()).
         catch(error => alert(error))

}