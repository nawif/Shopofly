import React, { Component } from 'react'
import { View, FlatList, AsyncStorage } from 'react-native'
import { DividerWithHeading, ItemSummary, Devider } from '../components'
import AwesomeAlert from 'react-native-awesome-alerts'

import * as Utility from '../Utility'

export class StarredItems extends Component {
    state = { starredItems: [], showAlert: false }

    componentWillMount() {
      this.didFocusListener = this.props.navigation.addListener(
        'didFocus',
        () => { this.loadItems() },
      )
    }

    loadItems() {
      AsyncStorage.getItem('starredItems')
      .then((starredItems) => {
        const items = JSON.parse(starredItems)
        this.setState({starredItems: items})
      })
    }


    render() {
        const { starredItems } = this.state
        const itemCount = starredItems ? starredItems.length : 0

        return (
            <View style={{ flex: 1 }}>
                <DividerWithHeading label='Starred Items' sublabel={itemCount + '  Items'} height={100} />
                <FlatList
                    data={starredItems}
                    keyExtractor={ (item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <View key={index}>
                            <ItemSummary item={item}
                              withAddToCart
                              withRemoveFromCart

                              onAddPress={() => {
                                Utility.addItem(item, 'cart', (newCart) => {
                                  this.setState({showAlert: true})
                                })
                              }}

                              onRemovePress={() => {
                                Utility.removeItem(index, 'starredItems', (newStarredItems) => {
                                  this.setState({starredItems: newStarredItems})
                                })
                              }}
                            />
                            { index != itemCount-1 ? <Devider /> : null }
                        </View>
                    )

                    }
                />
                { this.renderAlert() }
            </View>
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
