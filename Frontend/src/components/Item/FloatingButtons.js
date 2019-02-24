import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { CircleImage } from '../'

export const FloatingButtons = (props) => {
  const { floatingContainer } = styles

  return (
    <View style={floatingContainer}>
      <TouchableOpacity onPress={props.onStarPress}>
        { props.isStarred ?
          (
            <CircleImage
              image={require('../../../assets/active_colored_star.png')}
            />
          ) : (
            <CircleImage
              image={require('../../../assets/colored_star.png')}
            />
          )
        }
      </TouchableOpacity>

      <TouchableOpacity onPress={props.onSharePress}>
        <CircleImage
          image={require('../../../assets/colored_share.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  floatingContainer: {
    zIndex: 1,
    position: 'absolute',
    top: 35,
    right: 20,
    alignSelf: 'flex-end',
    height: 100,
    justifyContent: 'space-between',
  }
}
