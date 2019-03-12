import React, { Component } from 'react'
import { View, ImageBackground, Text, Image } from 'react-native'
import { GradientButton, MainContainer } from "../../components"
import { LinearGradient } from 'expo'
import * as Global from '../../Global'

export class OrderConfirmation extends Component {

	render() {
    const { orderNumber } = this.props.navigation.state.params

		return (
      <MainContainer>
        <ImageBackground source={require('../../../assets/splash.png')} style={styles.background} >
        <View>
          <LinearGradient
            colors={[Global.FIRST_COLOR, Global.SECOND_COLOR]}
            start={[1.0, 0]}
            end={[0.0, 0]}
            style={styles.container}
          >
            <Image
              source={require('../../../assets/checked2.png')}
              style={styles.checked}
            />
          </LinearGradient>
          <Text style={styles.FirstLine}>Thank You!</Text>
          <Text style={styles.SecondLine}>Your order has been placed</Text>
          <Text style={styles.ThierdLine} >You will receive a confirmtion email shortly</Text>
          <View style={styles.orderId}>
            <Text> Your order number is
              <Text style={styles.orderNumber}>{ orderNumber }</Text>
            </Text>
          </View>
        </View>
        </ImageBackground>
      </MainContainer>
		)
	}
}
const styles ={
  container: {
    borderRadius:100,
    flexDirection: 'row',
    alignItems: 'center',
    padding:10,
    width:70,
    height:70,
    alignItems: 'center'
  },
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
    backgroundColor:'white'
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
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#CFCFCF',
    width:'50%',
    backgroundColor:'white',
    marginTop: 20
  },
  orderNumber: {
    fontFamily: 'Cairo-Bold',
  }
}
