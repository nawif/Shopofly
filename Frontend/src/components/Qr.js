import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
import { Container, MainContainer, PopupAlert } from '../components'
import { BarCodeScanner, Permissions } from 'expo';

class Qr extends Component {
  state = {
    hasCameraPermission: null
  };
  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  render() {
    if (this.state.hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
  } else if (this.state.hasCameraPermission === false) {
      return <Text style={{ color: '#fff' }}>No access to camera</Text>;
  }
    const { qr } = styles
    return ( 
      <BarCodeScanner
        onBarCodeRead={this._handleBarCodeRead}
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
      >
        <Container>
        <View style={qr}>
          <Image
              style={styles.qr}
              source={require('../../assets/scan.png')}
          />
        </View>
        <PopupAlert/>
        </Container>
      </BarCodeScanner>
    )
  }
}
const { width } = Dimensions.get('window')
const qrSize = width * 0.6
const styles = StyleSheet.create({
    qr: {
      marginTop: '45%',
      width: qrSize,
      height: qrSize,
      alignSelf: 'center',
    }
});
export { Qr }
