import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import {
  SaleBadge,
  CoreItemSpecs,
} from './'

export const ItemInfo = ({}) => {
  const item = {
    seller:'Apple',
    title:'iPhone XS With FaceTime Space Gray 64GB 4G LTE',
    rating: 4.8,
    reviews: 4,
    specification:{ dimensions:{width:'10',height:'10'} },
    price: '2,890.00',
    coreItemSpecs: [
      { specKey: 'Color', specValue: 'Black' },
      { specKey: 'Size', specValue: '64 GB'}
    ]
  }

  const {
    container,
    sellerStyle,
    titleStyle,
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
      <Text style={sellerStyle}>{item.seller}</Text>

      <Text style={titleStyle}>{item.title}</Text>

      <View style={reviewStyle}>
        <Image
          source={require('../../assets/star.png')}
        />
        <Text style={ratingStyle}>{item.rating}</Text>
        <Text style={reviewCountStyle}>{item.reviews} reviews</Text>
      </View>

      <Text style={priceStyle}>SAR {item.price} <Text style={infoStyle}>(inclusive of vat)</Text></Text>

      <View style={saleStyle}>
        <Text style={oldPriceStyle}>SAR {item.price}</Text>
        <SaleBadge percentage={22} marginLeft={'2%'}/>
      </View>

      <CoreItemSpecs specs={item.coreItemSpecs} />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    // width: '90%',
    height: '100%',
    alignSelf: 'center',
    marginBottom: '5%'
  },
  sellerStyle: {
    color: '#3061E9',
    fontSize: 12,
  },
  titleStyle: {
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
