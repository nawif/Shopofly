import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import Images from "../../assets/images";
import { OptionCard } from "./";

export class OptionCardList extends Component {
    
  render() {
      const options =[
    {
        title:'Orders',
        icon:Images.orders,
        textStyle:{}
    },
    {
        title:'Address Book',
        icon:Images.addressBook,
        textStyle:{}
    },
    {
        title:'Account Settings',
        icon:Images.account,
        textStyle:{}
    },
    {
        title:'Logout',
        icon:Images.logout,
        textStyle:{color:'#D34A4A'}
    }
]
    return (
    
        <View>
            <FlatList
                style={{ height:'100%'}}
                
                data={options}
                renderItem={ ({item})  => 
                        <OptionCard key={item.title} title={item.title} icon={item.icon} textStyle={item.textStyle}  />
                }  
            />
        </View>
    )
  }
}