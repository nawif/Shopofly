import { AsyncStorage } from 'react-native'
import * as Global from './Global'

// Returns false if phone is incorrect
export const validatePhone = (phone) => {
  const re = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
  return re.test(String(phone))
}

// Returns false if password's format is incorrect
export const validatePassword = (password) => {
  return password.length >= 8
}

// Returns false if password and confirmPassword do not match
export const validateConfirm = (password, confirmPassword) => {
  return password === confirmPassword
}

// deletes an item from the async storage, returns true if done, otherwise it returns false
export async function removeItemValue(key){
  try {
    await AsyncStorage.removeItem(key);
    console.log(key+' is deleted');
    return true;
  }
  catch(exception) {
    console.log(key+' isn\'t deleted: '+exception);
    return false;
  }
}

export const getBillInfo = (items) => {
  const subtotal = _getSubtotal(items)
  const vatApprox = _getVatApprox(subtotal)
  const totalPrice = subtotal + vatApprox

  return { subtotal, vatApprox, totalPrice }
}

export const removeItemFromCart = async (itemToBeRemoved, callback) => {
  let cart = await AsyncStorage.getItem('cart')
  cart = JSON.parse(cart) // To make string as array

  cart.forEach(function(item, index) {
    if(item.key === itemToBeRemoved.key) {
      cart.splice(index, 1) // To remove the item from cart
      return
    }
  })

  // Reset oldCart to the newCart
  await AsyncStorage.setItem('cart', JSON.stringify(cart))

  // Callback to render cart when item is removed
  callback(cart)
}

function _getSubtotal(items) {
  let subtotal = 0

  for (let item of items) {
    const itemSummary = item.summary
    const price = parseInt(itemSummary.price.substring(1))
    if (itemSummary.price) {
       subtotal = subtotal + price * parseInt(itemSummary.quantity)
    }
  }

  return subtotal
}

function _getVatApprox(subtotal) {
  let vatApprox = Global.VAT * subtotal
  vatApprox = Math.round(vatApprox * 100) / 100
  return vatApprox
}
