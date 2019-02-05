export const setKeyboardState = (newKeyboardState) => {
  return {
    type: "set_keyboard_state",
    payload: newKeyboardState
  }
}
