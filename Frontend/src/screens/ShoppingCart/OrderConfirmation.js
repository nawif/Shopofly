import React, { Component } from 'react'
import { View, ImageBackground, Text, Image } from 'react-native'
import { GradientButton, MainContainer } from "../../components"
import { LinearGradient } from 'expo'
import * as Global from '../../Global'

export class OrderConfirmation extends Component {
    _handelAddAddressOnPress = () =>{
        this.props.navigation.navigate("AddAddress");
    }

    

	render() {
    const orderid = 12
    const container1 = {
      borderRadius:100,
      flexDirection: 'row',
      alignItems: 'center',
      padding:10,
      width:70,
      height:70,
      alignItems: 'center'
    }
		return (

        <ImageBackground source={require('../../../assets/splash.png')} style={styles.background} >
        <View style={styles.container}>
            <LinearGradient
            colors={[Global.FIRST_COLOR, Global.SECOND_COLOR]}
            start={[1.0, 0]}
            end={[0.0, 0]}
            style={container1}
          >
            <Image
              source={require('../../../assets/checked2.png')}
              style={styles.checked}
            />
          </LinearGradient>
          <Text style={styles.FirstLine}>Thank You!</Text>
          <Text style={styles.SecondLine}>Your order has been placed</Text>
          <Text style={styles.ThierdLine} > You will receive a confirmtion email shortly</Text>
          <View style={styles.orderId}>
            <Text style={styles.orderlabel}> Your order number is 
              <Text style={styles.orderNumber}> #{orderid} </Text>
            </Text>
          </View>
            <GradientButton style={styles.gradientButton}
              isValid={true} 
              label={"CONTINUE SHOPPING"} 
              width={'100%'} 
              borderRadius={50} 
              height={'50%'}
              fontSize={20}
              padding={14}
              onClick={()=>{
                this.props.navigation.navigate('Scan')  
              } }
            />
        </View>
        </ImageBackground>

		)
	}
}
const styles ={
    
      FirstLine:{
        fontSize: 24,
        color:'#2B2B2B',
        fontFamily:'Cairo-Bold',
        textAlign:'center'
      },
      SecondLine:{
        fontSize: 16,
        color:'#2B2B2B',
        fontFamily:'Cairo-SemiBold',
        textAlign:'center'
      },
      ThierdLine:{
        fontSize: 14,
        color:'#919191',
        fontFamily:'Cairo-SemiBold',
        textAlign:'center'
      },
      container:{
        justifyContent:'center',
        alignItems: 'center',
        height: '50%',
        width: '100%',
        borderRadius:40,
        backgroundColor:'white',

        paddingTop:80
      },
      background:{
        alignItems:'center',
        flex:1
      },
      checked: {
        width:30,
        height:35,
        flex:1
      },
      orderId: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:50,
        height:'10%',
        borderWidth: 2,
        borderColor: '#CFCFCF',
        width:'40%',
        backgroundColor:'white',
        marginTop: 20
      },
      orderNumber: {
        fontFamily: 'Cairo-Bold',
      },
      orderlabel:{
        fontFamily: 'Cairo-SemiBold',
        fontSize:12,

      }
}