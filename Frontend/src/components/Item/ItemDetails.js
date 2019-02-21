import React from 'react'
import { View, Text } from 'react-native'

import { Devider } from '../'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ItemDescription, ItemSpecifications } from './local'

const iconSize = 20

export const ItemDetails = (props) => {
  const {
    simpleContainer,
    iconStyle,
    storeKeyStyle,
    storeValueStyle,
    storeNameColor
  } = styles

  const item = {
    storeDetails: {
      store: 'Extra Store',
      warranty: '6 months',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    specifications: [
      { key: 'Key', value: 'Value'},
      { key: 'Key', value: 'Value'},
      { key: 'Key', value: 'Value'},
    ],
  }

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
          <Text style={[storeValueStyle, storeNameColor]}>{item.storeDetails.store}</Text>
        </View>

        <Devider height={1} />

        <View style={simpleContainer}>
          <Icon
            name={'verified-user'}
            size={iconSize}
            style={iconStyle}
          />
          <Text style={storeKeyStyle}>Warranty</Text>
          <Text style={storeValueStyle}>{item.storeDetails.warranty}</Text>
        </View>

      <Devider />

      <ItemDescription description={item.description}/>

      <Devider height={1}/>

      <ItemSpecifications specifications={item.specifications}/>

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
