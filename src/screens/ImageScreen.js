import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../Components/ImageDetail'
import forestImg from '../../assets/forest.jpg'
import beach from '../../assets/beach.jpg'
import mountain from '../../assets/mountain.jpg'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imgSource={forestImg} score={9} />
            <ImageDetail title="Beach" imgSource={beach} score={7}/>
            <ImageDetail title="Mountain" imgSource={mountain} score={10} />
            <ImageDetail />
        </View>
    )
}

const style = StyleSheet.create({})


export default ImageScreen
