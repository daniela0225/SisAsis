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
			current: new Date(),
			selectedDate: '',
			days: {}
		};
	};

	componentDidMount () {
		let days = {};

		for(let i = 0; i < 31; i++) {
			let date = new Date(2019,2,i);
			if( date.getDay() != 0 && date.getDay() != 6){
				days = {
					...days,
					[this.transformDate(date)]: {customStyles: customStyles.greenDay}
				};
			}
		}

		this.setState({ days: days });
	}

	getMonthRecords = () => {

	}

	arrowPressedHandler = ( direction ) => {
		let current = this.state.current;
		if(direction == 'left'){
			current.setMonth( current.getMonth() - 1 );
		}else if (direction == 'right'){
			current.setMonth( current.getMonth() + 1 );
		}
		this.setState({ current: current });
	}

	transformDate = (date) => {
		let dd = date.getDate();
		let mm = date.getMonth() + 1; 

		let yyyy = date.getFullYear();
		if (dd < 10) {
		  dd = '0' + dd;
		} 
		if (mm < 10) {
		  mm = '0' + mm;
		} 
		return yyyy + '-' + mm + '-' + dd;
	}

	dayPressedHandler = ( day ) => {
		const newDate = day.dateString;
		this.setState( { selectedDate: newDate } );
	}

	render() {
		let current = this.state.current;
		let days = this.state.days;
		let selectedDate = this.state.selectedDate;

		days = {...days, [selectedDate]: {customStyles: customStyles.blueDay}}
		
		return (
			<View style={ styles.monthRecordsContainer }>
				<Text style={styles.title}>
					Registros de Pedro Perez
				</Text>
				<Text style={styles.text}>
					Presione un día para ver los detalles.
				</Text>
				<Text style={styles.legendTitle}>
					Leyenda
				</Text>
				<View style={styles.legendContainer}>
					<View style={[styles.legendLineIcon, styles.colorGreen]} />
					<Text style={styles.legendLineText}> Puntual </Text>
					<View style={[styles.legendLineIcon, styles.colorYellow]} />
					<Text style={styles.legendLineText}> Tardanza </Text>
					<View style={[styles.legendLineIcon, styles.colorRed]} />
					<Text style={styles.legendLineText}> Falta </Text>
				</View>
				<Calendar
					current={current}
					style={calStyles.container}
					theme={calStyles.theme}
					markingType={'custom'}

					markedDates={
						days
					}
					hideExtraDays={true}
					onDayPress={this.dayPressedHandler}

					onPressArrowLeft={() => { this.arrowPressedHandler('left') }}
					onPressArrowRight={() => { this.arrowPressedHandler('right') }}
				/>
			</View>
		);
	}
}

const calStyles = {
	container: {
		borderColor: '#0083ff',
		borderWidth: 2,
		borderRadius: 10,
		padding: 7
	},
	theme: {
		backgroundColor: '#ffffff',
		calendarBackground: '#ffffff',
		textSectionTitleColor: '#0083ff',
		selectedDayBackgroundColor: '#0083ff',
		selectedDayTextColor: '#ffffff',
		todayTextColor: '#0083ff',
		dayTextColor: '#0083ff',
		arrowColor: '#0083ff',
		monthTextColor: '#0083ff'
	},
	greenContainer: {
		backgroundColor: '#14ff56',
		borderRadius: 15
	},
	yellowContainer: {
		backgroundColor: '#FBBA00',
		borderRadius: 15
	},
	redContainer: {
		backgroundColor: '#ff1447',
		borderRadius: 15
	},
	blueContainer: {
		backgroundColor: '#0083ff',
		borderRadius: 15
	},
	whiteText: {
		color: '#fff',
		fontWeight: 'bold'
	}
};

const customStyles = {
	greenDay: {
		container: calStyles.greenContainer,
		text: calStyles.whiteText,
	},
	yellowDay: {
		container: calStyles.yellowContainer,
		text: calStyles.whiteText,
	},
	redDay: {
		container: calStyles.redContainer,
		text: calStyles.whiteText,
	},
	blueDay: {
		container: calStyles.blueContainer,
		text: calStyles.whiteText
	}
};

export default monthRecords;