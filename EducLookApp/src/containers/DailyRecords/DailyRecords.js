import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';
import estilos from './estilos';
   
class DailyRecords extends Component {
   state = {
      names: [
         {
            id: 0,
            day: 'Lunes',
            date:'14-01-2019',
            entrada:'08:45 am',
            salida:'03:55 pm'
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.id)
   }
   render() {
      return (
         <View style={styles.viewPrincipal}>
         <Text>Registro Semanal</Text>
            
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}> {item.day} </Text>
                     <Text style = {styles.text}> {item.date} </Text>
                     <Text style = {styles.text}> {item.entrada} </Text>
                     <Text style = {styles.text}> {item.salida} </Text>
                  </TouchableOpacity>

               ))
            }        
            </View>
      )
   }
}

export default DailyRecords;

