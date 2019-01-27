import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'

const Qr = (props) => {
  const { qr } = styles

  return ( 
    <View style={qr}>
        <Image
            style={styles.qr}
            source={require('../../assets/scan.png')}
        />
    </View>
  )
}
const { width } = Dimensions.get('window')
const qrSize = width * 0.6
const styles = StyleSheet.create({
    qr: {
      marginTop: '45%',
      width: qrSize,
      height: qrSize,
      alignSelf: 'center',
    }
});
export { Qr }
