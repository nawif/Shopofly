import React from 'react'
import { TextField } from 'react-native-material-textfield'

const TextInput = (props) => {
  const inputStyle = {
    color: props.color || '#464949',
    fontFamily: props.fontFamily || 'Roboto-Medium'
  }

  const	labelTextStyle = {
  	opacity: props.opacity || 0.5
  }

  // ----- Mostly Changed -----
  // label
  // characterRestriction
  // value
  // onChangeText
  // onEndEditing
  // error

	return (
    <TextField
      label={props.label || 'Input'}
      labelFontSize={props.labelFontSize || 12}
      fontSize={props.fontSize || 16}
      title={props.title}
      textColor={props.textColor || '#FFFFFF'}
      tintColor={props.tintColor || '#FFFFFF'}
      baseColor={props.baseColor || '#FFFFFF'}
      characterRestriction={props.characterRestriction}
      inputStyle={inputStyle}
      labelTextStyle={labelTextStyle}
      value={props.value}
      onChangeText={props.onChangeText}
      onEndEditing={props.onEndEditing}
      error={props.error}
      secureTextEntry={props.secureTextEntry}
      autoCapitalize={props.autoCapitalize}
    />
	)
}

export { TextInput }
