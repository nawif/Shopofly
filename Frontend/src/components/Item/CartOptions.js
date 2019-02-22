import React from 'react'
import { View, AsyncStorage } from 'react-native'
import { Circle, GradientButton } from '../'

export const CartOptions = ({ currentQuantity, onAddToCart }) => {
  const { container, cartOptionsStyle } = styles
  const size = 45

  return (
    <View style={container}>
      <View style={cartOptionsStyle}>

        <Circle text={currentQuantity} />

        <GradientButton
          borderRadius={size}
          width={'93%'}
          height={size}
          fontFamily={'Cairo-SemiBold'}
          label={'ADD TO CART'}
          isValid={true}
          onClick={onAddToCart}
        />

      </View>
    </View>
  )
}

const styles = {
  container:{
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  cartOptionsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
}
