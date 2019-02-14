import React, { Component } from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'

export class ButtonWithIcon extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}  onPress={this.props.onPress} >
        <Image style={styles.icon} source={this.props.icon}  />
        <Text style={styles.title} >{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}
const styles ={
  container:{
    flexDirection:'row',
    alignItems:'center',
  },
    icon:{
        height:10,
        width:10,
        marginRight:10
    },
    title:{
        fontFamily:'Cairo-Bold',
        color:'#2B2B2B'
    }
}