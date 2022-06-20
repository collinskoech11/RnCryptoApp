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