import React from 'react'
import { View } from 'react-native'

export const InputSection = (props) => {
  const propsStyles = {
    height: props.height || '30%',
    width: props.width || '80%',
		justifyContent: props.justifyContent || 'center',
    alignContent: props.alignContent || 'space-around',
    alignSelf: 'center'
  }

	return (
    <View style={propsStyles}>
      { props.children }
    </View>
	)
}