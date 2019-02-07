import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({

   listItem: {
      marginBottom: 5,
      padding: 10,
      backgroundColor: "#0083ff",
      flexDirection: "column",
      alignItems: "center",
      borderColor:'#0083CB',
      borderRadius: 10,
      borderWidth: 2,
   },
   textDay: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 1.5,     
   },
   date: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 1.5,     
   },
   containerView: {
      backgroundColor: '#0083ff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
   },
   containerEntrada:{
      borderColor:'#07b721',
      borderRadius: 10,
      borderWidth: 2,
      margin: 5,
      backgroundColor: '#07b721',
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
      fontWeight: 'bold',
      alignItems: 'center',
      padding: 1.5,     
   }
});
export default styles;