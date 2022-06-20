import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles'

export interface RankingCoinProps {
    user: {
        
        name: String,
        image: String,
        netWorth: Number,
        place: Number
    },
    
    
}

const RankingCoin = (props: RankingCoinProps) => {
    const { 
        user: {
            name,
            image,
            netWorth,
            place
        },
        
    } = props;
    return (
        <View style={styles.root}>
            <View style={styles.left}>
                <Text>{place}</Text>
                <Image style={styles.image} source={{ uri: image}}/>
                <View>
                    <Text style={styles.name}>{name}</Text>
                   
                </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.name}>{netWorth}</Text>
                
            </View>
        </View>
    )
}
export default RankingCoin;