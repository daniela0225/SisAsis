import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';
import styles from './Styles.js';

import Registros from '../../components/RegSemanal/PlaceList/PlaceList';
   
class WeekRecords extends Component {

   constructor(props){
      super(props);
      this.state = {
         dates: [
         {
            key: Math.random(),
            day: 'Lunes',
            date:'14-01-2019',
            entrada:'08:45 am',
            salida:'03:55 pm'
         },
         {
            key: Math.random(),
            day: 'Martes',
            date:'15-01-2019',
            entrada:'08:45 am',
            salida:'03:55 pm'
         },
         {
            key: Math.random(),
            day: 'Miercoles',
            date:'16-01-2019',
            entrada:'08:45 am',
            salida:'03:55 pm'
         },
         {
            key: Math.random(),
            day: 'Jueves',
            date:'17-01-2019',
            entrada:'08:45 am',
            salida:'03:55 pm'
         },
         {
            key: Math.random(),
            day: 'Viernes',
            date:'18-01-2019',
            entrada:'08:45 am',
            salida:'03:55 pm'
         }
      ]
   };
};
   render() {
      return (
         <View  style={styles.view}>
            <Text style={styles.title}>Registro Semanal</Text>
            <ScrollView contentContainerStyle={styles.view}>
            <Registros dates={this.state.dates} />
            </ScrollView>         
            
         </View>        
         )
   }
}

export default WeekRecords;

