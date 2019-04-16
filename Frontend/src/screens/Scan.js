import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { QrHandler } from '../components';
import ARView from '../components/ARView';

export class Scan extends Component {
  state = {
    arEnabled: false,
    objUrl: null
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: navigation.state.params ? navigation.state.params.headerLeft : null
  });  
  
  enableAR = (objUrl) => {
    this.setState({ arEnabled: true, objUrl })
    this.props.navigation.setParams({
      headerLeft: (
        <TouchableOpacity
          onPress={() =>  this.disableAR()}
          style={{ paddingLeft: 10 }}
        >
          <Text style={{ fontFamily: 'Cairo-Bold', color: '#3061E9', fontSize: 16 }}>BACK TO SCAN</Text>
        </TouchableOpacity>
      )
    })
  }

  disableAR = () => {
    this.props.navigation.setParams({
      headerLeft: null
    })
    this.setState({ arEnabled: false })
  }

  renderArViewOrQrScanner() {
    if (this.state.arEnabled) {
      return (
        <ARView disableAR={this.disableAR} objUrl={this.state.objUrl} />
      )
    } else {
      return (
        <QrHandler navigation={this.props.navigation} enableAR={this.enableAR} />
      )
    }
  }

  render() {
    return this.renderArViewOrQrScanner()
  }
}
