import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export class OptionCard extends Component {
  render() {
    return (
        <View style={styles.container} >
            <View style={styles.iconAndTitleContainer} >
                <Image style={styles.icon} source={this.props.icon} />
                <Text style={[styles.title,this.props.textStyle]} >{this.props.title}</Text>
            </View>
            <View style={styles.lineSeparator} />
        </View>
    )
  }
}
const styles ={
    container:{
        // alignItems:'center',
        
    },
    iconAndTitleContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',


    },
    icon:{
        margin:15
    },
    title:{
        margin:15,
        fontSize:15,
        fontFamily:'Roboto-Regular',
        color:'#2B2B2B'
    },
    lineSeparator:{
        backgroundColor:'#F0F0F0',
        width:'100%',
        height:3
    }

}
