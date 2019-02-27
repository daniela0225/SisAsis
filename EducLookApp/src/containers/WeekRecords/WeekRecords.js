import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';
import styles from './Styles.js';

import WeekRecordList from '../../components/WeekRecordList/RecordList';

import { connect } from 'react-redux';

class weekRecords extends Component {

	constructor(props){
		super(props);
		this.state = {
			schedule: {},
			dates: [
				{
					id: Math.random(),
					day: 'Lunes',
					date:'14-01-2019',
					in:'08:45 am',
					out:'03:55 pm'
				},
				{
					id: Math.random(),
					day: 'Martes',
					date:'15-01-2019',
					in:'08:45 am',
					out:'03:55 pm'
				},
				{
					id: Math.random(),
					day: 'Miercoles',
					date:'16-01-2019',
					in:'08:45 am',
					out:'03:55 pm'
				},
				{
					id: Math.random(),
					day: 'Jueves',
					date:'17-01-2019',
					in:'08:45 am',
					out:'03:55 pm'
				},
				{
					id: Math.random(),
					day: 'Viernes',
					date:'18-01-2019',
					in:'08:45 am',
					out:'03:55 pm'
				}
			]
		};
	};

	componentDidMount () {		
		let config = this.props.schoolConfig;
		let selectedStudent = this.props.selectedStudent;
		let schedule = {};

		if(selectedStudent.schedule == 'I'){
			schedule = config.kinderSchedule;
		}
		else if(selectedStudent.schedule == 'P'){
			schedule = config.primarySchedule;
		}
		else if(selectedStudent.schedule == 'S'){
			schedule = config.secondarySchedule;
		}

		this.setState({ schedule: schedule });
	}

	render() {

		let schedule = (this.state.schedule !== undefined)? this.state.schedule : {};
		
		return (
			<View  style={styles.weekRecordsContainer}>
				<Text style={styles.title}>Registro Semanal de {this.props.selectedStudent.fullName}</Text>
				<Text style={styles.text}>
					Hora de entrada establecida: {(schedule.startHour !== undefined)? schedule.startHour : ''}
				</Text>
				<Text style={styles.text}>
					Hora de salida establecida: {(schedule.endHour !== undefined)? schedule.endHour : ''}
				</Text>
				<Text style={styles.text}>
					Tiempo de tolerancia: {(schedule.tolerance !== undefined)? schedule.tolerance : ''} Min.
				</Text>
				<View style={styles.recordsContainer}>
					<WeekRecordList dates={this.state.dates} />
				</View>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		token: state.users.token,
		selectedStudent: state.students.menuSelectedStudent,
		schoolConfig: state.schools.configuration
	};
};

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(weekRecords);