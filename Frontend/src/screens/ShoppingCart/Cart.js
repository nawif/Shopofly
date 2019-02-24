import React, { Component } from 'react'
import { Text, View, ScrollView, AsyncStorage, FlatList } from 'react-native'
import { Container, GradientButton, Bill, DividerWithHeading, ItemSummary, Devider, CartHeader } from '../../components'

import * as Global from '../../Global'

const headlineHeight = 65

export class Cart extends Component {
  state = {
    cart: [],
    subtotal: 0,
    vatApprox: 0,
    totalPrice: 0,
  }

  componentWillMount() {

    AsyncStorage.getItem('cart')
  	.then((cart) => {
      this.setState({ cart: JSON.parse(cart) })

      const { subtotal, vatApprox, totalPrice } = Global.getBillInfo(items)

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
    const itemCount = cart ? cart.length : 0

    return (
      <View style={{ flex: 1 }}>
          <DividerWithHeading label='My Cart' sublabel={itemCount + '  Items'} height={headlineHeight} />
          <FlatList
            data={cart}
            keyExtractor={ (item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View key={index}>
                <ItemSummary item={item} withQuantity withRemoveFromCart />
                { index != itemCount-1 ? <Devider /> : null }
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
