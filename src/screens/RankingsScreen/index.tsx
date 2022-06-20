import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import RankingCoin from '../../components/RankingCoin/index'

const image = require( '../../../assets/images/Saly-20.png');

const users= [{
    id: '1',
    name: 'Virtual Dollars',
    image:'https://cdn-icons-png.flaticon.com/512/25/25228.png',
    netWorth: 6740,
    place: 1
},
{
    id: '2',
    name: 'Virtual Dollars',
    image:'https://cdn-icons-png.flaticon.com/512/25/25228.png',
    netWorth: 6740,
    place: 2
}
]
const RankingsScreen = () => {
    return (
        <View  style={styles.root}>
            <FlatList
                style={{ width: '100%', height: 50}}
                data={users}
                renderItem={({item}) => <RankingCoin user={item}/>}
                ListHeaderComponentStyle={{alignItems: 'center'}}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                <>
                    <Image style={styles.image} source={image}/>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balance}> Rankings</Text>
                    </View>
                </>
                )}
            />
        </View>
    )
}

export default RankingsScreen;