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

import { isWeekday, isHoliday, isVacationDay } from '../../SpecialFunctions/DateFunctions.js';

class monthRecords extends Component {

	constructor(props){
		super(props);
		this.state = {
			current: new Date(),
			attendances: [],
			selectedDate: '',
			days: {},
			scheduleMaxHours: 0,
			scheduleMaxMins: 0
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

			let configuration = this.props.schoolConf;
			let scheduleOption = this.props.selectedStudent.schedule;

			let schedule = ( scheduleOption == "I")? configuration.kinderSchedule :
						( scheduleOption == "P")? configuration.primarySchedule : configuration.secondarySchedule;

			let checkInHour = schedule.startHour;
			let maxHours = parseInt(checkInHour.substr(0,2),10);
			let maxMins = parseInt(checkInHour.substr(3),10) + schedule.tolerance;

			if( maxMins >= 60 ) {
				maxHours++;
				maxMins = maxMins - 60;
			}

			this.setState({
				scheduleMaxHours: maxHours,
				scheduleMaxMins: maxMins
			});
		})
		.catch((error) => {
			console.log(error);
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
			console.log(error);
			alert('Error al cargar las asistencias.');
		})
	}

	setDays = () => {
		let attendances = this.state.attendances;
		let maxHours = this.state.scheduleMaxHours; 
		let maxMins = this.state.scheduleMaxMins;
		let days = {};

		for(let i = 0; i < attendances.length; i++ ) { 
	
			let date = new Date(attendances[i].date);
			let type = attendances[i].type;

			if( type === 'CHECK_IN' ){
				if( isWeekday(date) ){
					if( ! isHoliday(date) ){
						let dateHours = date.getHours() + 5;
						let dateMins = date.getMinutes();

						days = {
							...days,
							[this.transformDate(date)]: {
								customStyles:	((dateHours < maxHours) || (dateHours == maxHours && dateMins < maxMins ))? 
												customStyles.greenDay : customStyles.yellowDay
							}
						};
					}
				}
			}
		}
		this.setRedDays( days );
	}

	setRedDays = ( days ) => {
		const config = this.props.schoolConf;
		const vacations = config.vacations;
		let confStartDate = new Date(config.startDate);
		confStartDate.setHours(confStartDate.getHours() + 5);
		let confEndDate = new Date(config.endDate);
		confEndDate.setHours(confEndDate.getHours() + 5);

		const current = this.state.current;
		let startDate = new Date(current.getFullYear(), current.getMonth(), 1);
		let endDate = new Date(current.getFullYear(), current.getMonth() + 1, 0);

		if( startDate < confStartDate){
			startDate = new Date(confStartDate);
		}
		if(endDate > confEndDate){
			endDate = new Date(confStartDate);
		}
		if(startDate > confEndDate){
			this.setState({ days: days });
			return;
		}

		while (startDate <= endDate) {
			const tdate = this.transformDate(startDate);
			if ( ! days[tdate] ){
				if( isWeekday(startDate) ){
					if( ! isHoliday(startDate) ){
						if( ! isVacationDay(startDate, vacations)){
							days = {
								...days,
								[tdate]: {
									customStyles: customStyles.redDay
								}
							};
						}
					}
				}
			}
			startDate.setDate(startDate.getDate() + 1);
		}
		this.setState({ days: days });
	}

	arrowPressedHandler = ( direction ) => {
		let current = this.state.current;
		current.setMonth((direction === 'left')?(current.getMonth() - 1):(current.getMonth() + 1));
		this.setState({ current: current });
		this.getMonthRecords();
	}

	transformDate = (date) => {

		let dd = date.getDate();
		let mm = date.getMonth() + 1; 
		let yyyy = date.getFullYear();

		return	yyyy + ((mm < 10)?('-0'):('-')) + mm + ((dd < 10)?('-0'):('-')) + dd;
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