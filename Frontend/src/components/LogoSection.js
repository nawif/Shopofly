import React from 'react'
import { View, Image } from 'react-native'

const LogoSection = (props) => {
  const propsStyles = {
    height: props.height || '40%',
		justifyContent: props.justifyContent || 'center'
  }

  const { logo } = styles

	return (
    <View style={propsStyles}>
      <Image
        source={require('../../assets/logo.png')}
        style={logo}
      />
    </View>
	)
}

const styles = {
  logo: {
    alignSelf: 'center'
  }
}

export { LogoSection }
