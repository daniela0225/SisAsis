import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({

   listItem: {
      marginBottom: 5,
      padding: 10,
      backgroundColor: "#fff",
      flexDirection: "column",
      alignItems: "center",
      borderColor:'#0083CB',
      borderRadius: 10,
      borderWidth: 2,
      //width: 300,
      //height: 300
   },
   textDay: {
      color: '#000',
      fontSize: 20,
      fontWeight: 'bold',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 1.5,     
   },
   containerView: {
      //flex: 1,
      backgroundColor: '#fff',
      //backgroundColor: 'tomato',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
   },
   containerEntrada:{
      borderColor:'#43d845',
      borderRadius: 10,
      borderWidth: 2,
      margin: 5,
      backgroundColor: '#43d845',
   },
   containerSalida:{
      borderColor:'#f41a1a',
      borderRadius: 10,
      borderWidth: 2,
      margin: 5,
      backgroundColor: '#f41a1a',
   },
   text: {
      color: '#fff',
      fontSize: 15,
      //fontWeight: 'bold',
      //flexDirection: 'row',
      alignItems: 'center',
      padding: 1.5,     
   }
});
export default styles;