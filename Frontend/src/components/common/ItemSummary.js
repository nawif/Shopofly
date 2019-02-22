import React from 'react'
import { View, Text, Image } from 'react-native'

import { defaultTextContainer } from '../../Styles'
import { ButtonWithRadius } from './ButtonWithRadius'
import images from '../../../assets/images'

export const ItemSummary = (props) => {
  const { container } = styles
  const { item } = props

  return (
    <View>
      <View style={[container, defaultTextContainer]}>
        { renderItemDetails(item) }
        { renderImage(item) }
      </View>
      { renderSuitableButtons(props) }
    </View>
  )
}

const renderSuitableButtons = (props) => {
  const { buttonsContainer, quantityStyle, numberStyle } = styles
  const { withQuantity, withAddToCart, withRemoveFromCart, item } = props
  return (
    <View style={[defaultTextContainer, buttonsContainer]}>
        {
          withQuantity ? (
            <Text style={quantityStyle}>Quantity:  <Text style={numberStyle}>{item.currentQuantity}</Text></Text>
          ) : null
        }
        {
          withAddToCart ? (
            <ButtonWithRadius icon={images.shoppingCartIcon} label='ADD TO CART' color='#A4A4A4' />
          ) : null
        }
        {
          withRemoveFromCart ? (
            <ButtonWithRadius icon={images.removeIcon} label='REMOVE' color='#D76B6B' />
          ) : null
        }
    </View>
  )
}

const renderImage = (item) => {
  const { rightStyle } = styles
  return (
    <View style={rightStyle}>
     <Image source={{uri: item.image}} style={{width: 90, resizeMode: 'contain', flex: 1}}/>
    </View>

  )
}

const renderItemDetails = (item) => {
  const {
    leftStyle,
    storeName,
    titleStyle,
    groupStyle,
    storeKeyStyle,
    storeValueStyle,
    priceStyle,
    muteStyle
  } = styles
  return (
    <View style={leftStyle}>
      <Text style={storeName}>{ item.summary.manufacturer }</Text>
      <Text style={titleStyle}>{ item.summary.itemName }</Text>

      <View style={groupStyle}>
        <Image
          style={{ width: 12, height: 12 }}
          source={require('../../../assets/store.png')}
        />
        <Text style={storeKeyStyle}>Sold by</Text>
        <Text style={storeValueStyle}>TODO: add soldBy here</Text>
      </View>

      <Text style={priceStyle}>SAR { item.summary.price } <Text style={muteStyle}>(Inclusive of VAT)</Text></Text>
    </View>

  )
}

const styles = {
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  buttonsContainer: {
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  storeName: {
    color: '#A1A1A1',
    fontSize: 12,
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
    fontSize: 14,
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
    fontSize: 12,
    color: '#A1A1A1',
    marginLeft: 5,
  },
  storeValueStyle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
    color: '#2B2B2B',
    marginLeft: 10,
  },
  priceStyle: {
   fontSize: 20,
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
