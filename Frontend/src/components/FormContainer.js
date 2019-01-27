import React from 'react'
import { ImageBackground, KeyboardAvoidingView } from 'react-native'
import * as styles from '../Styles'

export const FormContainer = (props) => {
  const { container } = styles

	return (
    <ImageBackground
      source={require('../../assets/splash.png')}
      style={container}
    >
      <KeyboardAvoidingView style={container} behavior="padding">
        { props.children }
      </KeyboardAvoidingView>
    </ImageBackground>
	)
}