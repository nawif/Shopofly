import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export class ImageAndTitle extends Component {
  render() {
    return (
      <View style={[styles.container,this.props.style]} >
        <Image style={styles.image} source={this.props.image}/>
        <Text style={styles.text} > {this.props.title} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    },
    image:{
        width: 120,
        height: 120,
        borderRadius: 120/2,
        justifyContent: "flex-end"
        },
    text:{
        color:'white',
        marginTop:20,
        fontFamily: 'Roboto-Bold',
        fontSize: 20
    }
  });

