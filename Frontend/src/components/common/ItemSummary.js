import React from 'react'
import { View, Text, Image } from 'react-native'

import { defaultTextContainer } from '../../Styles'

export const ItemSummary = ({ item, withQuantity }) => {
  const {
    container,
    leftStyle,
    rightStyle,
    storeName,
    titleStyle,
    muteStyle,
    groupStyle,
    groupInlineStyle,
    storeKeyStyle,
    storeValueStyle,
    priceStyle,
    quantityStyle,
    numberStyle,
  } = styles

  return (
    <View style={[container, defaultTextContainer]}>
      <View style={leftStyle}>
        <Text style={storeName}>{ item.seller }</Text>
        <Text style={titleStyle}>{ item.title }</Text>

        <View style={groupStyle}>
          <Image
            source={require('../../../assets/store.png')}
          />
          <Text style={storeKeyStyle}>Sold by</Text>
          <Text style={storeValueStyle}>{item.storeDetails.store}</Text>
        </View>

        <Text style={priceStyle}>SAR { item.price } <Text style={muteStyle}>(inclusive of vat)</Text></Text>

        { withQuantity ? (
            <Text style={quantityStyle}>Quantity:  <Text style={numberStyle}>{item.quantity}</Text></Text>
          ) : null
        }
      </View>

      <View style={rightStyle}>
        <Image source={{uri: item.image}} style={{width: 90, resizeMode: 'contain', flex: 1}}/>
      </View>
    </View>
  )
}

const styles = {
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  storeName: {
    color: '#A1A1A1',
    fontSize: 10,
    fontFamily: 'Cairo-SemiBold',
    paddingTop: 5,
    paddingBottom: 5,
  },
  leftStyle: {
    flex: 3,
  },
  rightStyle: {
    flex: 1,
  },
  muteStyle: {
    color: '#CFCFCF',
    fontSize: 9,
    fontFamily: 'Cairo-Bold',
  },
  titleStyle: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Cairo-Bold',
  },
  groupStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupInlineStyle: {
    flexDirection: 'row',
  },
  storeKeyStyle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 10,
    color: '#A1A1A1',
    marginLeft: 5,
  },
  storeValueStyle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 10,
    color: '#2B2B2B',
    marginLeft: 10,
  },
  priceStyle: {
   fontSize: 18,
   fontFamily: 'Cairo-Bold',
 },
 quantityStyle: {
   color: '#A1A1A1',
   fontFamily: 'Cairo-SemiBold',
   fontSize: 12,
 },
 numberStyle: {
   color: '#2B2B2B',
   fontFamily: 'Cairo-Bold',
   fontSize: 12,
 },
}
