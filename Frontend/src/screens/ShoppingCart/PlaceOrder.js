import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  AsyncStorage,
  FlatList,
} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

import * as Utility from '../../Utility'
import * as API from '../../API'

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
    showAlert: false,
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

        <AwesomeAlert
          show={this.state.showAlert}
          title={"Error"}
          message={"Unfortunately, one or more of the items you ordered are not available currently."}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={true}
          showConfirmButton={true}
          confirmButtonColor="#448AFF"
          confirmText="Okay"
          onConfirmPressed={() => this.hideError()}
          messageStyle={{ textAlign: 'left' }}
        />
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
    const { cart } = this.state
    const { selectedAddress } = this.props.navigation.state.params

    return (
      <PlaceOrderFooter onPressHandler={() =>{
        const myOrder = {
          items: [],
          address_id: selectedAddress.id
        }

        cart.forEach(function(item) {
          myOrder.items.push({
            id: item.key,
            quantity: item.currentQuantity,
          })
        })

        AsyncStorage.getItem('token')
        .then((token) => {
          API.checkout(token, myOrder)
          .then((response) => {
            AsyncStorage.setItem('cart', JSON.stringify([]))
            this.props.navigation.navigate('OrderConfirmation', { orderNumber: `#${response.orderNumber}` })
          })
          .catch((err) => {
            debugger;
            if(err) {
              this.showError()
            }
          })
        })
      }} />
    )
  }

  loadItems() {
    AsyncStorage.getItem('cart')
  	.then((cart) => {
      cart = JSON.parse(cart)
      const { subtotal, vatApprox, totalPrice } = Utility.getBillInfo(cart)

      this.setState({ cart, subtotal, vatApprox, totalPrice })
    })
  	.catch((error) => console.log(error))
  }

  showError() {
    this.setState({
      showAlert: true,
    })
  }

  hideError() {
    this.setState({
      showAlert: false,
    })
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
