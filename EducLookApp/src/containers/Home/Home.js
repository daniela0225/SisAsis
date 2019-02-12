import React, { Component } from 'react';
import axios from '../../Axios/axios.js';
import appLogo from '../../assets/schoolLogo.png';
import styles from './Styles.js';
import {	View, ScrollView, Image,
			Text, TextInput, 
			TouchableOpacity,
			Animated } from 'react-native';

import StudentsList from '../../components/StudentsList/StudentsList';

import { connect } from 'react-redux';

class Home extends Component {

	constructor(props){
		super(props);
		this.state = { 
		};
	};

	render() {
		let image = { uri: axios.defaults.baseURL + this.props.schoolLogo};
		return (
				<ScrollView contentContainerStyle={styles.homeContainer} behavior='padding'>
					<View style={styles.schoolLogoContainer}>
						<Image resizeMode='contain' source={image} style={styles.schoolLogo} />
					</View>
					<Text style={styles.schoolName}> {this.props.schoolName} </Text>
					<Text style={styles.textContainer}> Porcentajes de Inasistencia </Text>
					<View style={styles.studentsListContainer}>
						<StudentsList />
					</View>
				</ScrollView>
		);
	}
}

const mapStateToProps = state => {
	return {
		token: state.users.token,
		schoolName: state.schools.name,
		schoolLogo: state.schools.logo
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);