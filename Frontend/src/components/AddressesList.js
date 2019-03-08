import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { AddressBox } from "./";

export class AddressesList extends Component {
    _renderItem = ({item}) => (
        <AddressBox onAddressSelect={this.props.onAddressSelect} item={item} title={"TODO: label"} address={`${item.house_number} ${item.street}, ${item.district}`} phone={'TODO: add phone'} name={'TODO: add name'} hasOptions={this.props.hasOptions} selectedAddress={this.props.selectedAddress}  />
      );

    _keyExtractor = (item, index) => `${item.id}`;
  render() {
    return (
        <FlatList
        style={{flexGrow: 0}}
        data={this.props.addresses}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        />
    )
  }
}
