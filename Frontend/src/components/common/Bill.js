import React from 'react';
import { View, Text } from 'react-native';
import { defaultTextContainer } from '../../Styles'

const defaultPaddingSummary = 4

export const Bill = ({ subtotal, vatApprox, totalPrice }) => {
  const { billKey, billValue, totalStyle, billContainer } = styles

  return (
    <View style={[defaultTextContainer, billContainer]}>
      <View style={{flexDirection: 'row'}}>
        <Text style={billKey}>Subtotal</Text>
        <Text style={billValue}>SAR {subtotal}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={billKey}>Shipping Fee</Text>
        <Text style={billValue}>FREE</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={billKey}>VAT</Text>
        <Text style={billValue}>{vatApprox}</Text>
      </View>
      <View style={totalStyle}>
        <Text style={billKey}>TOTAL</Text>
        <Text style={billValue}>SAR {totalPrice}</Text>
      </View>
    </View>
  )
}

const styles = {
  billKey: {
    flex: 10,
    paddingBottom: defaultPaddingSummary,
    fontFamily: 'Cairo-SemiBold',
    fontSize: 14,
    color: '#2B2B2B'
  },
  billValue: {
    flex: 4,
    paddingBottom: defaultPaddingSummary,
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#2B2B2B'
  },
  totalStyle: {
    flexDirection: 'row',
    marginTop: 30,
  },
  billContainer: {
    marginTop: 15,
    marginBottom: 150,
  }
}
