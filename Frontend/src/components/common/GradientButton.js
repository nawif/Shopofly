import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native'
import { LinearGradient } from 'expo';
import * as Global from '../../Global'

const GradientButton = (props) => {
	const { mainContainer } = styles

	const containerStyles = {
		width: props.width || '80%',
		height: props.height || 50,
		opacity: props.isValid ? 1.0 : 0.7
	}

  const gradientStyles = {
		alignSelf: props.align || 'center',
		justifyContent: 'center',
		borderRadius: props.borderRadius || 10,
		width: '100%',
		height: '100%'
  }

	const labelStyle = {
		alignSelf: 'center',
		fontFamily: props.fontFamily || 'Roboto-Medium',
		color: props.labelColor || 'white',
		fontSize: 20,
		paddingTop: props.padding || null,
		paddingBottom: props.padding || null,
	}

	const firstColor = props.firstColor || Global.FIRST_COLOR
	const secondColor = props.secondColor || Global.SECOND_COLOR

	return (
		<View style={mainContainer}>
			<TouchableOpacity
				onPress={props.onClick}
				disabled={!props.isValid}
				style={containerStyles}
	    >
	      {
					props.isLoading ? <ActivityIndicator
															color={'white'}
														/> : <LinearGradient
															colors={[firstColor, secondColor]}
															start={[1.0, 0]}
															end={[0.0, 0]}
															style={gradientStyles}
														>
															<Text style={labelStyle}>{ props.label }</Text>
														</LinearGradient>
				}
	    </TouchableOpacity>
		</View>
	)
}

const styles = {
	mainContainer: {
		flex:1,
    justifyContent: 'center',
    alignItems: 'center'
	}
}

export { GradientButton }
