import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
const image = require( '../../../assets/images/Saly-1.png');

const HomeScreen = () => {
    return (
        <View  style={styles.root}>
            <Image style={styles.image} source={image} />
            <Text style={styles.header1}>Welcome to VCRYPTO</Text>
            <Text style={styles.header2}>Invest your virtual $100000 and compete woth others</Text>
        </View>
    )
}

export default HomeScreen;