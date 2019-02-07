import React, { Component } from 'react';
import image from './tutorIcon.png';
import styles from './Styles.js';
import { Image, Text, ScrollView, View, ListView} from 'react-native';

class tutorProfile extends Component {

	constructor(props){
		super(props);
		this.state = {
					key: Math.random(),
					name: 'Mariana',
					last_name: 'Torres Cáceres',
					email: 'm.paredes@example.com',
					cellphone: '952146321',
					telephone: '054-265315',
					address: 'Urb. Las Torres M-25'
		};
	};

	render() {
		return (
			<View style={styles.tutorProfileContainer}>
				<View style={styles.infoContainer}>
					<View style={styles.imageContainer}>
						<Image source={image} style={styles.image} />
					</View>
					<Text style={[styles.text, styles.label]}> Nombre: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.name + " " + this.state.last_name } </Text>
					<Text style={[styles.text, styles.label]}> E-mail: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.email } </Text>
					<Text style={[styles.text, styles.label]}> Celular: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.cellphone } </Text>
					<Text style={[styles.text, styles.label]}> Teléfono: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.telephone } </Text>
					<Text style={[styles.text, styles.label]}> Dirección: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.address } </Text>
				</View>
			</View>
		)
	}
}

export default tutorProfile;
