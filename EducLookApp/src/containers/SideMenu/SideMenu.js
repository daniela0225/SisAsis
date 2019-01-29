import React, { Component } from 'react';
import axios from '../../Axios/axios.js';
import styles from './Styles.js';
import {	View, ScrollView, Image,
			Text, TextInput,
			TouchableOpacity,
			Animated, Modal } from 'react-native';

import MenuStudentsList from '../../components/MenuStudentsList/MenuStudentsList';

import closeIcon from './closeIcon.png';
import tutorIcon from './tutorIcon.png';
import logoutIcon from './logoutIcon.png';

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

	onLogoutHandler = () => {
		this.props.hide();
		this.props.setView("Login");
	}

	render() {
		return (
			<Modal onRequestClose={ this.props.hide} visible={this.props.show == true} animationType="slide" transparent={true}>
				<View style={styles.sideMenuContainer}>
					<View style={styles.menuContainer}>
						<View style={styles.row}>
							<TouchableOpacity style={styles.tutorInfoContainer} onPress={() => this.onPressHandler("TutorInfo")}>
								<View>
									<Image resizeMode='contain' source={tutorIcon} 
									style={styles.tutorIcon} /> 
									<Text style={[styles.text, styles.primaryText]}> Nombre del Tutor </Text>
									<Text style={[styles.text, styles.secondaryText]}> tutor@gmail.com </Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={styles.closeButtonContainer} onPress={this.props.hide}>
								<Image resizeMode='contain' source={closeIcon} style={styles.closeIcon} />
							</TouchableOpacity>
						</View>
						<View style={styles.studentsInfoContainer}>
							<Text style={[styles.text, styles.primaryText]}> Alumnos </Text>
							<MenuStudentsList items={this.state.students}/>
						</View>
						<TouchableOpacity style={styles.settingsContainer} onPress={this.onLogoutHandler}>
							<Image resizeMode='contain' source={logoutIcon} style={styles.logoutIcon} /> 
							<Text style={[styles.text, styles.primaryText]}> Cerrar Sesión </Text>	
						</TouchableOpacity>
					</View>
					<View style={styles.menuBackground} />
				</View>
			</Modal>
		);
	}
}

export default sideMenu;