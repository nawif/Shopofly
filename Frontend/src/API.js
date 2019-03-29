import axios from 'axios'

const url = 'http://shopofly.xyz/api'

export const login = (phone, password) => {
  return axios({
    method: 'POST',
    url: `${url}/auth/login`,
    headers: { 'Content-type': 'application/json' },
    data: {
      "mobile_number": phone,
      "password": password
    }
  })
  .then((res) => res.data.access_token)
}

export const register = (phone, password) => {
  return axios({
    method: 'POST',
    url: `${url}/users/register`,
    headers: { 'Content-type': 'application/json' },
    data: {
      "mobile_number": phone,
      "password": password,
    }
  })
  .then((res) => res.data)

}

// Get user information [POST]
export const getUserInfo = (token) => {
  return axios({
    method: 'POST',
    url: `${url}/auth/me`,
    headers: { 'Content-type': 'application/json' },
    data: {
      'token': token
    }
  })
  .then((res) => res.data)
}

// Get Item endpoint [GET]
export const getItem = (url, token) => {
  return axios({
    method: 'GET',
    url: url,
    headers: { 'Content-type': 'application/json', 'Authorization': 'Bearer ' + token }
  })
  .then((res) => res.data)
}

// Get Address endpoint [GET]
export const getAddress = (token) => {
  return axios({
    method: 'GET',
    url: `${url}/users/address`,
    headers: { 'Content-type': 'application/json', 'Authorization': 'Bearer ' + token },
  })
  .then((res) => res.data)
}

// TODO: Make "addAddress" endpoint
// Add Address Endpoint [POST]
export const addAddress = (token) => {
  return null
}

// Checkout endpoint [POST]
export const checkout = (token, order) => {
  const itemsWithQuantity = []
  // TODO: tell backend developers about payment method!
  order.items.forEach(function(item) {
    itemsWithQuantity.push({
      "key": item.id,
      "quantity": item.quantity
    })
  })

  const body = {
    "orders": itemsWithQuantity,
    "address_id": order.address_id
  }

  console.log("Body: ", body)

  return axios({
    method: 'POST',
    url: `${url}/store/checkout`,
    headers: { 'Content-type': 'application/json', 'Authorization': 'Bearer ' + token },
    data: body
  })
  .then((res) => res.data)
}
