import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export const ButtonWithRadius = (props) => {
    const containerStyle = {
        borderRadius: 100,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 15,
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: props.color || '#A4A4A4',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start'
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
        marginRight: 10
    }

    return (
        <TouchableOpacity style={containerStyle}>
            <Image source={props.icon} style={iconStyle} />
            <Text style={labelStyle}>{ props.label }</Text>
        </TouchableOpacity>
    )
}