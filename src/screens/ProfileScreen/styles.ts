import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
      },
      image: {
        height: 175,
        resizeMode: "contain",
      },
    
      userContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 50,
        marginVertical: 10,
        width: '100%',
      },
    userImage: {
        height: 75,
        width: 75,
        marginRight:10,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontWeight:'bold',
        marginBottom: 5
    },
    email: {

    }
});

export default styles;