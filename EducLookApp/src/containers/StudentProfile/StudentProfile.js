import React, { Component } from 'react';
import image from './studentIcon.png';
import styles from './Styles.js';
import { View, Text, Image, Button } from 'react-native';

import { connect } from 'react-redux';

import { setProfileSelectedTeacher } from '../../store/actions/teacherActions/index';
import { setActualView } from '../../store/actions/viewActions/index';

import axios from '../../Axios/axios';

class studentProfile extends Component {

	constructor(props){
		super(props);
		this.state = {
			key: Math.random(),
			teacherId: props.teacherId,
			name: 'Mariana',
			last_name: 'Paredes Robles',
			DNI: '76423529',
			birthdate: '25-02-2005',
			fingerprint: '96ssd4cd',
			code: '7632541',
			year: '5to Secundaria',
			section: 'A',
			order_number: 15,
			school: 'Internacional'
		};
	};

	componentDidMount () {

		const studentId = this.props.studentId;
		const teacherId = this.props.teacherId;
		const token = this.props.token;

		axios.post('alumnos/find', { studentId: studentId }, {
			headers: { 
				"Authorization": 'Bearer ' + token
			}
		})
		.then((response) => {
			this.setState(response.data.student);
		})
		.catch((error) => {
			console.log(error);
		})
	}
	onPressButton = () => {
		this.props.onSetSelected(this.state.teacherId);
		this.props.onSetActualView("teacherProfile");
	}

	render() {
		let birthday = (this.state.birthdate != null)?(this.state.birthdate.toString()).substring(0,10) : "";
		return (
			<View style={styles.studentProfileContainer}>
				<View style={styles.infoContainer}>
					<View style={styles.imageContainer}>
						<Image source={image} style={styles.image} />
					</View>
					<Text style={[styles.text, styles.label]}> Nombre: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.name + " " + this.state.last_name } </Text>
					<Text style={[styles.text, styles.label]}> DNI: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.DNI } </Text>
					<Text style={[styles.text, styles.label]}> Código de alumno: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.code } </Text>
					<Text style={[styles.text, styles.label]}> Año y sección: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.year  + " " + this.state.section} </Text>
					<Text style={[styles.text, styles.label]}> Número de orden: </Text>
						<Text style={[styles.text, styles.bold]}> { this.state.order_number } </Text>
					<Text style={[styles.text, styles.label]}> Fecha de nacimiento: </Text>
						<Text style={[styles.text, styles.bold]}> { birthday } </Text>						
					<Button
					  onPress={this.onPressButton}
					  title="profesor"
					  color="#841584"
					/>

				</View>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		token: state.users.token,
		studentId: state.students.profileSelectedStudent,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetSelectedTeacher: (teacherId) => dispatch(setProfileSelectedTeacher(teacherId)),
		onSetActualView: (view) => dispatch(setActualView(view))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(studentProfile);