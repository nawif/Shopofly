import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import {
  SaleBadge,
  CoreItemSpecs,
} from '../'

export const ItemInfo = ({ summary }) => {
  const {
    manufacturer,
    itemName,
    price,
    rating,
    reviews_count,
    primary_specifications,
  } = summary

  const {
    container,
    sellerStyle,
    itemNameStyle,
    reviewStyle,
    ratingStyle,
    reviewCountStyle,
    priceStyle,
    infoStyle,
    oldPriceStyle,
    saleStyle,
    cartOptionsStyle
  } = styles

  return (
    <View style={container}>
      <Text style={sellerStyle}>{manufacturer}</Text>

      <Text style={itemNameStyle}>{itemName}</Text>

      <View style={reviewStyle}>
        <Image
          source={require('../../../assets/star.png')}
        />
        <Text style={ratingStyle}>{rating}</Text>
        <Text style={reviewCountStyle}>{reviews_count} reviews</Text>
      </View>

      <Text style={priceStyle}>SAR {price.substring(1, price.length)} <Text style={infoStyle}>(inclusive of vat)</Text></Text>

      <View style={saleStyle}>
        <Text style={oldPriceStyle}>SAR {price}</Text>
        <SaleBadge percentage={22} marginLeft={'2%'}/>
      </View>

      <CoreItemSpecs specs={primary_specifications} />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    width: '90%',
    height: 220,
    alignSelf: 'center',
    marginBottom: '5%'
  },
  sellerStyle: {
    color: '#3061E9',
    fontSize: 12,
  },
  itemNameStyle: {
    color: 'black',
    fontSize: 16,
    marginTop: '2%',
    marginBottom: '1%',
    fontFamily: 'Cairo-Bold'
  },
  reviewStyle: {
    marginTop: '1%',
    marginBottom: '1%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingStyle: {
    marginLeft: '1%',
    fontSize: 10,
    fontFamily: 'Cairo-Bold',
    color: '#F3C60B'
  },
  reviewCountStyle: {
    marginLeft: '1%',
    fontSize: 10,
    color: '#A1A1A1',
    fontFamily: 'Cairo-Bold'
  },
  priceStyle: {
    fontSize: 20,
    fontFamily: 'Cairo-Bold',
  },
  infoStyle: {
    color: '#CFCFCF',
    fontSize: 9,
    fontFamily: 'Cairo-Bold'
  },
  saleStyle: {
    flexDirection: 'row',
    marginTop: '1%'
  },
  oldPriceStyle: {
    color: '#A1A1A1',
    fontSize: 12,
    fontFamily: 'Cairo-SemiBold',
    textDecorationLine: 'line-through',
  },
}
