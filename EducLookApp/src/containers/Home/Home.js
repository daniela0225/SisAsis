import React, { Component } from 'react';
import axios from '../../Axios/axios.js';
import appLogo from '../../assets/schoolLogo.png';
import styles from './Styles.js';
import {	View, ScrollView, Image,
			Text, TextInput, 
			TouchableOpacity,
			Animated } from 'react-native';

import StudentsList from '../../components/StudentsList/StudentsList';


class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			schoolName: "Nombre del Colegio",
			schoolLogo: null,
			students: [
				{
					key: Math.random(),
					absences:30,
					completeName:"Juan Perez"
				},{
					key: Math.random(),
					absences:60,
					completeName:"Luisa Perez"
				},{
					key: Math.random(),
					absences:100,
					completeName:"José Perez"
				},{
					key: Math.random(),
					absences:50,
					completeName:"Andres Perez"
				},{
					key: Math.random(),
					absences:80,
					completeName:"Maria Perez"
				}
			] 
		};
	};

	componentDidMount () {
		/*
		axios.get().then();
		this.setState({
			schoolName: ,
			schoolLogo: ,
			students:
		});
		*/
	}

	onItemPressed = () => {
		
	}

	render() {

		return (
				<ScrollView contentContainerStyle={styles.homeContainer} behavior='padding'>
					<View style={styles.schoolLogoContainer}>
						<Image resizeMode='contain' source={appLogo} style={styles.schoolLogo} />
					</View>
					<Text style={styles.schoolName}> {this.state.schoolName} </Text>
					<Text style={styles.textContainer}> Porcentajes de Inasistencia </Text>
					<View style={styles.studentsListContainer}>
						<StudentsList students={this.state.students} onItemPressed={this.onItemPressed} />
					</View>
				</ScrollView>
		);
	}
}

export default Home;