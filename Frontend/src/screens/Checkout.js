import React, { Component } from 'react';
import {
  View,
  Text,
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
  CheckoutFooter,
} from '../components'

import { VAT } from '../Global'
import { defaultTextContainer } from '../Styles'

const defaultPaddingSummary = 4

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
        { this.renderPlaceOrder() }
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
    const { billKey, billValue, totalStyle, billContainer } = styles
    const { subtotal, vatApprox, totalPrice } = this.state

    return (
      <View style={[defaultTextContainer, billContainer]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={billKey}>Subtotal</Text>
          <Text style={billValue}>SAR {subtotal}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={billKey}>Shipping Fee</Text>
          <Text style={billValue}>FREE</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={billKey}>VAT</Text>
          <Text style={billValue}>{vatApprox}</Text>
        </View>
        <View style={totalStyle}>
          <Text style={billKey}>TOTAL</Text>
          <Text style={billValue}>SAR {totalPrice}</Text>
        </View>
      </View>
    )
  }

  renderPlaceOrder() {
    return (
      <CheckoutFooter onPressHandler={() => console.log("Presses (Place Order)")} />
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
  billKey: {
    flex: 10,
    paddingBottom: defaultPaddingSummary,
    fontFamily: 'Cairo-SemiBold',
    fontSize: 14,
    color: '#2B2B2B'
  },
  billValue: {
    flex: 4,
    paddingBottom: defaultPaddingSummary,
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#2B2B2B'
  },
  totalStyle: {
    flexDirection: 'row',
    marginTop: 30,
  },
  billContainer: {
    marginTop: 15,
    marginBottom: 150,
  }
}
