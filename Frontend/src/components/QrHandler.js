import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  AsyncStorage
} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as API from '../API'

export default class QrHandler extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
    showAlert: false,
    alertMessage: '',
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
        return <Text >No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
              }}
            >
              <View style={styles.container}>
                <Text style={styles.description}>SCAN QR CODE</Text>
                <Image
                  style={styles.qr}
                  source={require('../../assets/scan.png')}
                />
              </View>
            </BarCodeScanner>

            <AwesomeAlert
            	show={this.state.showAlert}
            	title={"ITEM DESCRIPTION"}
            	message={this.state.alertMessage}
            	closeOnTouchOutside={true}
            	closeOnHardwareBackPress={true}
            	showConfirmButton={true}
            	confirmButtonColor="#448AFF"
            	confirmText="Preview"
              onConfirmPressed={() => this.loadItem()}
              cancelButtonColor="#14BAAB"
            	cancelText="View as AR"
              onCancelPressed={() => this.props.enableAR(this.state.item.ar_url)}
              showCancelButton={true}
            	messageStyle={{ textAlign: 'left' }}
            />
        </View>
    );
  }

  // Handle QR code reader output
  _handleBarCodeRead = result => {
      if(result.data === this.state.lastScannedUrl) {
        return
      }

      const scannedText = result.data
      console.log("ScannedText: " + result.data)
      const regex = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')
      if(regex.test(scannedText) && scannedText.toLowerCase().includes("shopofly")) {
        AsyncStorage.getItem('token')
        .then((token) => {
          API.getItem(scannedText, token)
          .then((response) => {
            const item = response.data
            const price = item.price
            this.setState({
                showAlert: true,
                item,
                alertMessage: `Name: ${item.itemName} \nPrice: ${item.price} \nfrom ${item.supplier.supplierName}`
             })
          })
          .catch((error) => console.log(error))
        })
        .catch((error) => console.log(error))
    }

    this.setState({ lastScannedUrl: result.data })
  }

  showAlert = (message) => {
    this.setState({
      showAlert: true,
      alertMessage: message
    })
  }

  hideAlert = () => {
    this.setState({
      showAlert: false,
      lastScannedUrl: null
    })
  }

  loadItem = () => {
    AsyncStorage.getItem('token')
    .then((token) => {
      API.getItem(this.state.lastScannedUrl, token)
      .then(async (response) => {
        response = response.data
        const item = {
          key: response.key,
          summary: {
            manufacturer: response.supplier.supplierName,
            seller: response.supplier.supplierName,
            itemName: response.itemName,
            price: response.price,
            quantity: response.quantity,
            rating: 4.8,
            reviews_count: 69,
            primary_specifications: [
              { specKey: 'Color', specValue: 'Black' },
              { specKey: 'Size', specValue: '64 GB'}
            ],
          },
          details: {
            description: response.description,
            supplierName: response.supplier.supplierName,
            warranty: '6 months',
            specifications: [
              { key: 'Key', value: 'Value'},
              { key: 'Key', value: 'Value'},
              { key: 'Key', value: 'Value'},
            ],
          },
          reviews: [
            {
              reviewer: 'Osama Aloqaily',
              rating: 4.8,
              feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              date: '27 jan 2019'
            },
            {
              reviewer: 'Nawaf Alquaid',
              rating: 4.7,
              feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              date: '27 jan 2019'
            },
            {
              reviewer: 'Osama Aloqaily',
              rating: 4.8,
              feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              date: '27 jan 2019'
            }
          ],
          images: response.image_url,
        }

        const { navigate } = this.props.navigation
        navigate('Item', { item })
        this.hideAlert()
      })
      .catch((error) => console.log(error))
    })
  }
}

const { width } = Dimensions.get('window')
const qrSize = width * 0.6
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  qr: {
    marginTop: '10%',
    marginBottom: '10%',
    width: qrSize,
    height: qrSize,
    alignSelf: 'center'
  },
  description: {
    fontSize: width * 0.09,
    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
    color: 'white',
    fontFamily: 'Roboto-Medium',
    alignSelf: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10
  },
  cancel: {
    fontSize: width * 0.05,
    textAlign: 'center',
    width: '70%',
    color: 'white',
  },

});

export { QrHandler }
