import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export class TitleWithIconAndDescription extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.titleAndIcon} >
            <Image style={styles.icon} source={this.props.icon} />
            <Text style={styles.title} >{this.props.title}</Text>
        </View>
        <Text style={styles.subtitle} >{this.props.subtitle}</Text>
      </View>
    )
  }
}
const styles ={
    container:{
        alignSelf:'center',
        width:'90%',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-around',
    },
    titleAndIcon:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    icon:{
        marginRight:10
    },
    title:{
        fontFamily:'Cairo-SemiBold',
        color:'#919191',
        fontSize:12,
    },
    subtitle:{
        paddingLeft:10,
        flex:2,
        color:'#535353',
        fontFamily:'Cairo-SemiBold',
    }
}