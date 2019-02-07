import React, { Component } from 'react';
import axios from '../../Axios/axios.js';
import styles from './Styles.js';
import {	View, ScrollView, Image,
			Text, TextInput, 
			TouchableOpacity,
			Animated } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class monthRecords extends Component {

	constructor(props){
		super(props);

		this.state = {
			selectedDate: {}
		};
	};

	dayPressedHandler = ( day ) => {
		const newDate = day.dateString;
		this.setState( { selectedDate: newDate } );
	}

	render() {
		return (
			<View style={ styles.monthRecordsContainer }>
				<Text style={styles.title}>
					Registros mensuales de Pedro Perez
				</Text>
				<Text style={styles.text}>
					Para ver los detalles de un día, presione el mismo en el calendario.
				</Text>
				<View style={styles.legendContainer}>
					<Text style={styles.legendTitle}>
						Leyenda
					</Text>
					<View style={styles.legendLine}>
						<View style={[styles.legendLineIcon, styles.colorGreen]} />
						<Text style={styles.legendLineText}> Entrada a tiempo </Text>
					</View>
					<View style={styles.legendLine}>
						<View style={[styles.legendLineIcon, styles.colorRed]} />
						<Text style={styles.legendLineText}> Tardanza </Text>
					</View>
				</View>
				<Calendar 
					markedDates={
						{ 
							'2019-02-07' : {selected: true, selectedColor: '#00ff0c' },
							'2019-02-08' : {selected: true, selectedColor: '#ff1447' }
						}
					}
					markingType={'multi-dot'}
					onDayPress={this.dayPressedHandler}/>
			</View>
		);
	}
}

export default monthRecords;

