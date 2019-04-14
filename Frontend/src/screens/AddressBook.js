import React, { Component } from 'react'
import { Text, View,TouchableOpacity, FlatList, AsyncStorage } from 'react-native'
import { AddressesList } from "../components";
import * as API from '../API'



export class AddressBook extends Component {
  hasOption = true; // will be passed to the AddressesList coponent telling it to propmt options

  state={
    listOfAddresses: []
  }

  _handelAddAddressOnPress = () =>{
    this.props.navigation.navigate("AddNewAddress");
  }

  componentWillMount() {
		this.didFocusListener = this.props.navigation.addListener(
		  'didFocus',
		  () => { this.retrieveAddresses() },
		)
	}

  retrieveAddresses() {
    AsyncStorage.getItem('token')
    .then((token) => {
      API.getAddress(token)
      .then((addresses) => {
        this.setState({listOfAddresses: addresses})
      })
    })
  }

  renderButton(){
    return (
      <TouchableOpacity onPress={this._handelAddAddressOnPress} style={styles.buttonContainer} >
        <Text style={styles.buttonTitle}  >ADD A NEW ADDRESS</Text>
      </TouchableOpacity>
    )
  }
  onAddressSelect(addressId) {
    this.setState({ selectedAddress: null })
  }
  render() {
    const { listOfAddresses, selectedAddress } = this.state

    return (
      <View style={styles.container} >
        <View style={styles.spacer} />
           {this.renderButton()}
        <AddressesList addresses={ listOfAddresses } selectedAddress={selectedAddress} onAddressSelect={this.onAddressSelect.bind(this)}/>
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
