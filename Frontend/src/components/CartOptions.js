import React from 'react'
import { View } from 'react-native'
import { Circle, GradientButton } from './'

export const CartOptions = (props) => {
  const { container, cartOptionsStyle } = styles
  const size = 45

  return (
    <View style={container}>
      <View style={cartOptionsStyle}>

        <Circle text={props.currentQuantity} size={size} />

        <GradientButton
          borderRadius={size}
          width={'93%'}
          height={size}
          fontFamily={'Cairo-SemiBold'}
          label={'ADD TO CART'}
          isValid={true}
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
