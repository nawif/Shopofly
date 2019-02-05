import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { GradientButton } from './'

export const ClickablesSection = (props) => {
  const { container, anchor, anchorText, boldText } = styles

  const submitButton = {
    marginTop: props.marginTop || '20%',
    marginBottom: '11%'
  }

	return (
    <View style={container}>
      <View style={submitButton}>
        <GradientButton
          label={props.label}
          onClick={props.onClick}
          isLoading={props.isLoading}
          isValid={props.isValid}
        />
      </View>

      <TouchableOpacity style={anchor} onPress={props.onPress}>
        <Text style={anchorText}>{props.anchorText} <Text style={boldText}>{props.anchorHook}</Text></Text>
      </TouchableOpacity>
    </View>
	)
}

const styles = {
  container: {
    height: '30%',
    alignContent: 'center'
  },
  anchor: {
    alignItems: 'center',
    height: 50,
		justifyContent: 'center',
		marginTop: '4%'
  },
  anchorText: {
    color: 'white',
    fontFamily: 'Roboto-Light',
    opacity: 1,
    fontSize: 15,
    alignSelf: 'center'
  },
  boldText: {
    fontFamily: 'Roboto-Bold',
  }
}