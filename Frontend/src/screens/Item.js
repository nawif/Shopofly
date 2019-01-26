import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

import { Container, MySwiper, ItemContent } from '../components'
import * as API from '../API'

export default class Login extends Component {
	state = {
	}

	render() {
		const { images } = this.state

		return (
      <Container>
        <MySwiper
          images={images}
        />

				<ItemContent />
      </Container>
		)
	}
}
