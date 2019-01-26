import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

export default class MySwiper extends Component {
	state = {
	}

	render() {
		const {  } = this.state

    const { container, slide } = styles

		return (
      <Swiper height={'40%'}>
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
    height: '40%'
  },
  slide: {
    flex: 1,
    justifyContent: 'center'
  }
}
export { MySwiper }
