import React, { Component } from 'react';
import {
  View,
  ScrollView,
  AsyncStorage,
} from 'react-native';

import * as Global from '../Global'

import {
  Container,
  Headline,
  Radio,
  Devider,
  AddressBox,
  ItemSummary,
} from '../components'

import { VAT } from '../Global'
import { defaultTextContainer } from '../Styles'

export class Checkout extends Component {
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
          <Headline text={'Payment Method'} />

          <Radio label={'Pay With Credit Card'} isSelected={isCreditCard}/>
          <Devider height={1} />
          <Radio label={'Payofly - Pay On Delivery'} isSelected={isPayofly}/>

          <Headline text={'Deliver To'} />
          <AddressBox
            canBeSelected={false}
            title={selectedAddress.title}
            address={selectedAddress.address}
            phone={selectedAddress.phone}
            name={selectedAddress.name}
            hasOptions={false}
            isSelected={false}
          />

          <Headline text={'Order Summary'} />

          { cart ? this.renderItems() : null }

          { this.renderBill() }
        </ScrollView>
      </Container>
    )
  }

  renderItems() {
    return (
      this.state.cart.map(
        (item, index) => {
          return (
            <View key={index}>
              <ItemSummary item={item} withQuantity={true} />
              <Devider />
            </View>
          )
        }
      )
    )
  }

  renderBill() {
    return (
      <View>

      </View>
    )
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
         subtotal = subtotal + parseInt(item.price.substring(1)) * parseInt(item.quantity)
      }
    }

    return subtotal
  }

  getVatApprox(subtotal) {
    let vatApprox = Global.vat * subtotal
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
