import React, { Component } from 'react'
import { Text, View,TouchableOpacity, FlatList } from 'react-native'
import { AddressesList } from "../components";
import listOfAddresses from '../dumb_data/address.json'



export class AddressBook extends Component {
  hasOption = true; // will be passed to the AddressesList coponent telling it to propmt options

  state={
    address:listOfAddresses
  }

  _handelAddAddressOnPress = () =>{
    this.props.navigation.navigate("AddAddress");
  }

  renderButton(){
    return (
      <TouchableOpacity onPress={this._handelAddAddressOnPress} style={styles.buttonContainer} >
        <Text style={styles.buttonTitle}  >ADD A NEW ADDRESS</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.spacer} />
        {this.renderButton()}
        <AddressesList addresses={listOfAddresses} />
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
    width:'80%',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#CFCFCF',
  },
  buttonTitle:{
    textAlign:'center',
    padding:10
  },
  spacer:{
    flex:0.1
  }
}