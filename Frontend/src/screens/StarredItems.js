import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { DividerWithHeading, ItemSummary, Devider } from '../components'

export class StarredItems extends Component {
    state = { starredItems: [] }

    componentDidMount() {
        this.loadItems()
    }

    loadItems() {
        const item = {
            seller:'Apple',
            title:'iPhone XS With FaceTime Space Gray 64GB 4G LTE',
            price: '2,890.00',
            storeDetails: {
            store: 'Extra Store',
            },
            quantity: 3,
            image: 'https://www.jagojet.com/media/catalog/product/cache/4/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/g/r/gray-1_2.png'
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
