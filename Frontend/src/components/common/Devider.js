import React from 'react'
import { View } from 'react-native'

export const Devider = (props) => {

  const devider = {
    height: props.height || 3,
    backgroundColor: '#F0F0F0',
  }

  if(props.marginTop) {
    devider.marginTop = props.marginTop
  }

  if(props.marginBottom) {
    devider.marginBottom = props.marginBottom
  }

  if(props.height) {
    devider.height = props.height
  }

  return (
    <View style={devider} />
  )
}
