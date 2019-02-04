import React, { Component } from 'react';
import image from '../../assets/schoolLogo.png';
import styles from './estilos.js';
import { Image, Text, ScrollView} from 'react-native';

//Daniela
//import StudentsReg from '../../components/StudentsReg/PlaceList/PlaceList';

class StudentProfile extends Component {

constructor(props){
      super(props);
      this.state = {
         names: [
         {
            key: Math.random(),
            name: 'Mariana',
            last_name: 'Paredes Robles',
            DNI: '76423529',
            birthdate: '25-02-2005',
            fingerprint: '96ssd4cds78d54cas7c4sc4s8',
            code: '7632541',
            year: '5to Secundaria',
            section: 'A',
            order_number: 15,
            school: 'Internacional'
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
				
			</ScrollView>			
			)
		}
}

export default StudentProfile;

/*
   name: 
   last_name: 
   gender: 
   DNI: 
   birthdate:
   fingerprint:
   code: 
   year: año escolar
   section: 
   order_number: 
   school: 
   
*/
