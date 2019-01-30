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
			selectedDate: {},
			circleSelectionStyle: {selected: true, marked: true},	
		};
	};

	dayPressedHandler = ( day ) => {
		const newDate = day.dateString;
		this.setState( { selectedDate: newDate } );
	}

	render() {

		const entry = { key: 'entry', color: '#00ff0c' };
		const out = { key: 'out', color: '#ff1447' }

		return (
			<View style={ styles.monthRecordsContainer }>
				<Text style={styles.text}>
					Para ver los detalles de un día, presione el mismo en el calendario.
				</Text>
				<View style={styles.legendContainer}>
					<View style={styles.legendLine}>
						<View style={[styles.legendIcon, styles.colorGreen]} />
						<Text style={styles.legendLineText}> Entrada </Text>
					</View>
					<View style={styles.legendLine}>
						<View style={[styles.legendIcon, styles.colorRed]} />
						<Text style={styles.legendLineText}> Entrada </Text>
					</View>
				</View>
				<Calendar 
					markedDates={
						{ 
							'2019-01-07' : {dots: [entry, out ] }
						}
					}
					markingType={'multi-dot'}
					onDayPress={this.dayPressedHandler}/>
			</View>
		);
	}
}

export default monthRecords;

