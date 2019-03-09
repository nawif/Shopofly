import React, { Component } from 'react'
import { Text, View,TouchableOpacity, Image } from 'react-native'
import { AddressesList, ButtonWithRadius } from "../components";
import listOfAddresses from '../dumb_data/address.json'
import images from '../../assets/images'


export class AddressBook extends Component {
  hasOption = true; // will be passed to the AddressesList coponent telling it to propmt options

  state={
    address:listOfAddresses
  }

  _handelAddAddressOnPress = () =>{
    this.props.navigation.navigate("AddAddress");
  }

  renderNewAddressButton(){
    return (
      <TouchableOpacity onPress={this._handelAddAddressOnPress} style={styles.buttonContainer} >
        <Text style={styles.buttonTitle}  >Add a New Address</Text>
      </TouchableOpacity>
    )
  }

  onAddressSelect(addressId) {
    console.log(addressId)
    this.setState({ selectedAddress: addressId })
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.spacer} />
        {this.renderNewAddressButton()}
        <AddressesList addresses={listOfAddresses} selectedAddress={this.state.selectedAddress} onAddressSelect={this.onAddressSelect.bind(this)} />
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