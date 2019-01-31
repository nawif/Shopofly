import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
import { Container, MainContainer } from '../components'
import { BarCodeScanner, Permissions } from 'expo';

class PopupAlert extends Component {
  state = {
    lastScannedUrl: null,
    showAlert: false,
    alertMessage: ''
  };
  // Handle QR code reader output
  _handleBarCodeRead = result => {
    // result.data !== this.state.lastScannedUrl
    if (true) {
      this.setState({ lastScannedUrl: result.data })

      const scannedText = result.data
      const regex = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')
      if(regex.test(scannedText) && scannedText.toLowerCase().includes("shopofly")) {
        API.getItem(scannedText)
        .then(async (response) => {
          const itemName = response.itemName
          const price = response.price
          const supplier = response.supplier.supplierName

          const firstLine = `name: ${itemName}`
          const secondLine = `price: ${price}`
          const thirdLine = `supplier: ${supplier}`

          const fullDescription = firstLine + "\n" + secondLine + "\n" + thirdLine
          this.showAlert(fullDescription)
        })
        .catch((error) => {})
      }
    }
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
    // TODO save item data from the first API request ()
    API.getItem(this.state.lastScannedUrl)
    .then(async (response) => {
      const itemName = response.itemName
      const price = response.price
      const supplier = response.supplier.supplierName
      const description = response.description
      const quantity = response.quantity
      // TODO pass all images to item.
      const imageUrl = response.image_url[0]

      this.props.navigation.navigate('Item', { itemName, price, supplier, description, quantity, imageUrl })
      this.hideAlert()
    })
    .catch((error) => {})
  }

  render() {
    return ( 
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
            cancelButtonColor="#FF5722"
            cancelText="Close"
            onCancelPressed={() => this.hideAlert()}
            showCancelButton={true}
            messageStyle={{ textAlign: 'left' }}
          />
    )
  }
}
const { width } = Dimensions.get('window')
const qrSize = width * 0.6
const styles = StyleSheet.create({
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
    }
});
export { PopupAlert }
