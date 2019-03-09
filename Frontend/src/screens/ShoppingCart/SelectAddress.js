import React, { Component } from 'react'
import { Text, View,TouchableOpacity, FlatList } from 'react-native'
import { AddressesList, CartFooter } from "../../components";
import listOfAddresses from '../../dumb_data/address.json'



export class SelectAddress extends Component {

  state={
    address: listOfAddresses,
    selectedAddress: null
  }

  _handelAddAddressOnPress = () => {
    this.props.navigation.navigate('AddNewAddress')
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
        <CartFooter
          onPressHandler={() => this.props.navigation.navigate('PlaceOrder')}
          isActive={this.state.selectedAddress!=null} 
        />
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
