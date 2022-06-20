import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import MarketCoin from '../../components/MarketCoin/index'

const image = require( '../../../assets/images/Saly-17.png');

const marketCoins = [{
    id: '1',
    image:'https://cdn-icons-png.flaticon.com/512/25/25228.png',
    name: 'Virtual Dollars',
    symbol: 'USD',
    valueChange24H: -2.14,
    valueUSD: 69.420
},
{
    id: '2',
    image:'https://bitcoin.org/img/icons/opengraph.png?1652976465',
    name: 'Bitcoin',
    symbol: 'BTC',
    valueChange24H: 1.13,
    valueUSD: 69.420
}
]
const MarketScreen = () => {
    return (
        <View  style={styles.root}>
            <FlatList
                style={{ width: '100%', height: 50}}
                data={marketCoins}
                renderItem={({item}) => <MarketCoin marketCoin={item}/>}
                ListHeaderComponentStyle={{alignItems: 'center'}}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                <>
                    <Image style={styles.image} source={image}/>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balance}> Market</Text>
                    </View>
                </>
                )}
            />
        </View>
    )
}

export default MarketScreen;