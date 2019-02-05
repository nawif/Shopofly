import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

export default class MySwiper extends Component {
	state = {
	}

	render() {
		const {  } = this.state

    const { container, contentStyle, slide } = styles

		return (
      <Swiper style={container} containerStyle={contentStyle} height={'100%'}>
        <View style={slide}>
          <Text>I love the Swiper!</Text>
        </View>

        <View style={slide}>
          <Text>And I love many things!</Text>
        </View>

        <View style={slide}>
          <Text>Including .. idk..</Text>
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
		height: Dimensions.get('window').height/2.5
	},
  slide: {
    flex: 1,
    justifyContent: 'center'
  }
}
export { MySwiper }
