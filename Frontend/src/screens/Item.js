import React, { Component } from 'react'
import { ScrollView, View, AsyncStorage } from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts'
import { SinglePickerMaterialDialog } from 'react-native-material-dialog'

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
		quantity: { label: '1', value: 1 },
		isStarred: false,
		currentQuantity: 1,
		showAlert: false,
		singlePickerVisible: false,
	}

	componentWillMount() {
		// Call it as async, to check the star status
		this.didFocusListener = this.props.navigation.addListener(
		  'didFocus',
		  () => { this.itemStarredCheck() },
		)
	}

  async itemStarredCheck() {
		// TODO: make state (finishedChecking) to make it safer
    AsyncStorage.getItem('starredItems')
  	.then((starredItems) => {
			const { key } = this.props.navigation.state.params.item

			let actuallyStarred = false

			starredItems = JSON.parse(starredItems)

			// Iterates through starred items to check whether current item is starred or not
			starredItems.forEach(function(item) {
				if(item.key === key) {
					// If item is not starred then star it, do nothing otherwise
					if(!this.state.isStarred) {
						this.setState({isStarred: true})
					}
					// Sets the flag as true if item is starred
					actuallyStarred = true
					return
				}
			})

			// If item is not actually starred and currently it is starred
			// then set it as not starred
			if(!actuallyStarred && this.state.isStarred) {
				this.setState({isStarred: false})
			}
    })
  	.catch((error) => console.log(error))
  }

	render() {
		const { container } = styles;
		const { item } = this.props.navigation.state.params
		const { currentQuantity, isStarred } = this.state

		return (
			<Container>
				<ScrollView style={container}>
					<FloatingButtons
						isStarred={isStarred}

						onStarPress={() => {
							console.log('Clicked Star')
							if(isStarred) {
								this.removeStarredItem(item)
							} else {
								this.addStarredItem(item)
							}
						}}

						onSharePress={() => {
							console.log('Clicked Share')
						}}
					/>

					<MySwiper images={item.images}/>

					<ItemInfo summary={item.summary}/>

					<CartOptions
						currentQuantity={this.state.quantity.value || currentQuantity}
						onPress={() => this.setState({ 
							singlePickerVisible: true, 
							currentQuantity: this.state.quantity.value
						})}
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
					<SinglePickerMaterialDialog
						title={'Choose quantity:'}
						items={[{ label: '1', value: 1 }, { label: '2', value: 2 },{ label: '3', value: 3},{ label: '4', value: 4},{ label: '5', value: 5}]}
						visible={this.state.singlePickerVisible}
						selectedItem={this.state.quantity}
						onCancel={() => this.setState({ singlePickerVisible: false })}
						onOk={result => {
							this.setState({ singlePickerVisible: false });
							this.setState({ quantity: result.selectedItem });
							this.setState({ currentQuantity: result.selectedItem.value })

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

	async removeStarredItem(item) {
		let starredItems = await AsyncStorage.getItem('starredItems')

		starredItems = JSON.parse(starredItems)

		if(starredItems && starredItems.length > 0) {
			starredItems.forEach(function(tempItem, index) {
				if(tempItem.key === item.key) {
					starredItems.splice(index, 1)
				}

				return
			})

			AsyncStorage.setItem('starredItems', JSON.stringify(starredItems))
			.then((starredItems) => {
				this.setState({ isStarred: false })
			})
			.catch((error) => console.log(error))
		}
	}

	addStarredItem(item) {
		const { currentQuantity } = this.state

		Utility.addItem({
			key: item.key,
			currentQuantity,
			summary: item.summary,
			image: item.images[0],
		}, 'starredItems', () => {
			this.setState({isStarred: true})
		})
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
