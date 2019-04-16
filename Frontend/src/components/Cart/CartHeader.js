import React from 'react'
import { View, Text } from 'react-native'

import { GradientButton, Devider } from '../'

const defaultButtonSize = 50

export const CartHeader = ({ onPressHandler, isActive, totalPrice }) => {
  const { container, infoStyle, deviderStyle, totalContentStyle, totalPriceStyle, buttonStyle } = styles

  return (
    <View style={container}>
      <View style={infoStyle}>
        <View style={deviderStyle}>
          <Devider height={2}/>
        </View>

        <View style={totalContentStyle}>
          <Text style={totalPriceStyle}>Total:  <Text style={{color:'#22ACAD'}}>SAR {totalPrice}</Text></Text>
        </View>

        <View style={deviderStyle}>
          <Devider height={2}/>
        </View>
      </View>

      <View style={buttonStyle}>
        <GradientButton
          width={'90%'}
          borderRadius={defaultButtonSize}
          fontFamily={'Cairo-SemiBold'}
          label={'Checkout'}
          isValid={isActive}
          onClick={onPressHandler}
          align={null}
        />
      </View>
    </View>
  )
}

const styles = {
  container: {
    height: 140,
    paddingTop: 50,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#919191',
  },
  infoStyle: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviderStyle: {
    flex: 1,
  },
  totalContentStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  totalPriceStyle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
    color: '#535353',
    alignSelf: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  }
}
