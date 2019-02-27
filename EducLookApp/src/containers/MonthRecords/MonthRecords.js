import React, { Component } from 'react';
import axios from '../../Axios/axios.js';
import styles from './Styles.js';
import { calStyles, customStyles } from './CalendarStyles.js';

import {	View, ScrollView, Image,
			Text, TextInput, 
			TouchableOpacity,
			Animated } from 'react-native';

import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import DayInfoModal from '../../components/DayInfoModal/DayInfoModal';

import { connect } from 'react-redux';
import { setSchoolConfig } from '../../store/actions/schoolActions/index.js';

import { isWeekday, isHoliday, isVacationDay } from '../../SpecialFunctions/DateFunctions.js';

class monthRecords extends Component {

	constructor(props){
		super(props);
		this.state = {
			current: new Date(),
			selectedDate: '',
			selectedISODate: null,
			selectedOutISODate: null,
			days: {},
			outDates: {},
			scheduleMaxHours: 0,
			scheduleMaxMins: 0,
			loading: true
		};
	};

	componentDidMount () {
		this.getSchoolConfiguration();
		this.getMonthRecords();
	}

	getSchoolConfiguration = () => {

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
			this.setDays( attendances );
		})
		.catch((error) => {
			console.log(error);
			alert('Error al cargar las asistencias.');
		});
	}

	setDays = ( attendances ) => {
		let maxHours = this.state.scheduleMaxHours; 
		let maxMins = this.state.scheduleMaxMins;
		let days = {};
		let outDates = {};

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
												customStyles.greenDay : customStyles.yellowDay ,
								isoDate: date
							}
						};
					}
				}
			} else {
				outDates = {
							...outDates,
							[this.transformDate(date)]: date
						}
			}
		}
		this.setState({ outDates: outDates });
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
			this.setState({ days: days, loading: false });
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
									customStyles: customStyles.redDay,
									isoDate: null
								}
							};
						}
					}
				}
			}
			startDate.setDate(startDate.getDate() + 1);
		}
		this.setState({ days: days, loading: false });
	}

	arrowPressedHandler = ( direction ) => {
			let current = this.state.current;
			current.setMonth((direction === 'left')?(current.getMonth() - 1):(current.getMonth() + 1));
			this.setState({ current: current, loading: true });
			this.getMonthRecords();
	}

	transformDate = (date) => {

		let dd = date.getDate();
		let mm = date.getMonth() + 1; 
		let yyyy = date.getFullYear();

		return	yyyy + ((mm < 10)?('-0'):('-')) + mm + ((dd < 10)?('-0'):('-')) + dd;
	}

	dayPressedHandler = ( day ) => {
		const days = this.state.days;
		const outDates = this.state.outDates;
		const dateString = day.dateString;

		if( days[dateString] == null) return;
		if( days[dateString].isoDate == null){
			return;
		}

		const selectedISODate = days[dateString].isoDate;
		let ISODateToDate = new Date(selectedISODate);

		ISODateToDate.setHours( ISODateToDate.getHours() + 5 );

		const selectedOutISODate = outDates[dateString];
		let ISOOutDateToDate = new Date (selectedOutISODate);
		ISOOutDateToDate.setHours( ISOOutDateToDate.getHours() + 5 );

		this.setState( { 
			showInfoModal: true,
			selectedDate: dateString,
			selectedISODate: ISODateToDate, 
			selectedOutISODate: ISOOutDateToDate } );
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
			<View style={ styles.monthRecordsContainer } pointerEvents={(this.state.loading == false )?"auto":"none"} >
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
					markedDates={ days }
					hideExtraDays={true}
					onDayPress={this.dayPressedHandler}
					onPressArrowLeft={() => { this.arrowPressedHandler('left') }}
					onPressArrowRight={() => { this.arrowPressedHandler('right') }}
				/>
				<DayInfoModal hide={this.hideDayInfoModal} show={this.state.showInfoModal} date={ this.state.selectedISODate } outDate={ this.state.selectedOutISODate} />
			</View>
		);
	}
}

LocaleConfig.locales['es'] = {
  monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
  monthNamesShort: ['Ene.','Feb.','Mar','Abr.','May.','Jun.','Jul.','Ago.','Sep.','Oct.','Nov.','Dic.'],
  dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
  dayNamesShort: ['Dom.','Lun.','Mar.','Mie.','Jue.','Vie.','Sab.']
};

LocaleConfig.defaultLocale = 'es';

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