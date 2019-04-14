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
    headers: { 'Content-type': 'application/json', 'Authorization': 'Bearer ' + token },
  })
  .then((res) => res.data)
}

export const updateUserInfo = ({ phoneNumber, firstName, lastName, email, oldPassword, newPassword }, token) => {
  return axios({
    method: 'POST',
    url: `${url}/users/update`,
    headers: { 'Content-type': 'application/json', 'Authorization': 'Bearer ' + token },
    data: {
      "mobile_number": phoneNumber ? phoneNumber : null,
    	"name": firstName || lastName ? `${firstName} ${lastName}` : null,
      "email": email ? email : null,
    	"old_password": oldPassword ? oldPassword : null,
    	"new_password": newPassword ? newPassword : null
    }
  })
  .then((res) => res.data)
}

export const addnewaddress = ({ country, city, district, street, house_number, Label, FirstName, LastName, PhoneNumber }, token) => {
  return axios({
    method: 'POST',
    url: `${url}/users/update`,
    headers: { 'Content-type': 'application/json', 'Authorization': 'Bearer ' + token },
    data: {
      "Country": country ? country : null,
    	"City": city ? city  : null,
      "District": district ? district : null,
      "Street": street ? street : null,
      "House Number": house_number ? house_number : null,
    	"Label": Label ? Label : null,
      "FirstName": FirstName ? FirstName : null,
      "LastName": LastName ? LastName : null,
      "PhoneNumber": PhoneNumber ? PhoneNumber : null,
    }
  })
  .then((res) => res.data)
}
// Get Item endpoint [GET]
export const getItem = (url, token) => {
  return axios.get(`${url}?token=${token}`)
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

export const getListOfOrders = (token) => {
  return axios({
    method: 'GET',
    url: `${url}/users/orders`,
    headers: { 'Content-type': 'application/json', 'Authorization': 'Bearer ' + token }
  })
  .then((res) => res.data)
}
