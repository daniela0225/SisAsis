import React, { Component } from 'react';
import styles from './Styles.js';
import { Image, Text, ScrollView, View, ListView} from 'react-native';

import axios from '../../Axios/axios';

import { connect } from 'react-redux';

class teacherProfile extends Component {

	constructor(props){
		super(props);
		this.state = {
			name: '',
			last_name: '',
			school:'',
			email: ''
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
			<View style={styles.container}>
				<View style={styles.view}>
					<View style={styles.imageContainer}>
						<Image source={image} style={styles.image} />
					</View>
					<Text style={styles.text, styles.label]}> Nombre: </Text>
						<Text style={styles.name}> { this.state.name } </Text>
					<Text style={styles.text, styles.label]}> Nombre: </Text>
						<Text style={styles.text}> { this.state.last_name } </Text>
					<Text style={styles.text}> School: </Text>
						<Text style={styles.text}> { this.state.school } </Text>
					<Text style={styles.text}> E-mail: </Text>
						<Text style={styles.text}> { this.state.email } </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(teacherProfile);
