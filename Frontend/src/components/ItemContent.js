/* @flow weak */

import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import { ItemInfo } from './'

const ItemContent = ({}) => {
  const { container } = styles

  return (
    <View style={container}>
      <ItemInfo />
    </View>
  )

}

export { ItemContent }

const styles = {
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center'
  }
}
