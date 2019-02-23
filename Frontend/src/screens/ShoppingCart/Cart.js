import React, { Component } from 'react'
import { Text, View, ScrollView, AsyncStorage, FlatList } from 'react-native'
import { Container, GradientButton, Bill, DividerWithHeading, ItemSummary, Devider, CartHeader } from '../../components'

import * as Global from '../../Global'
import * as Utility from '../../Utility'

const headlineHeight = 65

export class Cart extends Component {
  state = {
    cart: [],
    subtotal: 0,
    vatApprox: 0,
    totalPrice: 0,
  }

  componentWillMount() {
    const item = {
      seller:'Apple',
      title:'iPhone XS With FaceTime Space Gray 64GB 4G LTE',
      price: '2890.00',
      storeDetails: {
        store: 'Extra Store',
      },
      quantity: 3,
      image: 'https://www.jagojet.com/media/catalog/product/cache/4/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/g/r/gray-1_2.png'
    }

    AsyncStorage.getItem('cart')
  	.then((cart) => {
      this.setState({ cart: JSON.parse(cart) })

      const { subtotal, vatApprox, totalPrice } = Utility.getBillInfo(items)

      this.setState({ cart: items, subtotal, vatApprox, totalPrice })

    })
  	.catch((error) => console.log(error))
  }

  render() {
    const { subtotal, vatApprox, totalPrice } = this.state

    return (
      <Container>
        <CartHeader
          onPressHandler={() => this.props.navigation.navigate('SelectAddress')}
          totalPrice={totalPrice}
        />

        <ScrollView>
          { this.renderItems() }
          <Devider />

          <Bill
            subtotal={subtotal}
            vatApprox={vatApprox}
            totalPrice={totalPrice}
          />
        </ScrollView>
      </Container>
    )
  }

  renderHeader() {
    return (
      <View>
        <View>
          <Text>TESTING!!!!</Text>
        </View>

        <GradientButton />
      </View>
    )
  }

  renderItems() {
    const { cart } = this.state

    return (
      <View style={{ flex: 1 }}>
          <DividerWithHeading label='My Cart' sublabel={cart.length + '  Items'} height={headlineHeight} />
          <FlatList
            data={cart}
            keyExtractor={ (item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View key={index}>
                <ItemSummary item={item} withQuantity withRemoveFromCart />
                { index != cart.length-1 ? <Devider /> : null }
              </View>
            )}
          />
      </View>
    )
  }

}


const styles ={
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#FFFFFF'
  },
}
