import React, { Component } from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { ImageAndTitle, DividerWithHeading } from "../components";

export  class AccountSettings extends Component {

  render() {
    const headlineHeight = 45
    const inputStyle = {
        color:'#464949',
        fontFamily:'Roboto-Medium'
      }
    
      const	labelTextStyle = {
          opacity: 0.5
      }
    return (
    <ImageBackground source={require('../../assets/splash.png')} style={styles.container} >
        <ImageAndTitle style={styles.header} title="Osama Aloqaily" image={{uri:'https://www.ftcksu.com/v1/users/getUserImage/2'}} />
        <View style={styles.options}>
            <DividerWithHeading 
                label={'Personal Information'} 
                height={headlineHeight} 
                color={'#858B8C'}
                fontSize={16}
                withEdit
                onPress={()=>{
                    this.props.navigation.navigate('PersonalSettings')
                }} 
            />
            <View style={styles.info} >
                <View style={styles.titleAndIcon} >
                    <Text style={styles.title} >First Name</Text>
                </View>
                <Text style={styles.subtitle} > Osama </Text>
            </View>
            <View style={styles.info} >
                <View style={styles.titleAndIcon} >
                    <Text style={styles.title} >Last Name</Text>
                </View>
                <Text style={styles.subtitle} > Aloqaily </Text>
            </View>
            <View style={styles.info} >
                <View style={styles.titleAndIcon} >
                    <Text style={styles.title} >Email</Text>
                </View>
                <Text style={styles.subtitle} > osamaloqaily@gamil.com </Text>
            </View>

            <DividerWithHeading 
                label={'Security Information'} 
                height={headlineHeight} 
                color={'#858B8C'}
                fontSize={16}
                withEdit
                onPress={()=>{
                    this.props.navigation.navigate('SecuritySettings')
                }} 
            />
            <View style={styles.info} >
                <View style={styles.titleAndIcon} >
                    <Text style={styles.title} >Password</Text>
                </View>
                <Text style={styles.subtitle} > ********* </Text>
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
        alignSelf:'center',
        width:'90%',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-around',
        margin:'2%'
    },
    titleAndIcon:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    icon:{
        marginRight:10
    },
    title:{
        fontFamily:'Cairo-SemiBold',
        color:'#858B8C',
        fontSize:16,
    },
    subtitle:{
        paddingLeft:10,
        flex:2,
        color:' #2B2B2B',
        fontFamily:'Cairo-SemiBold',
        fontSize:14,
        paddingTop:4
    }
}