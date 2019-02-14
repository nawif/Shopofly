import React, { Component } from 'react'
import { Text, View,TouchableOpacity, FlatList } from 'react-native'
import { AddressesList } from "../components";
import listOfAddresses from '../dumb_data/address.json'



export class SelectAddress extends Component {
    canSelect = true; // tells the address list component that the list can be selected

  state={
    address:listOfAddresses
  }

  _handelAddAddressOnPress = () =>{
    console.log("ADD A NEW ADDRESS");
    
  }

  renderNewAddressButton(){
    return (
      <TouchableOpacity onPress={this._handelAddAddressOnPress} style={styles.buttonContainer} >
        <Text style={styles.buttonTitle}  >Deliver To a New Address</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.spacer} />
        <AddressesList addresses={listOfAddresses} canSelect={this.canSelect} />
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