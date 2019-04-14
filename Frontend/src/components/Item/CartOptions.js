import React from 'react'
import { View, AsyncStorage, TouchableOpacity } from 'react-native'
import { Circle, GradientButton } from '../'
import { SinglePickerMaterialDialog } from 'react-native-material-dialog'

export const CartOptions = ({ currentQuantity, onAddToCart, onPress }) => {
  const { container, cartOptionsStyle } = styles
  const size = 45
  
  this.state = { currentQuantity: currentQuantity }
  
  return (
    <View style={container}>
      <View style={cartOptionsStyle}>

      <TouchableOpacity
         style={styles.button}
         onPress={onPress}
       >
        <Circle text={currentQuantity} />
        </TouchableOpacity>
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
