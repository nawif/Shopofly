import React from 'react'
import { View } from 'react-native'
import * as styles from '../../Styles'

const Container = (props) => {
  const { container } = styles

  return (
    <View style={container}>
      { props.children }
    </View>
  )
}

export { Container }
