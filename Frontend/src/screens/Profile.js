import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import { ImageAndTitle, OptionCardList } from "../components";

export  class Profile extends Component {
  render() {
    return (
      <ImageBackground source={require('../../assets/splash.png')} style={styles.container} >
        <ImageAndTitle style={styles.header} title="Osama Aloqaily" image={{uri:'https://www.ftcksu.com/v1/users/getUserImage/2'}} />
        <View style={styles.options}>
            <OptionCardList/>
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