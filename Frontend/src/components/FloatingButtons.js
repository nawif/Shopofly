import React from 'react'
import { View } from 'react-native'

import { CircleImage } from './'

export const FloatingButtons = () => {
  const { floatingContainer } = styles

  return (
    <View style={floatingContainer}>
      <CircleImage
        image={require('../../assets/colored_star.png')}
      />

      <CircleImage
        image={require('../../assets/colored_share.png')}
      />
    </View>
  )
}

const styles = {
  floatingContainer: {
    position: 'absolute',
    top: 60,
    right: 20,
    alignSelf: 'flex-end',
    height: 100,
    justifyContent: 'space-between',
  }
}
