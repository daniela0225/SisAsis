import React, { Component } from 'react';
import axios from '../../Axios/axios.js';
import styles from './Styles.js';
import {	View, ScrollView, Image,
			Text, TextInput,
			TouchableOpacity,
			Animated, Modal } from 'react-native';

import MenuStudentsList from '../../components/MenuStudentsList/MenuStudentsList';

import logoutIcon from './logoutIcon.png';
import tutorIcon from './tutorIcon.png';

class sideMenu extends Component {

	constructor(props){
		super(props);
		this.state = {
			students: [
				{	key: Math.random(), 
					fullName: "Juan Perez"
				},{	key: Math.random(),
					fullName: "Luisa Perez"
				},{	key: Math.random(),
					fullName: "José Perez"
				},{ key: Math.random(),
					fullName: "María Perez"
				}
			]
		};
	}

	onPressHandler = (element) => {
	 switch(element){
	 	case "TutorInfo":break;
	 	case "Logout":break;
	 }
	}

	render() {
		return (
			<Modal
			onRequestClose={ this.props.hide}
			visible={this.props.show == true} 
			animationType="slide">
				<ScrollView contentContainerStyle={styles.sideMenuContainer} behavior='padding' enabled>
					<TouchableOpacity style={styles.tutorInfoContainer} onPress={() => this.onPressHandler("TutorInfo")}>
						<View>
							<Image resizeMode='contain' source={tutorIcon} 
							style={styles.tutorIcon} /> 
							<Text style={[styles.text, styles.primaryText]}> Nombre del Tutor </Text>
							<Text style={[styles.text, styles.secondaryText]}> tutor@gmail.com </Text>
						</View>
					</TouchableOpacity>
					<View style={styles.studentsInfoContainer}>
						<Text style={[styles.text, styles.primaryText]}> Alumnos </Text>
						<MenuStudentsList items={this.state.students}/>
					</View>
					<TouchableOpacity style={styles.settingsContainer} onPress={() => this.onPressHandler("Logout")}>
						<Image resizeMode='contain' source={logoutIcon} style={styles.logoutIcon} /> 
						<Text style={[styles.text, styles.primaryText]}> Cerrar Sesión </Text>	
					</TouchableOpacity>
				</ScrollView>
			</Modal>
		);
	}
}

export default sideMenu;