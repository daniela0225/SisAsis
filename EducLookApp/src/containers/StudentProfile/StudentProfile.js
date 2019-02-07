import React, { Component } from 'react';
import image from './studentIcon.png';
import styles from './Styles.js';
import { ScrollView, Text, View, Image } from 'react-native';

class studentProfile extends Component {

constructor(props){
		super(props);
		this.state = {
			key: Math.random(),
			name: 'Mariana',
			last_name: 'Paredes Robles',
			gender: 'FEMALE',
			DNI: '76423529',
			birthdate: '25-02-2005',
			fingerprint: '96ssd4cd',
			code: '7632541',
			year: '5to Secundaria',
			section: 'A',
			order_number: 15,
			school: 'Internacional'
		};
	};

	render() {
		return (
			<ScrollView contentContainerStyle={styles.studentProfileContainer}>
				<View style={styles.infoContainer}>
					<View style={styles.imageContainer}>
						<Image source={image} style={styles.image} />
					</View>
					<Text style={[styles.text, styles.label]}> Nombre: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.name + " " + this.state.last_name } </Text>
					<Text style={[styles.text, styles.label]}> DNI: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.DNI } </Text>
					<Text style={[styles.text, styles.label]}> Código de alumno: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.code } </Text>
					<Text style={[styles.text, styles.label]}> Año y sección: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.year  + " " + this.state.section} </Text>
					<Text style={[styles.text, styles.label]}> Número de orden: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.order_number } </Text>
					<Text style={[styles.text, styles.label]}> Fecha de nacimiento: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.birthdate } </Text>
				</View>
			</ScrollView>
		)
	}
}

export default studentProfile;
