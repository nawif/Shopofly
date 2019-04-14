import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import { ImageAndTitle, OptionCardList } from "../components";
import { removeItemValue } from "../Utility";
import Images from "../../assets/images";

export  class Profile extends Component {

handelLogout = () =>{
    removeItemValue('token')
    this.props.navigation.navigate('Login');
}

handelAddressBook = () =>{
    this.props.navigation.navigate('AddressBook');
}

handelOrderList = () =>{
    this.props.navigation.navigate('OrderList');
}

handelAccountSettings = () =>{
    this.props.navigation.navigate('AccountSettings');
}

  render() {
    const options =[
      {
          title:'Orders',
          icon:Images.orders,
          action:this.handelOrderList

      },
      {
          title:'Address Book',
          icon:Images.addressBook,
          action:this.handelAddressBook
      },
      {
          title:'Account Settings',
          icon:Images.account,
          action:this.handelAccountSettings

      },
      {
          title:'Logout',
          icon:Images.logout,
          textStyle:{color:'#D34A4A'},
          action:this.handelLogout
      }
  ]
    return (
    <ImageBackground source={require('../../assets/splash.png')} style={styles.container} >
        <ImageAndTitle style={styles.header} title="Osama Aloqaily" image={{uri:'https://www.flynz.co.nz/wp-content/uploads/profile-placeholder.png'}} />
        <View style={styles.options}>
            <OptionCardList options={options} />
        </View>
    </ImageBackground>
    )
  }
}
const styles ={
    container:{
        alignItems:'center',
        flex:1
    },
    header:{
        flex:1,
        justifyContent:'center',
    },
    options:{
        flex:2,
        width:'100%',
        backgroundColor:'white'
    }
}