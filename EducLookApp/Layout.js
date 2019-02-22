import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Login from './src/containers/Login/Login';
import Home from './src/containers/Home/Home';

import TutorProfile from './src/containers/TutorProfile/TutorProfile';
import StudentProfile from './src/containers/StudentProfile/StudentProfile';
import TeacherProfile from './src/containers/TeacherProfile/TeacherProfile';

import WeekRecords from './src/containers/WeekRecords/WeekRecords';
import MonthRecords from './src/containers/MonthRecords/MonthRecords';

import StatusBar from './src/components/StatusBar/StatusBar';
import SideMenu from './src/containers/SideMenu/SideMenu';

import { connect } from 'react-redux';

class Layout extends Component {
	constructor (props) {
		super(props);
		this.state = {
			showSideMenu: false
		};

		this.showSideMenu = this.showSideMenu.bind(this);
	}

	showSideMenu = () => {
		const showSideMenu = !this.state.showSideMenu;
		this.setState({ showSideMenu: showSideMenu });
	}

	getViewName = (view = this.props.actualView) => {
		switch(view){
			case 'Login': return 'Login';
			case 'Home': return 'Inicio';
			case 'TutorProfile': return 'Mi Perfil';
			case 'StudentProfile': return 'Perfil del estudiante';
			case 'TeacherProfile': return 'Perfil del Profesor';
			case 'WeekRecords': return 'Registros';
			case 'MonthRecords': return 'Registros';
			default: break;
		}
	}

	getViewComponent = (view = this.props.actualView) => {
		switch(view){
			case 'Login': return (<Login />);
			case 'Home': return (<Home />);
			case 'TutorProfile': return (<TutorProfile />);
			case 'StudentProfile': return (<StudentProfile />);
			case 'TeacherProfile': return (<TeacherProfile />);
			case 'WeekRecords': return (<WeekRecords />);
			case 'MonthRecords': return (<MonthRecords />);
			default: break;
		}
	}

	render() {

		let sideMenu = (this.props.actualView == 'Login')?(<View />):(<SideMenu show={this.state.showSideMenu} hide={this.showSideMenu} />);
		let statusBar = (this.props.actualView == 'Login')?(<View />):(<StatusBar viewName={this.getViewName()} showSideMenu={this.showSideMenu} />);
	
		let view = this.getViewComponent();

		content = (	<View style={ styles.screen }>
						{sideMenu}
						{statusBar}
						<View style={styles.viewContainer}>
							{ view }
						</View>
					</View>	);

		return content;
	}
}

const styles = StyleSheet.create({
	screen: {
		width:'100%',
		height:'100%'
	},
	viewContainer: {
		flex: 1,
		padding: 35,
		paddingTop: 0,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start'
	}
});

const mapStateToProps = state => {
	return {
		token: state.users.token,
		actualView: state.views.actualView
	};
};

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);