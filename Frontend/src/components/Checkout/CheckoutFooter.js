import React from 'react'
import { View, Text } from 'react-native'

import { GradientButton } from '../'

const defaultButtonSize = 50

export const CheckoutFooter = ({ onPressHandler }) => {
  const { container } = styles

  return (
    <View style={container}>
      <GradientButton
        width={'90%'}
        borderRadius={defaultButtonSize}
        fontFamily={'Cairo-SemiBold'}
        label={'Place Order'}
        isValid={true}
        onClick={onPressHandler}
        align={null}
      />
    </View>
  )
}

const styles = {
  container: {
    height: 90,
    paddingTop: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: '#919191',
  }
}
