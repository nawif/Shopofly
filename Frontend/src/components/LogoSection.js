import React from 'react'
import { View, Image } from 'react-native'

const LogoSection = (props) => {
  const propsStyles = {
    height: props.height || '40%',
		justifyContent: props.justifyContent || 'center'
  }

  const logo = {
    alignSelf: 'center',
    marginBottom: props.isAvoiding ? '25%' : null
  }

	return (
    <View style={propsStyles}>
      <Image
        source={require('../../assets/logo.png')}
        style={logo}
      />
    </View>
	)
}

export { LogoSection }
