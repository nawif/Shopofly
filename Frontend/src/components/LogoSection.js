import React from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'

const LogoSectionComponent = (props) => {
  const propsStyles = {
    height: props.height || '40%',
		justifyContent: props.justifyContent || 'center',
    marginBottom: props.keyboardState ? '15%' : null
  }

  const logo = {
    alignSelf: 'center'
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

const mapStateToProps = (state) => {
  const keyboardState = state.keyboardState
  return { keyboardState: state.keyboardState }
}

const LogoSection = connect(mapStateToProps)(LogoSectionComponent)

export { LogoSection }
