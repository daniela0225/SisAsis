import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';
import styles from './Styles.js';

import WeekRecordList from '../../components/WeekRecordList/RecordList';

class weekRecords extends Component {

	constructor(props){
		super(props);
		this.state = {
			dates: [
				{
					key: Math.random(),
					day: 'Lunes',
					date:'14-01-2019',
					entrada:'08:45 am',
					salida:'03:55 pm'
				},
				{
					key: Math.random(),
					day: 'Martes',
					date:'15-01-2019',
					entrada:'08:45 am',
					salida:'03:55 pm'
				},
				{
					key: Math.random(),
					day: 'Miercoles',
					date:'16-01-2019',
					entrada:'08:45 am',
					salida:'03:55 pm'
				},
				{
					key: Math.random(),
					day: 'Jueves',
					date:'17-01-2019',
					entrada:'08:45 am',
					salida:'03:55 pm'
				},
				{
					key: Math.random(),
					day: 'Viernes',
					date:'18-01-2019',
					entrada:'08:45 am',
					salida:'03:55 pm'
				}
			]
		};
	};

	render() {
		return (
			<View  style={styles.weekRecordsContainer}>
				<Text style={styles.title}>Registro Semanal de Pedro Perez</Text>
				<Text style={styles.text}>Hora de entrada establecida: 8:00 A.M.</Text>
				<Text style={styles.text}>Hora de salida establecida: 2:30 P.M.</Text>
				<View style={styles.recordsContainer}>
					<WeekRecordList dates={this.state.dates} />
				</View>	
			</View>
		)
	}
}

export default weekRecords;

