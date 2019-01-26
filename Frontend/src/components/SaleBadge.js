/* @flow weak */

import React from 'react';
import {
  View,
  Text
} from 'react-native';

const SaleBadge = ({}) => {
  const { container } = styles

  return (
    <View style={container}>
      <Text>%22 SALE</Text>
    </View>
  )
}

export { SaleBadge }

const styles = {
  container: {

  }
}
