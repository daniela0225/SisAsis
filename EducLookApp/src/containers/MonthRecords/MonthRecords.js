import React, { Component } from 'react';
import axios from '../../Axios/axios.js';
import styles from './Styles.js';
import { calStyles, customStyles } from './CalendarStyles.js';

import {	View, ScrollView, Image,
			Text, TextInput, 
			TouchableOpacity,
			Animated } from 'react-native';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import DayInfoModal from '../../components/DayInfoModal/DayInfoModal';

import { connect } from 'react-redux';
import { setSchoolConfig } from '../../store/actions/schoolActions/index.js';

import { isHoliday, isWeekday } from '../../SpecialFunctions/DateFunctions.js';

class monthRecords extends Component {

	constructor(props){
		super(props);
		this.state = {
			current: new Date(),
			attendances: [],
			selectedDate: '',
			days: {}
		};
	};

	componentDidMount () {
		this.getSchoolConfiguration();
		this.getMonthRecords();
	}

	getSchoolConfiguration = () => {
		const schoolId = this.props.schoolId;
		const token = this.props.token;

		axios.post('configuraciones/appSchoolConfig', 
			{
				schoolId: schoolId
			},
			{
				headers: { 
					"Authorization": 'Bearer ' + token
			}
		})
		.then((response) => {
			const config = response.data.school;
			this.props.onSetSchoolConfig(config);
		})
		.catch((error) => {
			alert('Error al obtener el horario de estudios.');
		})
	}

	getMonthRecords = () => {
		const studentId = this.props.selectedStudent.id;
		const currentDate = this.state.current;
		const token = this.props.token;

		axios.post('registros/attendancesByMonth', 
			{
				studentId: studentId,
				currentDate: currentDate
			}, 
			{
				headers: { 
					"Authorization": 'Bearer ' + token
			}
		})
		.then((response) => {
			const attendances = response.data;
			this.setState({
				attendances: attendances
			});
			this.setDays();
		})
		.catch((error) => {
			alert('Error al cargar las asistencias.');
		})
	}

	setDays = () => {
		let attendances = this.state.attendances;
		let configuration = this.props.schoolConf;
		
		let days = {};

		for(let i = 0; i < attendances.length; i++ ) { 
			
			let date = new Date(attendances[i].date);
			let type = attendances[i].type;

			if( type === 'CHECK_IN' ){
				if( isWeekday(date) ){
					if( ! isHoliday(date) ){
						days = {
							...days,
							[this.transformDate(date)]: {customStyles: customStyles.greenDay}
						};
					}
				}
			}
		}

		this.setState({ days: days });
	}

	arrowPressedHandler = ( direction ) => {
		let current = this.state.current;
		if(direction == 'left'){
			current.setMonth( current.getMonth() - 1 );
		}else if (direction == 'right'){
			current.setMonth( current.getMonth() + 1 );
		}
		this.setState({ current: current });
		this.getMonthRecords();
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
		this.setState( { selectedDate: newDate, showInfoModal: true } );
	}

	hideDayInfoModal = () => {
		this.setState({ showInfoModal : false});
	}

	render() {
		let current = this.state.current;
		let days = this.state.days;
		let selectedDate = this.state.selectedDate;

		days = {...days, [selectedDate]: {customStyles: customStyles.blueDay}}
		
		return (
			<View style={ styles.monthRecordsContainer }>
				<Text style={styles.title}>
					Registros de {this.props.selectedStudent.fullName.substring(0,this.props.selectedStudent.fullName.lastIndexOf(' '))}
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
				<DayInfoModal hide={this.hideDayInfoModal} show={this.state.showInfoModal} />
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		token: state.users.token,
		selectedStudent: state.students.menuSelectedStudent,
		schoolId: state.schools._id,
		schoolConf: state.schools.configuration
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetSchoolConfig: (config) => dispatch(setSchoolConfig(config))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(monthRecords);