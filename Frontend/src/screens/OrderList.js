import React, { Component } from 'react'
import { View, AsyncStorage, FlatList, TouchableOpacity } from 'react-native'
import { Devider } from '../components'
import { OrderDetails } from './';
import * as API from '../API';

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
    AsyncStorage.getItem('token')
    .then((token) => {
      API.getListOfOrders(token)
      .then((res) => {
        const orderList = []

        for(let index in res) {
          const orderDetails = res[index]

          // console.log("Order #"+orderDetails["order_id"]);
          const transaction = orderDetails["transaction"]

          const deliveryStatus = transaction.status === "approved" ? "delivered" : "shipped"

          // Format the date
          let date = transaction["date"].split(" ")[0]
          date = new Date(date)
          const formattedDate = date.toDateString()

          const order = {
            orderId: orderDetails["order_id"],
            orderIssuedDate: `Placed On ${formattedDate}`,
            deliveryStatus: deliveryStatus,
            items: [],
          }

          for(let index in orderDetails.items) {
            let item = orderDetails.items[index]

            item = {
              key: item["key"],
              currentQuantity: item["quantity"],
              summary: {
                manufacturer: "Manufacturer",
                seller: item["supplier"]["supplierName"],
                itemName: item["itemName"],
                price: item["price"],
                quantity: 100,
                rating: 4.8,
                reviews_count: 69,
                primary_specifications: [
                  { specKey: 'key', specValue: 'value' },
                  { specKey: 'key', specValue: 'value' }
                ],
              },
              image: item["image_url"][0]
            }

            order.items.push(item)
          }


          orderList.push(order)
        }

        this.setState({ orderList })
      })
    })
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
                      this.props.navigation.navigate('OrderDetails', { order: orderList[index] })
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
