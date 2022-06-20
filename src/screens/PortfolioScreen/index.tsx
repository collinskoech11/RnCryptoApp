import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import PortfolioCoin from '../../components/PortfolioCoin/index'

const image = require( '../../../assets/images/Saly-10.png');

const portfolioCoins = [{
    id: '1',
    image:'https://cdn-icons-png.flaticon.com/512/25/25228.png',
    name: 'Virtual Dollars',
    symbol: 'USD',
    amount: 69.420,
    valueUSD: 69.420
},
{
    id: '2',
    image:'https://bitcoin.org/img/icons/opengraph.png?1652976465',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: 1.13,
    valueUSD: 69.420
},
{
    id: '3',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/1200px-Ethereum_logo_translucent.svg.png',
    name: 'Ethereum',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30.420
},
{
    id: '4',
    image:'https://cdn-icons-png.flaticon.com/512/25/25228.png',
    name: 'Virtual Dollars',
    symbol: 'USD',
    amount: 69.420,
    valueUSD: 69.420
},
{
    id: '5',
    image:'https://bitcoin.org/img/icons/opengraph.png?1652976465',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: 1.13,
    valueUSD: 69.420
},
{
    id: '6',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/1200px-Ethereum_logo_translucent.svg.png',
    name: 'Ethereum',
    symbol: 'ETH',
    amount: 30,
    valueUSD: 30.420
}]
const PortfolioScreen = () => {
    return (
        <View  style={styles.root}>
            <FlatList
                style={{ width: '100%', height: 50}}
                data={portfolioCoins}
                renderItem={({item}) => <PortfolioCoin portfolioCoin={item}/>}
                ListHeaderComponentStyle={{alignItems: 'center'}}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                <>
                    <Image style={styles.image} source={image}/>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.label}> Portofolio Balance</Text>
                        <Text style={styles.balance}>$69.420</Text>
                    </View>
                </>
                )}
            />
        </View>
    )
}

export default PortfolioScreen;