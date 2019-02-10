import { AsyncStorage } from 'react-native'

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