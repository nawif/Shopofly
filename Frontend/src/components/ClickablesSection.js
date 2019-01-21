import React from 'react'
import { View } from 'react-native'

const ClickablesSection = (props) => {
  const propsStyles = {
    height: props.height || '30%',
    alignContent: props.alignContent || 'center'
  }

	return (
    <View style={propsStyles}>
      { props.children }
    </View>
	)
}

export { ClickablesSection }
