import React, { Component } from 'react';
import { Linking, Dimensions, Text, View, StyleSheet,
  TouchableOpacity, Image } from 'react-native';
  
import { BarCodeScanner, Permissions } from 'expo';
import { Qr, Container, MainContainer } from '../components'
import AwesomeAlert from 'react-native-awesome-alerts';
import * as API from '../API'


export default class App extends Component {
  render() {
    return (
        <MainContainer>
            <Qr/>
        </MainContainer>
    );
  }

}
