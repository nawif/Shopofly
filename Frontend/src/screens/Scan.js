import React, { Component } from 'react';
import { QrHandler } from '../components';

export class Scan extends Component {

  render() {
    return (
        <QrHandler navigation={this.props.navigation}/>
    );
  }
}
