import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from './Styles.js';

import { connect } from 'react-redux';
import { setProfileSelectedStudent } from '../../../store/actions/studentActions/index';
import { setActualView } from '../../../store/actions/viewActions/index';

import axios from '../../../Axios/axios';

class listItem extends Component{

	constructor (props) {
		super(props);
		this.state = {
			id: props.id,
			completeName: props.completeName,
			attendances: 0,
			absences: 0,
			absencesPercentage: 0,
			absencesBarValue: new Animated.Value(0)
		}
	}

	componentDidMount () {
		this.getAttendancesCount();
	}

	getAttendancesCount = () => {
		const token = this.props.token;
		const id = this.state.id;

		axios.get('registros/countAttendancesByStudent?studentId=' + id,{
			headers: { 
				"Authorization": 'Bearer ' + this.props.token
			}
		})
		.then((response) => {
			//handle success
			this.setState({ 
				totalExpectedAttendances: response.data.totalExpectedAttendances,
				expectedAttendances: response.data.expectedAttendances,
				attendances: response.data.attendances,
				absences: response.data.absences
			});
			let absences = this.state.absences;
			let totalExpecAtt = this.state.totalExpectedAttendances;
			
			let absencesPercentage = Math.round((absences*100)/totalExpecAtt);
			if (absencesPercentage < 0) absencesPercentage = 0; 
			this.setState({
				absencesPercentage: absencesPercentage
			});
			this.fillAbsencesBar(absencesPercentage);
		})
		.catch( (response) => {
			//handle error
			console.log(response);
			alert("Ocurrio un error al obtener las asistencias.");
		});
	}

	fillAbsencesBar = (absences) => {
		absences = absences*(2);

		Animated.sequence([
			Animated.timing(this.state.absencesBarValue, {
				toValue: absences,
				duration: 1000,
				delay: 0
			})
		]).start();
	}

	onPressHandler = () => {
		this.props.onSetSelectedStudent(this.state.id);
		this.props.onSetActualView("StudentProfile");
	}

	render () {
		const percentage = this.state.absencesBarValue;
		return (
			<TouchableOpacity
				onPress={this.onPressHandler}>
				<View style={styles.listItem}>
					<View style={styles.barContainer}>
						<Animated.View 
							style={{
								backgroundColor: '#ffbf00',
								width: percentage,
								height: 26,
								borderRadius: 100
							}}/>
							<Animated.Text style={styles.absencesText}>{this.state.absencesPercentage} %</Animated.Text>
					</View>
					<Text style={styles.nameContainer}>{this.state.completeName}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const mapStateToProps = state => {
	return {
		token: state.users.token
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetSelectedStudent: (id) => dispatch(setProfileSelectedStudent(id)),
		onSetActualView: (view) => dispatch(setActualView(view))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(listItem);