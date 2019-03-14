import React, { Component } from 'react'
import { Text, View,TouchableOpacity, AsyncStorage } from 'react-native'
import listOfAddresses from '../../dumb_data/address.json'
import * as API from '../../API'


export class SelectAddress extends Component {

  state={
    listOfAddresses: [],
    selectedAddress: null,
  }

  componentWillMount() {
    AsyncStorage.getItem('token')
    .then((token) => {
      API.getAddress(token)
      .then((addresses) => {
        this.setState({listOfAddresses: addresses})
      })
    })
  }

  _handelAddAddressOnPress = () => {
    this.props.navigation.navigate('AddNewAddress')
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
      title: 'TODO: add title',
      address: `${tmp.house_number} ${tmp.street}, ${tmp.district}`,
      phone: 'TODO: add phone',
      name: 'TODO: add name'
    }

    this.props.navigation.navigate('PlaceOrder', { selectedAddress: activeAddress })
    // this.setState({isLoading: true})
    // .then(() => {
    //   this.props.navigation.navigate('PlaceOrder', { selectedAddress })
    //   this.setState({isLoading:false})
    // })
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
      <GradientButton
        onClick={this._handelAddAddressOnPress}
        isValid={selectedAddress !== null}
        label={'CONTINUE'}
        width={250}
      />
    )
  }
  onAddressSelect(addressId) {
    this.setState({ selectedAddress: addressId })
  }

  render() {
    const { listOfAddresses, selectedAddress } = this.state

    return (
      <View style={styles.container} >
        <View style={styles.spacer} />
        <AddressesList addresses={listOfAddresses} selectedAddress={selectedAddress} onAddressSelect={this.onAddressSelect.bind(this)} />
        {this.renderNewAddressButton()}
        <CartFooter
          onPressHandler={() => this.props.navigation.navigate('PlaceOrder')}
          isActive={this.state.selectedAddress!=null} 
        />
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
