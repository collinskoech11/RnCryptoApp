import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        flex:1,
    },
    image: {
        height: '40%',
        aspectRatio: 1, 
    },
    buttonImageContainer:{
        height:50,
        width: '90%',
        marginTop:10,
        resizeMode:'contain',
        borderRadius: 10,
        overflow: 'hidden'
    },
    buttonImageAppleContainer:{
        height:50,
        width: '90%',
        marginTop:'auto',
        resizeMode:'contain',
        borderRadius: 10,
        overflow: 'hidden'
    },
    buttonImage:{
        height:50,
        width:'100%'
    },
    header1:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
    },
    header2: {
        fontSize: 20,
        textAlign: 'center',
        color: '#707070',
        justifyContent: 'center'

    }
});

export default styles;