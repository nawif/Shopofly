import React, { Component } from 'react'
import { Text, View, Dimensions, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { LinearGradient } from 'expo'
import * as Global from '../Global'

const defaultDotSize = 10

const defaultSwiperWidth = Dimensions.get('window').width
const defaultSwiperHeight = Dimensions.get('window').height/2.5

export class MySwiper extends Component {
	render() {
		const { images } = this.props

    const { wrapper, container, contentStyle, imageStyle, dotStyle, activeDotStyle } = styles

		return (
      <Swiper
				style={wrapper}
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
				{ this.renderImages(images) }
      </Swiper>
		)
	}

	renderImages(images) {
		const { slide, image } = styles
		return (
      images.map(
        (imageUrl, index) => {
          return (
            <View key={index} style={slide}>
							<Image style={image} source={{uri: imageUrl}} />
            </View>
          )
        }
      )
    )
	}
}

const styles = {
	wrapper: {
	},
  container: {
    flex: 1,
  },
	contentStyle: {
		flex: 1,
		width: defaultSwiperWidth,
		height: defaultSwiperHeight,
	},
  slide: {
		flex: 1,
    justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: 'transparent',
  },
	image: {
		width: '60%',
		height: defaultSwiperHeight - 30,
		resizeMode: 'contain',
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
