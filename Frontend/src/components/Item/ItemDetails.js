import React from 'react'
import { View, Text } from 'react-native'

import { Devider } from '../'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ItemDescription, ItemSpecifications } from './local'

const iconSize = 20

export const ItemDetails = ({ item }) => {
  const {
    simpleContainer,
    iconStyle,
    storeKeyStyle,
    storeValueStyle,
    storeNameColor
  } = styles

  // TODO: add those to item json
  item.manufacturer = 'Great store'
  item.warranty = '6 months'
  item.specifications = [
    { key: 'Key', value: 'Value'},
    { key: 'Key', value: 'Value'},
    { key: 'Key', value: 'Value'},
  ]

  const {
    manufacturer,
    warranty,
    description,
    specifications,
  } = item

  return (
    <View>
      <Devider />

        <View style={simpleContainer}>
          <Icon
            name={'store'}
            size={iconSize}
            style={iconStyle}
          />
          <Text style={storeKeyStyle}>Sold by</Text>
          <Text style={[storeValueStyle, storeNameColor]}>{manufacturer}</Text>
        </View>

        <Devider height={1} />

        <View style={simpleContainer}>
          <Icon
            name={'verified-user'}
            size={iconSize}
            style={iconStyle}
          />
          <Text style={storeKeyStyle}>Warranty</Text>
          <Text style={storeValueStyle}>{warranty}</Text>
        </View>

      <Devider />

      <ItemDescription description={description}/>

      <Devider height={1}/>

      <ItemSpecifications specifications={specifications}/>

      <Devider />
    </View>
  )
}



const styles = {
  simpleContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  iconStyle: {
    color: '#A1A1A1',
    marginRight: '2%',
  },
  storeValueStyle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    alignSelf: 'center',
  },
  storeKeyStyle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 10,
    alignSelf: 'center',
    color: '#A1A1A1',
    width: '14%'
  },
  storeValueStyle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 10,
    color: '#2B2B2B',
  },
  storeNameColor: {
    color: '#3061E9'
  }
}
