import React, { Component } from 'react'
import { Text, View, Dimensions, Image } from 'react-native'
import Swiper from 'react-native-swiper'

export default class MySwiper extends Component {
	state = {
	}

	render() {
		const {  } = this.state

    const { container, contentStyle, slide, imageStyle } = styles

		return (
      <Swiper style={container} containerStyle={contentStyle}>
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
}
export { MySwiper }
