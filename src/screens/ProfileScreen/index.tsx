import { View, Text, Image, Pressable } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
const image = require( '../../../assets/images/Saly-16.png');

const ProfileScreen = () => {
    const  [user, setUser] = useState({
        id: '1',
        name: 'collins',
        email: 'collinskoechck34@gmail.com',
        image: 'https://cdn-icons-png.flaticon.com/512/25/25228.png',
        netWorth: 1924
    })
    const signOut = () => {
        console.warn("Sign out");
    }
    return (
        <View style={styles.root}>
            <Image style={styles.userImage} source={image}/>
            <View style={styles.userContainer}>
                <View style={styles.left}>
                    <Image style={styles.userImage} source={{uri: user.image}}/>
                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'flex-end'}}>
                    <Text style={styles.value}>{user.netWorth}</Text>
                </View>
            </View>
            <Pressable onPress={signOut} style={{marginTop: 'auto'}}>
                <Text>Sign Out</Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen;