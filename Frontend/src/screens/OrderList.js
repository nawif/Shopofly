import React, { Component } from 'react'
import { View, Text, ScrollView, AsyncStorage, FlatList  } from 'react-native' 
import { Devider } from '../components'
import { OrderDetails } from '../screens';

export class OrderList extends Component {
    state = { 
        orderList: [],
        subtotal: 0,
        vatApprox: 0,
        totalPrice: 0,
    }
    
    render() {
        const { orderList } = this.state
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={orderList}
                    keyExtractor={ (item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <View key={index}>
                            <OrderDetails item={item} />
                            { index != orderList.length-1 ?  <Devider height={20} /> : null }
                            <Divider/>
                        </View>
                        
                    )
                   
                    }

                />
            </View>
        )
    }
}
