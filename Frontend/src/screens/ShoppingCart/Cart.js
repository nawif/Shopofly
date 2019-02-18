import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Container, GradientButton, Bill } from '../../components'

import * as Global from '../../Global'

export class Cart extends Component {
  render() {
    return (
      <Container>
        { this.renderHeader() }

        <ScrollView>
          <Text>TESTING</Text>
          <Text>TESTING</Text>
          <Text>TESTING</Text>
          <Text>TESTING</Text>
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
}


const styles ={
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#FFFFFF'
  },
}
