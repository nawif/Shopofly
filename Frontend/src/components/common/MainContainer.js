import React, { Component } from 'react'
import { ImageBackground, KeyboardAvoidingView, Keyboard } from 'react-native'
import * as styles from '../../Styles'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class MainContainerComponent extends Component {
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
        source={require('../../../assets/splash.png')}
        style={container}
      >
        { this.props.children }
      </ImageBackground>
  	)
  }
}

const mapStateToProps = (state, ownProps) => {
  return { action: ownProps.setKeyboardState }
}

const MainContainer = connect(mapStateToProps, actions)(MainContainerComponent)

export { MainContainer }
