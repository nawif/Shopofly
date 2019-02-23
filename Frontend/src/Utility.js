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

// Retrieves bill info as object of {subtotal, vatAprrox, totalPrice}
export const getBillInfo = (items) => {
  const subtotal = _getSubtotal(items)
  const vatApprox = _getVatApprox(subtotal)
  const totalPrice = subtotal + vatApprox

  return { subtotal, vatApprox, totalPrice }
}

// Adds item to storage: (cart, orderList, starredItems)
// callback returns new items list
export async function addItem(itemToBeAdded, storage, callback){
  let items = await AsyncStorage.getItem(storage)

  items = JSON.parse(items)

  if(!items) {
    items = []
  }

  items.push(itemToBeAdded)

  await AsyncStorage.setItem(storage, JSON.stringify(items))

  callback(items)
}

// Removes item from storage: (cart, orderList, starredItems)
// callback returns new items list
export async function removeItem(indexToBeRemoved, storage, callback) {
  let items = await AsyncStorage.getItem(storage)
  items = JSON.parse(items) // To make string as array

  items.splice(indexToBeRemoved, 1) // To remove the item from cart

  // Reset oldList to the newList
  await AsyncStorage.setItem(storage, JSON.stringify(items))

  // Callback to render cart when item is removed
  callback(items)
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
