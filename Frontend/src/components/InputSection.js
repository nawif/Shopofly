import React from 'react'
import { View, KeyboardAvoidingView } from 'react-native'

const InputSection = (props) => {
  const propsStyles = {
    height: props.height || '30%',
    width: props.width || '80%',
		justifyContent: props.justifyContent || 'center',
    alignContent: props.alignContent || 'space-around',
    alignSelf: 'center'
  }

	return (
    <KeyboardAvoidingView 
    style={propsStyles}
    behavior={"padding"}>
      { props.children }
    </KeyboardAvoidingView>
	)
}

export { InputSection }
