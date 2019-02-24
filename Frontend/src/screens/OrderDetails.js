import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  AsyncStorage
} from 'react-native';

import * as Global from '../Global'

import {
  Container,
  Devider,
  ItemSummary,
} from '../components'

import { defaultTextContainer } from '../Styles'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { OrderList } from './OrderList';

const defaultPaddingSummary = 4

export class OrderDetails extends Component {

  render() {
    const {
      storeKeyStyle,
      orderId,
      simpleContainer,
      orderIssuedDate,
    } = styles

    const { order } = this.props

    return (
      <Container>
          <View style={simpleContainer}>
                <Image source={require('../../assets/images/Account/shopping-bag.png')}/>
                <Text style={storeKeyStyle}>Order
                <Text style={ orderId }>{order.orderId}</Text>
                </Text>
                <Text style={ orderIssuedDate }>{order.orderIssuedDate}</Text>
          </View>
          <Devider height={1} />
          <View style={simpleContainer}>
                <Image source={require('../../assets/images/Account/box.png')}/>
                <Text style={storeKeyStyle}>Shipment Status </Text>
          </View>

          { this.renderOrderProgress(order.deliveryStatus) }
          <View>
              <ItemSummary item={order.items[0]} />
              <Devider />
          </View>
        {/* { withbill ? ( this.renderBill() ) : null } */}

      </Container>
    )
  }

  renderOrderProgress (deliveryStatus) {
    const progressStepsStyle = {
        activeStepIconBorderColor: '#14BAAB',
        activeLabelColor: '#686868',
        activeStepNumColor: '#686868',
        activeStepIconColor: '#ebebe4',
        completedStepIconColor: '#14BAAB',
        completedProgressBarColor: '#14BAAB',
        completedCheckColor: '#ebebe4',
        labelFontFamily: 'Cairo-SemiBold'

      };

      const buttonTextStyle = {
        color: '#0000',
        fontWeight: 'bold'
      };
      return (
        <View style={{ flex: 1, marginBottom: '20%' }}>
            <ProgressSteps {...progressStepsStyle}>
                <ProgressStep
                    label="Ordered"
                    onNext={this.onNextStep}
                    onPrevious={this.onPrevStep}
                    onSubmit={this.onSubmitSteps}
                    centerContainer
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                >
                    <View style={{ alignItems: 'center' }}>
                    </View>
                </ProgressStep>
                <ProgressStep
                    label="Processing"
                    onNext={this.onNextStep}
                    onPrevious={this.onPrevStep}
                    onSubmit={this.onSubmitSteps}
                    centerContainer
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                >
                    <View style={{ alignItems: 'center' }}>
                    <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep
                    label="Shipped"
                    onNext={this.onNextStep}
                    onPrevious={this.onPrevStep}
                    onSubmit={this.onSubmitSteps}
                    centerContainer
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                >
                    <View style={{ alignItems: 'center' }}>
                    <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep
                    label="Delivered"
                    onNext={this.onNextStep}
                    onPrevious={this.onPrevStep}
                    onSubmit={this.onSubmitSteps}
                    centerContainer
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                >
                    <View style={{ alignItems: 'center' }}>
                    <Text>This is the content within step 4!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
      )
  }


  renderBill( ) {
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
    marginBottom: 10,
  },
  simpleContainer: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  iconStyle: {
    color: '#A1A1A1',
    marginRight: '2%',
  },
  orderId: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    alignSelf: 'center',
    color: '#2B2B2B',
    flex:7
  },
  storeKeyStyle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#2B2B2B',
    flex: 2,
    marginLeft: '3%'
  },
  orderIssuedDate: {
    fontFamily: 'Cairo-SemiBold',
    fontSize: 14,
    flex:6,
    color: '#A1A1A1',

  }
}
