import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Container, Headline, Radio, Devider } from '../components'

import { VAT } from '../Global'
import { defaultTextContainer } from '../Styles'

export default class Checkout extends Component {
    state = {
      selected: 1,
    }

  render() {
    const { radioGroup } = styles

    const item = {
      seller:'Apple',
      title:'iPhone XS With FaceTime Space Gray 64GB 4G LTE',
      rating: 4.8,
      reviews: 4,
      specification:{ dimensions:{width:'10',height:'10'} },
      price: '2,890.00'
    }

    const isCreditCard =  this.state.selected == 1 ? true : false
    const isPayofly = this.state.selected == 2 ? true : false

    return (
      <Container>
        <Headline text={'Payment Method'} />

        <Radio label={'Pay With Credit Card'} isSelected={isCreditCard}/>
        <Devider height={1} />
        <Radio label={'Payofly - Pay On Delivery'} isSelected={isPayofly}/>

        <Headline text={'Deliver To'} />
        <Text>TODO: get it from Nawaf's screen</Text>

        <Headline text={'Order Summary'} />
        <Text>TODO: do it ASAP</Text>
      </Container>
    );
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
