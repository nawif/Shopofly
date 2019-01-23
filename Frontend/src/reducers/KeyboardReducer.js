export default (state=null, action) => {
  switch (action.type) {
    case "set_keyboard_state":
      return action.payload
    default:
      return state
  }

  return false
}
