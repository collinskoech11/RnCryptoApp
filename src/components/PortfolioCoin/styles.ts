import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   root:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    margin: 10,
    marginVertical: 10,
   },
   image:{
    height: 50,
    width: 50,
   },
   left: {
    flexDirection: 'row',
    alignItems: 'center',
   },
   name: {
    fontWeight:'bold',
    marginBottom: 5,
   },
   symbol: {
    color: '#6b6b6b',
   },
   value: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 5,
   }
});

export default styles;