import React, { Component } from 'react'
import { View } from 'react-native' 
import { DividerWithHeading, ButtonWithRadius } from '../components'
import images from '../../assets/images'

export class StarredItems extends Component {
    state = {}

    render() {
        return (
            <View style={{ flex: 1 }}>
                <DividerWithHeading label='Starred Items' sublabel='3 Items' height={100} />
                <ButtonWithRadius icon={images.shoppingCartIcon} label='ADD TO CART' color='#A4A4A4' />
            </View>
        )
    }
}