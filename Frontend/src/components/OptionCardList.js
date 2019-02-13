import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import images from "../../assets/images";
import { OptionCard } from "./local";

export class OptionCardList extends Component {
    
  render() {
      const options =[
    {
        title:'Orders',
        icon:images.orders,
        textStyle:{}
    },
    {
        title:'Address Book',
        icon:images.addressBook,
        textStyle:{}
    },
    {
        title:'Account Settings',
        icon:images.account,
        textStyle:{}
    },
    {
        title:'Logout',
        icon:images.logout,
        textStyle:{color:'#D34A4A'}
    }
]
    return (
    
        <View>
            {
            // <FlatList
            //     style={{ flex: 1 }}
                
            //     data={options}
            //     renderItem={ ({item})  => 
            //             <OptionCard key={item.title} title={item.title} icon={item.icon} textStyle={item.textStyle}  />
            //     }  
            // />
            }
        </View>
    )
  }
}