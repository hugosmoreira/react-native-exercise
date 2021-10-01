import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.imgSource} />
            <Text>{props.title}</Text>
            <Text>Image Score - {props.score}</Text>
        </View>
    )
}

const style = StyleSheet.create({})


export default ImageDetail
