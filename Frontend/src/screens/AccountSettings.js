import React, { Component } from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { ImageAndTitle, DividerWithHeading } from "../components";
import { removeItemValue } from "../Utility";
import Images from "../../assets/images";

export  class AccountSettings extends Component {
  render() {
    const headlineHeight = 45
    return (
    <ImageBackground source={require('../../assets/splash.png')} style={styles.container} >
        <ImageAndTitle style={styles.header} title="Osama Aloqaily" image={{uri:'https://www.ftcksu.com/v1/users/getUserImage/2'}} />
        <View style={styles.options}>
            <DividerWithHeading 
                label={'Account Information'} 
                height={headlineHeight} 
                color={'#858B8C'}
                fontSize={16}
                withEdit
            />
            <View style={styles.info} >
                <Text> Emails
                    <Text>
                        Osama
                    </Text>
                </Text>
            </View>

            <DividerWithHeading 
                label={'Personal Information'} 
                height={headlineHeight} 
                color={'#858B8C'}
                fontSize={16}
                withEdit 
            />
            <View style={styles.info} >
                <Text> Emails
                    <Text>
                        Osama
                    </Text>
                </Text>
            </View>
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
    },
    info:{
        flex:1,
        width:'100%',
        backgroundColor:'white'
    }
}