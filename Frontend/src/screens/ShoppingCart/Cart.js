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
    this.didFocusListener = this.props.navigation.addListener(
		  'didFocus',
		  () => { this.loadItems() },
		)
  }

  loadItems() {
    AsyncStorage.getItem('cart')
  	.then((cart) => {
      const items = JSON.parse(cart)
      const { subtotal, vatApprox, totalPrice } = Utility.getBillInfo(items)
      console.log(subtotal, vatApprox, totalPrice)

      this.setState({ cart: items, subtotal, vatApprox, totalPrice })
    })
  	.catch((error) => console.log(error))
  }

  render() {
    const { cart, subtotal, vatApprox, totalPrice } = this.state
    const { cartEmptyStyle } = styles

    const itemCount = cart ? cart.length : 0

    return (
      <Container>
        <CartHeader
          onPressHandler={() => this.props.navigation.navigate('SelectAddress')}
          isActive={itemCount > 0}
          totalPrice={totalPrice}
        />

        <ScrollView>
          { this.renderItems() }
          <Devider />

          { itemCount > 0 ? (
            <Bill
              subtotal={subtotal}
              vatApprox={vatApprox}
              totalPrice={totalPrice}
            />
          ) : (
            <Text style={cartEmptyStyle}>Your cart is empty.</Text>
          )}
        </ScrollView>
      </Container>
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
                <ItemSummary
                  item={item}
                  withQuantity
                  withRemoveFromCart
                  onRemovePress={() => {
                    Utility.removeItem(index, 'cart', (newCart) => {
                      const { subtotal, vatApprox, totalPrice } = Utility.getBillInfo(newCart)
                      this.setState({cart: newCart, subtotal, vatApprox, totalPrice})
                    })
                  }}
                />
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
  cartEmptyStyle: {
    alignSelf: 'center',
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    marginTop: 50,
  }
}
