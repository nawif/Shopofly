import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export const ButtonWithRadius = (props) => {
    const containerStyle = {
        borderRadius: 100,
        paddingTop: props.paddingTop || 10,
        paddingBottom: props.paddingBottom || 10,
        paddingRight: 15,
        paddingLeft: 15,
        borderWidth: props.borderWidth ||1,
        borderColor: props.borderColor || '#A4A4A4',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginLeft: props.marginLeft
    }

    const labelStyle = {
        fontFamily: 'Cairo-Bold',
        fontSize: 12,
        // lineHeight: 21,
        color: props.color,
    }

    const iconStyle = {
        width: 12,
        height: 12,
        marginRight: 10,
    }

    return (
        <TouchableOpacity style={containerStyle} onPress={props.onPress}>
            <Image source={props.icon} style={iconStyle} />
            <Text style={labelStyle}>{ props.label }</Text>
        </TouchableOpacity>
    )
}
