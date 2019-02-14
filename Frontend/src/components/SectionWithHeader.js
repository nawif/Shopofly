import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { InputSection, TextInput } from "./";

export class SectionWithHeader extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.title} > {this.props.header}</Text>
        <InputSection >
            {this.props.children}
        </InputSection>
      </View>
    )
  }
}
const styles ={
    container:{
        // backgroundColor:'black'
    },
    title:{
        fontFamily:'Cairo-Bold',
        fontSize:15,
        color:'#2B2B2B',
        backgroundColor:'#F7F7F7'
    },
    childrenContainer:{

        justifyContent:'space-evenly'
    }
}