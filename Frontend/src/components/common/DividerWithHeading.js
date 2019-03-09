import React from 'react'
import { View, Text } from 'react-native'
import { PRIMARY_COLOR } from '../../Global';
import { ButtonWithRadius } from '../'
import images from '../../../assets/images'

export const DividerWithHeading = (props) => {
  const { withEdit } = props
  const backgroundStyles = {
    height: props.height || 70,
    backgroundColor: '#F0F0F0',
    alignItems: 'flex-end',
    width: '100%',
    paddingLeft: 20,
    paddingBottom: 10,
    flexDirection: 'row'
  }

  const textStyle = {
    fontFamily: 'Cairo-Bold',
    fontSize: props.fontSize || 24,
    color: props.color || PRIMARY_COLOR,
  }

  const subtextStyle = {
    fontFamily: 'Cairo-SemiBold',
    fontSize: 12,
    color: PRIMARY_COLOR,
    paddingBottom: 5,
    paddingLeft: 10
  }

  return (
    <View style={backgroundStyles}>
        <Text style={textStyle}>{ props.label }</Text>
        <Text style={subtextStyle}>{ props.sublabel }</Text>
        { 
          withEdit ?(
            <ButtonWithRadius
              label='Edit'
              color='#3061E9'
              onPress={props.onRemovePress}
              borderColor={'#F0F0F0'}
              paddingTop={0}
              paddingBottom={0.5}
              marginLeft={'40%'}
            />
          ) : null
           }
    </View>
  )
}
