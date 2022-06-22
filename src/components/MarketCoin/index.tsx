import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles'

export interface MarketCoinProps {
    marketCoin: {
        image: String,
        name: String,
        symbol: String,
        valueChange24H: Number,
        valueUSD:Number,
    }
    
}

const MarketCoin = (props: MarketCoinProps) => {
    const { 
        marketCoin: {
            image,
            name,
            symbol,
            valueChange24H,
            valueUSD,
        }
        
    } = props;
    
    const navigation = useNavigation();
    
    return (
        <Pressable style={styles.root} onPress={() => navigation.navigate('CoinDetails')}>
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: image}}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.name}>{valueUSD}</Text>
                <Text style={{color: valueChange24H > 0 ? '#398f0a' : '#f10000'}}>
                    {valueChange24H > 0 && '+ '}{valueChange24H}
                </Text>
            </View>
        </Pressable>
    )
}
export default MarketCoin;