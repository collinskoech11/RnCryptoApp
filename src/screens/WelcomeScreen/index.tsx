import { View, Text, Image, Pressable, Alert } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import styles from './styles'
const image = require( '../../../assets/images/Saly-1.png' );
const googlebuttonimage = require( '../../../assets/images/google-button.png' );
const applebuttonimage = require( '../../../assets/images/apple-button.png' );

const WelcomeScreen = () => {
    const signInGoogle = () => {
        console.warn('Learning React Native')
    }
    const navigation = useNavigation();
    return (
        <View  style={styles.root}>
            <Image style={styles.image} source={image} />
            <Text style={styles.header1}>Welcome Screen to VCRYPTO</Text>
            <Text style={styles.header2}>Invest your virtual $100000 and compete woth others</Text>
            <Pressable style={styles.buttonImageAppleContainer} onPress={() => navigation.navigate('Root')}>
                <Image style={styles.buttonImage}  source={googlebuttonimage}/>
            </Pressable>
            <Pressable style={styles.buttonImageContainer} onPress={() => navigation.navigate('Root')}>
                <Image style={styles.buttonImage}  source={applebuttonimage}/>
            </Pressable>
        </View>
    )
}

export default WelcomeScreen;