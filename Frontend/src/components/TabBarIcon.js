import React from 'react'
import { View, Image } from 'react-native'

export const TabBarIcon = (props) => {
    const { size, source } = props

    const imageStyles = {
        height: size,
        width: 100,
        resizeMode: 'contain'
    }
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={source} style={imageStyles} />
        </View>
    )
}
