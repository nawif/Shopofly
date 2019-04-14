import React, { Component } from 'react'
import { Text, View,TouchableOpacity, AsyncStorage } from 'react-native'
import listOfAddresses from '../../dumb_data/address.json'
import { AddressesList, CartFooter, GradientButton } from "../../components";
import * as API from '../../API'


export class SelectAddress extends Component {

  state={
    listOfAddresses: [],
    selectedAddress: null,
    phone: '',
    name: '',
  }

  componentWillMount() {
    AsyncStorage.getItem('token')
    .then((token) => {
      API.getAddress(token)
      .then((addresses) => {
        API.getUserInfo(token)
        .then((response) => {
          this.setState({listOfAddresses: addresses, phone: response.mobile_number, name: response.name})
        })
        .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
  }

  _handelAddAddressOnPress = () => {
    this.props.navigation.navigate('AddNewAddress')
  }

  _handlePlaceOrder = () => {
    const { selectedAddress, listOfAddresses } = this.state
    let tmp = null

    listOfAddresses.forEach(function(address) {
      if(address.id === selectedAddress) {
        tmp = address
        return
      }
    })

    const activeAddress = {
      id: tmp.id,
      title: tmp.label,
      address: `${tmp.house_number} ${tmp.street}, ${tmp.district}`,
      phone: this.state.name,
      name: this.state.phone,
    }

    this.props.navigation.navigate('PlaceOrder', { selectedAddress: activeAddress })
  }

  renderNewAddressButton(){
    return (
      <TouchableOpacity onPress={this._handelAddAddressOnPress} style={styles.buttonContainer} >
        <Text style={styles.buttonTitle}  >Deliver To a New Address</Text>
      </TouchableOpacity>
    )
  }

  renderContinueButton(){
    const { selectedAddress } = this.state

    return (
      <CartFooter
          onPressHandler={this._handlePlaceOrder}
          isActive={this.state.selectedAddress !== null}
        />
    )
  }
  onAddressSelect(addressId) {
    this.setState({ selectedAddress: addressId })
  }

  render() {
    const { listOfAddresses, selectedAddress, phone, name } = this.state

    return (
      <View style={styles.container} >
        <View style={styles.spacer} />
        <AddressesList addresses={listOfAddresses} selectedAddress={selectedAddress} onAddressSelect={this.onAddressSelect.bind(this)} phone={phone} name={name} />
        {this.renderNewAddressButton()}
        {this.renderContinueButton()}
      </View>
    )
  }
}

const styles ={
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#FFFFFF'
  },
  buttonContainer:{
    width:'90%',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#CFCFCF',
  },
  buttonTitle:{
    textAlign:'center',
    padding:10,
  },
  spacer:{
    flex:0.1
  }
}
