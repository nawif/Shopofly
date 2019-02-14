import React from 'react'
import { View, Text } from 'react-native'

import { GradientButton } from '../'

const defaultButtonSize = 50

export const CheckoutFooter = ({ onPressHandler }) => {
  const { container } = styles

  return (
    <View style={container}>
      <GradientButton
        fontFamily={'Cairo-SemiBold'}
        label={'Place Order'}
        isValid={true}
        onClick={onPressHandler}
      />
    </View>
  )
}

const styles = {
  container: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#919191',
  }
}
