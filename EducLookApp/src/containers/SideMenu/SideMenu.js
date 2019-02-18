import React, { Component } from 'react';
import axios from '../../Axios/axios.js';
import styles from './Styles.js';
import {	View, ScrollView, Image,
			Text, TextInput,
			TouchableOpacity,
			Animated, Modal } from 'react-native';

import MenuStudentsList from '../../components/MenuStudentsList/MenuStudentsList';

import closeIcon from './closeIcon.png';
import tutorIcon from './tutorIcon.jpg';
import logoutIcon from './logoutIcon.png';

import { connect } from 'react-redux';
import { setHeaders, signOut } from '../../store/actions/userActions/index';
import { setStudents } from '../../store/actions/studentActions/index';
import { setSchoolData } from '../../store/actions/schoolActions/index';
import { setActualView } from '../../store/actions/viewActions/index';

import { AsyncStorage } from 'react-native';

class sideMenu extends Component {

	constructor(props){
		super(props);
		this.state = {};
		this.setUserData();
	}

	setUserData = () => {
		const token = this.props.token;

		axios.get('tutores/appHeaders',{
			headers: { 
				"Authorization": 'Bearer ' + token
			}
		})
		.then((response) => {
			//handle success
			const headers = response.data.tutor;
			const students = response.data.students;
			const school = response.data.school;

			this.props.onSetHeaders(headers);
			this.props.onSetStudents(students);
			this.props.onSetSchoolData(school);
		})
		.catch( (response) => {
		  //handle error
			alert(response);
		});
	}

	TutorInfoButtonHandler = () => {
		this.props.hide();
		this.props.onSetActualView('TutorProfile');
	}

	HomeButtonPressedHandler = () => {
		this.props.hide();
		this.props.onSetActualView('Home');
	}

	onLogoutHandler = () => {
		AsyncStorage.removeItem('USER_CREDENTIALS', () => {
			this.props.hide();
			this.props.onSetActualView("Login");
			this.props.onSignOut();
		});
	}

	render() {
		
		let headers = this.props.headers;

		let fn = (headers.fullName != null)?
			headers.fullName.substr(0,headers.fullName.lastIndexOf(' ')):
			"";

		return (
			<Modal onRequestClose={ this.props.hide} visible={this.props.show == true} animationType="slide" transparent={true}>
				<View style={styles.sideMenuContainer}>
					<View style={styles.menuContainer}>
						<View>
							<TouchableOpacity style={styles.closeButtonContainer} onPress={this.props.hide}>
								<Image resizeMode='contain' source={closeIcon} style={styles.closeIcon} />
							</TouchableOpacity>
							<TouchableOpacity style={styles.tutorInfoContainer} onPress={this.TutorInfoButtonHandler }>
								<View>
									<Image resizeMode='contain' source={tutorIcon} style={styles.tutorIcon} />
									<Text style={[styles.text, styles.primaryText]}> {fn} </Text>
									<Text style={[styles.text, styles.secondaryText]}> {headers.email} </Text>
								</View>
							</TouchableOpacity>
						</View>
						<View>
							<TouchableOpacity style={styles.homeButtonContainer} onPress={this.HomeButtonPressedHandler }>
								<Text style={[styles.text, styles.primaryText]}> Inicio </Text>
							</TouchableOpacity>
						</View>
						<View style={styles.studentsInfoContainer}>
							<Text style={[styles.text, styles.primaryText]}> Alumnos </Text>
							<MenuStudentsList setView={this.props.setView} hideMenu={this.props.hide}/>
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
	};
}

const mapStateToProps = state => {
	return {
		token: state.users.token,
		headers: state.users.headers,
		students: state.students.list
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetHeaders: (headers) => dispatch(setHeaders(headers)),
		onSetStudents: (list) => dispatch(setStudents(list)),
		onSetSchoolData: (school) => dispatch(setSchoolData(school)),
		onSetActualView: (view) => dispatch(setActualView(view)),
		onSignOut: () => dispatch(signOut())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(sideMenu);