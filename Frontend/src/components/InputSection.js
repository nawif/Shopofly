import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

const InputSectionComponent = (props) => {
  const propsStyles = {
    height: props.height || '30%',
    width: props.width || '80%',
		justifyContent: props.justifyContent || 'center',
    alignContent: props.alignContent || 'space-around',
    alignSelf: 'center',
    marginTop: props.keyboardState ? '10%' : null
  }

	return (
    <View style={propsStyles}>
      { props.children }
    </View>
	)
}

const mapStateToProps = (state) => {
  const keyboardState = state.keyboardState
  return { keyboardState }
}
const InputSection = connect(mapStateToProps)(InputSectionComponent)

export { InputSection }
