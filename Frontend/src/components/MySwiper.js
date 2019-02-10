import React, { Component } from 'react'
import { Text, View, Dimensions, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { LinearGradient } from 'expo'
import * as Global from '../Global'

const defaultDotSize = 10

export default class MySwiper extends Component {
	state = {
	}

	render() {
		const {  } = this.state

    const { container, contentStyle, slide, imageStyle, dotStyle, activeDotStyle } = styles

		return (
      <Swiper
				style={container}
				containerStyle={contentStyle}
				dot={<View style={dotStyle} />}
				activeDot={
					<LinearGradient
						colors={[Global.FIRST_COLOR, Global.SECOND_COLOR]}
						start={[1.0, 0]}
						end={[0.0, 0]}
						style={activeDotStyle}
					/>
				}
				paginationStyle={{
            bottom: 0
				}}
			>
				<View style={slide}>
					<Image style={slide} source={{uri: 'http://d176tvmxv7v9ww.cloudfront.net/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xs-space-select-2018_av2_1_1.jpg'}} />
				</View>

				<View style={slide}>
					<Image source={{uri: 'https://cdn.rc-static.com/images/ProductImages/ScaleProducts/0320CV10_I2.jpg'}} />
				</View>
      </Swiper>
		)
	}
}

const styles = {
  container: {
    flex: 1,
  },
	contentStyle: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height/2.5,
	},
  slide: {
    flex: 1,
    alignSelf: 'center',
		width: '70%',
		height: '70%',
  },
	dotStyle: {
		backgroundColor:'rgba(0,0,0,.2)',
		width: defaultDotSize,
		height: defaultDotSize,
		borderRadius: defaultDotSize/2,
		marginLeft: 3,
		marginRight: 3,
		marginTop: 3,
		marginBottom: 3,
	},
	activeDotStyle: {
		width: defaultDotSize + 4,
		height: defaultDotSize + 4,
		borderRadius: (defaultDotSize + 4)/2,
		marginLeft: 3,
		marginRight: 3,
		marginTop: 3,
		marginBottom: 3,
	}
}
export { MySwiper }
