import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  AsyncStorage,
  FlatList,
} from 'react-native';

import * as Global from '../../Global'

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
    selectedAddress: null,
  }

  componentWillMount() {
    this.loadItems()

    // TODO: make sure that the prop is this.props.navigation.state.params.selectedAddress
    const { selectedAddress } = {
      selectedAddress: {
        title: 'Home',
        address: '4043 Galg, Alwadi',
        phone: '+966535352775',
        name: 'Abdulmajeed Alomari',
      }
    }

    this.setState({ selectedAddress })
  }

  render() {
    const { radioGroup } = styles

    const {
      selectedAddress,
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

    return (
      <View style={{ flex: 1 }}>
          <DividerWithHeading label='Order Summary' sublabel={cart.length + '  Items'} height={headlineHeight} />
          <FlatList
            data={cart}
            keyExtractor={ (item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View key={index}>
                <ItemSummary item={item} withQuantity />
                { index != cart.length-1 ? <Devider /> : null }
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
      // TODO: uncomment this
      // this.setState({ cart: JSON.parse(cart) })
      this.setState({ cart: [
        item,
        item,
        item
      ]})
      this.loadPriceInfo()
    })
  	.catch((error) => console.log(error))
  }

  loadPriceInfo() {
    const subtotal = this.getSubtotal()
    const vatApprox = this.getVatApprox(subtotal)
    const totalPrice = subtotal + vatApprox

    this.setState({ subtotal, vatApprox, totalPrice })
  }

  getSubtotal() {
    let subtotal = 0

    for (let item of this.state.cart) {
      if (item.price) {
         subtotal = subtotal + parseInt(item.price) * parseInt(item.quantity)
      }
    }

    return subtotal
  }

  getVatApprox(subtotal) {
    let vatApprox = Global.VAT * subtotal
    vatApprox = Math.round(vatApprox * 100) / 100
    return vatApprox
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
