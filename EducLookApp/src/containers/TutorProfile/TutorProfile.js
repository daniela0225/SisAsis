import React, { Component } from 'react';
import image from './tutorIcon.png';
import styles from './Styles.js';
import { Image, Text, ScrollView, View, ListView} from 'react-native';

import axios from '../../Axios/axios';

import { connect } from 'react-redux';

class tutorProfile extends Component {

	constructor(props){
		super(props);
		this.state = {
			DNI: '',
			name: '',
			last_name: '',
			email: '',
			cellphone: '',
			telephone: '',
			address: ''
		};
	};

	componentDidMount(){
		const token = this.props.token;
		axios.get('tutores/appTutorInfo',{
			headers: { 
				"Authorization": 'Bearer ' + token
			}
		})
		.then((response) => {
			//handle success
			const tutorInfo = response.data.tutor;
			this.setState(tutorInfo);
		})
		.catch( (response) => {
		  //handle error
			alert('No se pudo cargar la información.');
		});
	};

	render() {
		return (
			<View style={styles.tutorProfileContainer}>
				<View style={styles.infoContainer}>
					<View style={styles.imageContainer}>
						<Image source={image} style={styles.image} />
					</View>
					<Text style={[styles.text, styles.label]}> DNI: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.DNI } </Text>
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

const mapStateToProps = state => {
	return {
		token: state.users.token
	};
};

const mapDispatchToProps = dispatch => {
	return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(tutorProfile);
