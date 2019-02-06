import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'

import { MySwiper, ItemInfo, ItemDetails, CartOptions } from '../components'
import * as API from '../API'

export default class Item extends Component {
	state = {
	}

	render() {
		const { container } = styles;

		return (
      <ScrollView style={container}>
				<MySwiper />

				<ItemInfo />

				<CartOptions currentQuantity={1} />

				<ItemDetails />
      </ScrollView>
		)
	}
}

const styles = {
	container: {
		width: '100%',
	  height: '100%',
	  flex: 1,
	  backgroundColor: 'white'
	}
}
