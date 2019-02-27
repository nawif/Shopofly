import React, { Component } from 'react'
import { Text, View,TouchableOpacity, FlatList } from 'react-native'
import { AddressesList } from "../../components";
import listOfAddresses from '../../dumb_data/address.json'



export class SelectAddress extends Component {
  state={
    address: listOfAddresses,
    selectedAddress: null
  }

  _handelAddAddressOnPress = () => {
    console.log("ADD A NEW ADDRESS");

    this.props.navigation.navigate('PlaceOrder')

  }

  renderNewAddressButton(){
    return (
      <TouchableOpacity onPress={this._handelAddAddressOnPress} style={styles.buttonContainer} >
        <Text style={styles.buttonTitle}  >Deliver To a New Address</Text>
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
        <AddressesList addresses={listOfAddresses} selectedAddress={this.state.selectedAddress} onAddressSelect={this.onAddressSelect.bind(this)} />
        {this.renderNewAddressButton()}

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
