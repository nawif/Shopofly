import React from 'react'
import { View, Text } from 'react-native'

import { Devider } from './'

export const ItemDetails = (props) => {
  const { simpleContainer, rowStyle } = styles
  const item = {
    storeDetails: {
      store: 'Extra Store',
      warranty: '6 months',
    },
    description: '',
    specifications: [],
  }

  return (
    <View>
      <Devider />

      <View style={simpleContainer}>
        <View style={rowStyle}>
          <Text style={}>{item.storeDetails.store}</Text>
        </View>
      </View>

      <Devider height={1} />

      <View style={simpleContainer}>
        <View style={rowStyle}>
          <Text>{item.storeDetails.warranty}</Text>
        </View>
      </View>

      <Devider />
    </View>
  )
}

const styles = {
  simpleContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  rowStyle: {
    marginTop: '3%',
    marginBottom: '3%',
  }
}
