import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { AddressBox } from "./";

export class AddressesList extends Component {
    state={
        addresses:[]  
    }

    componentDidMount(){
        this.setState({addresses:this.props.addresses})
    }

    _renderItem = ({item}) => (
        <AddressBox title={item.title} address={item.address} phone={item.phone} name={item.name} hasOptions={this.props.hasOptions} isSelected={this.props.isSelected}  />
      );

    _keyExtractor = (item, index) => item.id;  
  render() {
    return (
        <FlatList
        data={this.state.addresses}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        />
    )
  }
}