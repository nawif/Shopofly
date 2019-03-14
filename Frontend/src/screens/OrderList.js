import React, { Component } from 'react'
import { View, AsyncStorage, FlatList, TouchableOpacity } from 'react-native'
import { Devider } from '../components'
import { OrderDetails } from './';

export class OrderList extends Component {
  state = {
      orderList: [],
  }

  componentWillMount() {
    this.didFocusListener = this.props.navigation.addListener(
		  'didFocus',
		  () => { this.loadOrders() },
		)
  }

  loadOrders() {
    // TODO: get orders from backend instead of AsyncStorage
    AsyncStorage.getItem('orders')
    .then((orders) => {
      orders = JSON.parse(orders)

      this.setState({orderList: orders})
    })
    .catch((error) => console.log(error))
  }

  render() {
    const { orderList } = this.state
    const ordersCount = orderList ? orderList.length : 0

    return (
        <View style={{ flex: 1 }}>
          <FlatList
            data={orderList}
            keyExtractor={ (order, index) => index.toString()}
            renderItem={({order, index}) => (
                    <View key={index}>
                    <OrderDetails 
                    order={orderList[index]}
                    onPress={()=>{
                      this.props.navigation.navigate('OrderDetails')  
                    } }
                     />
                    { index != ordersCount-1 ?  <Devider height={20} /> : null }
                    </View>
              )
            }
          />
        </View>
    )
  }
}
