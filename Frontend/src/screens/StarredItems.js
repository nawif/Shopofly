import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { DividerWithHeading, ItemSummary, Devider } from '../components'

export class StarredItems extends Component {
    state = { starredItems: [] }

    componentDidMount() {
        this.loadItems()
    }

    loadItems() {
      // TODO: load starredItems from AsyncStorage
      const item = {
        key: 'response.key',
        summary: {
          manufacturer: 'response.supplier.supplierName',
          itemName: 'response.itemName',
          price: 'response.price',
          quantity: 'response.quantity',
          rating: 4.8,
          reviews_count: 69,
          primary_specifications: [
            { specKey: 'Color', specValue: 'Black' },
            { specKey: 'Size', specValue: '64 GB'}
          ],
        },
        details: {
          description: 'response.description',
          supplierName: 'Great store',
          warranty: '6 months',
          specifications: [
            { key: 'Key', value: 'Value'},
            { key: 'Key', value: 'Value'},
            { key: 'Key', value: 'Value'},
          ],
        },
        reviews: [
          {
            reviewer: 'Osama Aloqaily',
            rating: 4.8,
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '27 jan 2019'
          },
          {
            reviewer: 'Nawaf Alquaid',
            rating: 4.7,
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '27 jan 2019'
          },
          {
            reviewer: 'Osama Aloqaily',
            rating: 4.8,
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '27 jan 2019'
          }
        ],
        images: ['https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-x/space-gray/device-front.png.transform/pdpCarousel/image.jpg'],
      }

        this.setState({ starredItems: [item, item, item] })
    }


    render() {
        const { starredItems } = this.state

        return (
            <View style={{ flex: 1 }}>
                <DividerWithHeading label='Starred Items' sublabel={starredItems.length + '  Items'} height={100} />
                <FlatList
                    data={starredItems}
                    keyExtractor={ (item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <View key={index}>
                            <ItemSummary item={item} withAddToCart withRemoveFromCart />
                            { index != starredItems.length-1 ? <Devider /> : null }
                        </View>
                    )

                    }
                />
            </View>
        )
    }
}
