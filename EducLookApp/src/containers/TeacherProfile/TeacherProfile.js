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

export default teacherProfile;
