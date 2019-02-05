import React from 'react'
import { View } from 'react-native'
import { Circle, GradientButton } from './'

export const CartOptions = (props) => {
  const { cartOptionsStyle } = styles
  const size = 45

  return (
    <View style={cartOptionsStyle}>

      <Circle text={props.currentQuantity} size={size} />

      <GradientButton
        borderRadius={size}
        width={'93%'}
        height={size}
        fontFamily={'Cairo-Bold'}
        label={'ADD TO CART'}
      />

    </View>
  )
}

const styles = {
  cartOptionsStyle: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
}
