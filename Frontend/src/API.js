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

export const getItem = (url, token) => {

  return axios({
    method: 'GET',
    url: url,
    headers: { 'Content-type': 'application/json', 'Authorization': 'Bearer ' + token }
  })
  .then((res) => res.data)
}

export const getAddress = (token) => {
  return axios({
    method: 'GET',
    url: `${url}/users/address`,
    headers: { 'Content-type': 'application/json', 'Authorization': 'Bearer ' + token },
  })
  .then((res) => res.data)
}

// TODO: Make "addAddress" endpoint
export const addAddress = (token) => {
  return null
}
