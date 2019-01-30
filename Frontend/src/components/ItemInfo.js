import React from 'react'
import {
  View,
  Text,
} from 'react-native'

 import { SaleBadge, ItemSpecs } from './'

const ItemInfo = ({}) => {
  const item = {
    seller:'Apple',
    title:'iPhone XS With FaceTime Space Gray 64GB 4G LTE',
    specification:{ dimensions:{width:'10',height:'10'} },
    price: '2,890.00' }

  const {
    container,
    sellerStyle,
    titleStyle,
    priceStyle,
    infoStyle,
    oldPriceStyle,
    saleStyle
  } = styles

  return (
    <View style={container}>
      <Text style={sellerStyle}>{item.seller}</Text>

      <Text style={titleStyle}>{item.title}</Text>

      <Text>TODO: Add rating/reviews here</Text>

      <Text style={priceStyle}>SAR {item.price} <Text style={infoStyle}>(inclusive of vat)</Text></Text>

      <View style={saleStyle}>
        <Text style={oldPriceStyle}>SAR {item.price}</Text>
        <SaleBadge percentage={22} marginLeft={'2%'}/>
      </View>

      <ItemSpecs />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center'
  },
  sellerStyle: {
    color: '#295ff2',
    fontSize: 12,
  },
  titleStyle: {
    color: 'black',
    fontSize: 17,
    marginTop: '2%',
    marginBottom: '1%',
    fontFamily: 'Roboto-Medium'
  },
  priceStyle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    marginTop: '2%'
  },
  infoStyle: {
    color: '#dddddd',
    fontSize: 12
  },
  saleStyle: {
    flexDirection: 'row',
    marginTop: '2%'
  },
  oldPriceStyle: {
    color: 'grey',
    fontSize: 12,
    fontFamily: 'Roboto-Light',
    textDecorationLine: 'line-through',
    marginTop: '1%',
  }
}

export { ItemInfo }
