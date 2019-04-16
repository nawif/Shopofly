import React from 'react'
import { View, Text } from 'react-native'

import { Devider } from '../'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ItemDescription, ItemSpecifications } from './local'

const iconSize = 20

export const ItemDetails = ({ details }) => {
  const {
    simpleContainer,
    iconStyle,
    storeKeyStyle,
    storeValueStyle,
    storeNameColor
  } = styles

  const {
    supplierName,
    warranty,
    description,
    specifications,
  } = details

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
          <Text style={[storeValueStyle, storeNameColor]}>{supplierName}</Text>
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
