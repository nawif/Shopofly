import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { AddressBox } from "../components";


export class AddressBook extends Component {

  renderButton(){
    return (
      <TouchableOpacity style={styles.buttonContainer} >
        <Text style={styles.buttonTitle}  >ADD A NEW ADDRESS</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.spacer} />
        {this.renderButton()}
        <View style={styles.spacer} />
        <AddressBox style={{marginBottom:30}} title="Home" />
        <View style={styles.spacer} />
        <AddressBox title="Home1" />

      </View>
    )
  }
}

const styles ={

  container:{
    flex:1,
    alignItems:'center',
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
    flex:0.2
  }
}