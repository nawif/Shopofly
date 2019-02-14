import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

const InputSectionComponent = (props) => {
  const propsStyles = {
    // height: '30%',
    width: '85%',
    flexDirection: 'column',
		justifyContent: 'space-around',
    alignContent: props.alignContent || 'space-around',
    alignSelf: 'center',
    marginTop: props.keyboardState ? 30 : null,
  }

	return (
    <View style={[propsStyles, props.style]}>
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
