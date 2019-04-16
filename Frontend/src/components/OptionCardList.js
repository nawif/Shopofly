import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { OptionCard } from "./";

export class OptionCardList extends Component {

  render() {

    return (

        <View>
            <FlatList
                style={{ height:'100%'}}
                data={this.props.options}
                ketExtractor={(item, index) => index.toString()}
                renderItem={ ({item, index})  =>
                        <TouchableOpacity onPress={item.action}>
                            <OptionCard title={item.title} icon={item.icon} textStyle={item.textStyle}  />
                        </TouchableOpacity>
                }
            />
        </View>
    )
  }
}
