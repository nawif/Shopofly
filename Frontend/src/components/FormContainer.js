import React, { Component } from 'react'
import { ImageBackground, KeyboardAvoidingView, Keyboard } from 'react-native'
import * as styles from '../Styles'
import { connect } from 'react-redux'
import * as actions from '../actions'

class FormContainerComponent extends Component {
  state = {
    setKeyboardState: null
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.props.setKeyboardState(true)
  }

  _keyboardDidHide = () => {
    this.props.setKeyboardState(false)
  }

  render() {
    const { container } = styles

  	return (
      <ImageBackground
        source={require('../../assets/splash.png')}
        style={container}
      >
        <KeyboardAvoidingView style={container} behavior="padding">
          { this.props.children }
        </KeyboardAvoidingView>
      </ImageBackground>
  	)
  }
}

const mapStateToProps = (state, ownProps) => {
  return { action: ownProps.setKeyboardState }
}

const FormContainer = connect(mapStateToProps, actions)(FormContainerComponent)

export { FormContainer }
