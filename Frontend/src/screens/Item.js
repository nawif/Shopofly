import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

import { Container, MySwiper, ItemInfo } from '../components'
import * as API from '../API'

export default class Item extends Component {
	state = {
	}

	render() {
		return (
      <Container>
				<MySwiper
				/>

				<ItemInfo />
      </Container>
		)
	}
}
