import React, { Component } from 'react'
import { ScrollView, View, AsyncStorage } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts'

import {
	MySwiper,
	ItemInfo,
	ItemDetails,
	CartOptions,
	ItemReviews,
	FloatingButtons,
	Container,
} from '../components'

import * as API from '../API'
import * as Utility from '../Utility'

export class Item extends Component {
	state = {
		currentQuantity: 1,
		showAlert: false,
	}

	render() {
		const { container } = styles;
		const { item } = this.props.navigation.state.params
		const { currentQuantity } = this.state

		return (
			<Container>
				<ScrollView style={container}>
					<FloatingButtons />

					<MySwiper images={item.images}/>

					<ItemInfo summary={item.summary}/>

					<CartOptions
						currentQuantity={currentQuantity}
						onAddToCart={() => {
							Utility.addItem({
									key: item.key,
									summary: item.summary,
									currentQuantity,
									image: item.images[0],
								},
								'cart',
								(newCart) => {
									this.setState({showAlert: true})
								}
							)
						}}
					/>

					<ItemDetails details={item.details}/>

					<ItemReviews reviews={item.reviews}/>

					{
						// TODO: Put it in a View tag!
					}
				</ScrollView>

				{ this.renderAlert() }
			</Container>
		)
	}

	renderAlert() {
		return <AwesomeAlert
			show={this.state.showAlert}
			message={"Successfully added item to cart!"}
			closeOnTouchOutside={true}
			closeOnHardwareBackPress={true}
			showConfirmButton={true}
			confirmButtonColor="#448AFF"
			confirmText="Okay"
			onConfirmPressed={() => this.setState({showAlert: false})}
		/>
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
