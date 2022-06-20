import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        padding: 20,
        backgroundColor: 'white',
        flex:1,
        alignItems: 'center'
    },
    image: {
        height: 200,
        resizeMode:"contain",
        aspectRatio: 1,
        
    },
    balanceContainer:{
        width: '100%',
        marginVertical: 20,
    },
    label:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#777777',
    },
    balance:{
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#777777',
    },
});

export default styles;