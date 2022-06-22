import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from "./styles";
import {AntDesign} from "@expo/vector-icons";
import PercentageChange from '../../components/PercentageChange/index'

const CoinDetailScreen = () => {
    const [coinData, setCoinData ] = useState({
        id: '1',
        image: 'https://cdns-images.dzcdn.net/images/cover/7e49b1eb694c7308d621ea999cdf7330/264x264.jpg',
        name: 'Bitcoin',
        symbol: 'BTC',
        valueChange24H: -0.12,
        valueChange1D: -1.12,
        valueChange7D: -2.12,
        valueChange1H: 3.12,
        currentPrice: 59420,
        amount: 2,
    })

    const onBuy = () => {
        console.warn('Buy crypto')
    }

    const onSell = () => {
        console.warn('Sell crypto')
    }
    return (
        <>
        <View style={styles.root}>
            <View style={styles.topContainer}>
                <View style={styles.left}>
                    <Image style={styles.image} source={{ uri: coinData.image}}/>
                    <View>
                        <Text style={styles.name}>{coinData.name}</Text>
                        <Text style={styles.symbol}>{coinData.symbol}</Text>
                    </View>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <AntDesign name="staro" size={30} color={'#2f95dc'}/>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.valueContainer}>
                    <Text style={styles.label}>Current Price</Text>
                    <Text style={styles.value}>{coinData.currentPrice}</Text>
                </View>

                <View style={{flexDirection:'row'}}>

                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 Hour</Text>
                        <PercentageChange value={coinData.valueChange1H}/>
                    </View>

                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 Day</Text>
                        <PercentageChange value={coinData.valueChange1D}/>
                    </View>

                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>7 Days</Text>
                        <PercentageChange value={coinData.valueChange7D}/>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <Text>Position</Text>
                <Text>
                    {coinData.symbol} {coinData.amount} 
                    {' '}
                    ($ {coinData.currentPrice * coinData.amount})
                </Text>
            </View>
            <View style={[styles.row, {marginTop:'auto'}]}>
                <Pressable style={[styles.button, {backgroundColor: '#24850f'}]} onPress={onBuy}>
                    <Text style={styles.buttonText}>Buy</Text>
                </Pressable>
                <Pressable style={[styles.button, {backgroundColor: '#d60000'}]} onPress={onSell}>
                    <Text style={styles.buttonText}>Sell</Text>
                </Pressable>
            </View>
        </View>
       
        </>
        
    )
}

export default CoinDetailScreen;