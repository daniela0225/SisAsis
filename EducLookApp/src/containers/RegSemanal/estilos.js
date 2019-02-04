import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
   
   view: {
      flex: 1,
      //borderColor:'#0083CB',
      //borderRadius: 10,
      //borderWidth: 2,
      backgroundColor: '#fff',
      //backgroundColor: 'tomato',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      //position: 'absolute',
      marginTop: 15,
      marginRight: 1,
      marginLeft: 1,
      width: 300,
      height: 300,
   },
   container: {
      backgroundColor: '#FBBA00',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      borderColor:'#0083CB',
      borderRadius: 10,
      borderWidth: 2,
      marginTop: 10,
      //height: '18%',
   },
   title:{
      color: '#0083ff',
      flexDirection: 'row',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 30,
   },
   text: {
      color: '#fff',
      fontSize: 15,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 1.5,     
   },
   textDay: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 1.5,     
   },
   containerView: {
      //flex: 1,
      borderColor:'blue',
      borderRadius: 10,
      borderWidth: 2,
      //backgroundColor: '#fff',
      backgroundColor: 'tomato',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
   },
   
   viewPrincipal: {
      borderColor: 'green',
      borderRadius: 5,
      borderRightWidth: 5,
      backgroundColor: 'black',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: 10,
      margin: 10,
   }
});
export default styles;