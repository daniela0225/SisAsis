import React, { Component } from 'react';
import image from '../../assets/schoolLogo.png';
import styles from './PerfilStyle.js';
import { Image, Text, ScrollView, View, ListView} from 'react-native';

import StudentsReg from '../../components/StudentsReg/PlaceList/PlaceList';

class Profile extends Component {

constructor(props){
      super(props);
      this.state = {
         names: [
         {
            key: Math.random(),
            name: 'Mariana Paredes',
            grado:'5to Secundaria',
            nroOrden: '15'
         },
         {
            key: Math.random(),
            name: 'José Paredes',
            grado:'2do Secundaria',
            nroOrden: '20'
         },
         {
            key: Math.random(),
            name: 'José Paredes',
            grado:'2do Secundaria',
            nroOrden: '20'
         },
         {
            key: Math.random(),
            name: 'José Paredes',
            grado:'2do Secundaria',
            nroOrden: '20'
         },
         {
            key: Math.random(),
            name: 'José Paredes',
            grado:'2do Secundaria',
            nroOrden: '20'
         }
      ]
      };

      alert = (item) => {
      alert(item.id)
      }
   };
   

	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<Image source={image} style={styles.image} />
				<Text style={styles.textName}> Mariana Paredes </Text>
				<Text style={styles.textAttributes}> Direccion: Urb. Las Torres M-25 </Text>
				<Text style={styles.textAttributes}> Email: m.paredes@example.com </Text>
				<Text style={styles.textAttributes}> teléfono: 054-265315 </Text>
				<Text style={styles.textAttributes}> celular: 952146321 </Text>
            <ScrollView style={styles.containertable}>
                  <StudentsReg names={this.state.names} />
            </ScrollView>
			</ScrollView>			
			)
		}
}

export default Profile;
