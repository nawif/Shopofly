import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  AsyncStorage,
  FlatList,
} from 'react-native';

import * as Utility from '../../Utility'
import {
  Container,
  DividerWithHeading,
  Radio,
  Devider,
  AddressBox,
  ItemSummary,
  Bill,
  PlaceOrderFooter,
} from '../../components'

import { defaultTextContainer } from '../../Styles'

const headlineHeight = 65

export class PlaceOrder extends Component {
  state = {
    cart: [],
    subtotal: 0,
    vatApprox: 0,
    totalPrice: 0,
    selectedPayment: 'payofly',
  }

  componentWillMount() {
    this.loadItems()
  }

  render() {
    const { radioGroup } = styles
    const { selectedAddress } = this.props.navigation.state.params

    const {
      cart,
    } = this.state

    const isCreditCard =  this.state.selectedPayment == 'credit' ? true : false
    const isPayofly = this.state.selectedPayment == 'payofly' ? true : false

    return (
      <Container>
        <ScrollView>
          <DividerWithHeading label={'Payment Method'} height={headlineHeight} />

          <Radio
            label={'Pay With Credit Card'}
            isSelected={isCreditCard}
            onPressHandler={ () => {
              this.setState({selectedPayment: 'credit'})
            }}
          />
          <Devider height={1} />
          <Radio
            label={'Payofly - Pay On Delivery'}
            isSelected={isPayofly}
            onPressHandler={ () => {
              this.setState({selectedPayment: 'payofly'})
            }}
          />

          <DividerWithHeading label={'Deliver To'} height={headlineHeight} />
          <AddressBox
            canBeSelected={false}
            item={selectedAddress}
            title={selectedAddress.title}
            address={selectedAddress.address}
            phone={selectedAddress.phone}
            name={selectedAddress.name}
            hasOptions={false}
            isSelected={false}
          />

          { cart ? this.renderItems() : null }
          <Devider />

          { this.renderBill() }

        </ScrollView>
        { this.renderPlaceOrder() }
      </Container>
    )
  }

  renderItems() {
    const { cart } = this.state

    const itemCount = cart ? cart.length : 0

    return (
      <View style={{ flex: 1 }}>
          <DividerWithHeading label='Order Summary' sublabel={itemCount + '  Items'} height={headlineHeight} />
          <FlatList
            data={cart}
            keyExtractor={ (item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View key={index}>
                <ItemSummary item={item} withQuantity />
                { index != itemCount-1 ? <Devider /> : null }
              </View>
            )}
          />
      </View>
    )
  }

  renderBill() {
    const { billKey, billValue, totalStyle, billContainer } = styles
    const { subtotal, vatApprox, totalPrice } = this.state

    return (
      <Bill
        subtotal={subtotal}
        vatApprox={vatApprox}
        totalPrice={totalPrice}
      />
    )
  }

  renderPlaceOrder() {
    return (
      <PlaceOrderFooter onPressHandler={() => console.log("Presses (Place Order)")} />
    )
  }

  loadItems() {
    AsyncStorage.getItem('cart')
  	.then((cart) => {
      cart = JSON.parse(cart)
      const { subtotal, vatApprox, totalPrice } = Utility.getBillInfo(cart)

      console.log("LENGTH OF CART IN PLACEORDER: " + cart.length);
      this.setState({ cart, subtotal, vatApprox, totalPrice })
    })
  	.catch((error) => console.log(error))
  }
}

const styles = {
  radioGroup: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
}
