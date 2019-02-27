import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import styles from './Styles.js';
import triangleIcon from './triangleIcon.png';

import { connect } from 'react-redux';
import { setMenuSelectedStudent } from '../../../store/actions/studentActions/index';
import { setActualView } from '../../../store/actions/viewActions/index';

class listItem extends Component{

	constructor (props) {
		super(props);
		this.state = {
			id: props.id,
			fullName: props.fullName,
			schedule: props.schedule,
			selected: false
		}
	}

	onSelectHandler = () => {
		let selected = !this.state.selected;
		this.setState({selected: selected});
	}

	optionSelectedHandler = (view) => {
		this.props.onSetMenuSelectedStudent({ id: this.state.id, fullName: this.state.fullName, schedule: this.state.schedule });
		this.props.onSetActualView(view);
		this.props.hideMenu();
		console.log(this.props.selectedStudent);
	}

	render () {
		let fn = this.state.fullName
		let fullName = (fn != null)?
			fn.substr(0,fn.lastIndexOf(' ')):
			"";
		let isSelected = true;

		let selectedStudent = this.props.selectedStudent;
		if (selectedStudent !== undefined){
			isSelected = (selectedStudent.id === this.state.id);
		}

		let options = (this.state.selected == false)? (<View></View>) : (
					<View>
						<TouchableOpacity style={styles.option} onPress={ () => {this.optionSelectedHandler('DailyRecords');} }>
							<View 
								style={[
										styles.optionIcon,
										(this.props.selectedOption === 'DailyRecords' && isSelected)?
										styles.optionIconSelected : null
									]} />
							<Text style={styles.optionText}>Asistencia del Día</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.option} onPress={ () => {this.optionSelectedHandler('WeekRecords');}}>
							<View 
								style={[
										styles.optionIcon,
										(this.props.selectedOption === 'WeekRecords' && isSelected)?
										styles.optionIconSelected : null
									]} /> 
							<Text style={styles.optionText}>Asistencias Semanales</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.option} onPress={ () => {this.optionSelectedHandler('MonthRecords');} }>
							<View
								style={[
										styles.optionIcon,
										(this.props.selectedOption === 'MonthRecords' && isSelected)?
										styles.optionIconSelected : null
									]} /> 
							<Text style={styles.optionText}>Asistencias Mensuales</Text>
						</TouchableOpacity>
					</View>
					);

		return (
			<View style={styles.listItem}>
				<TouchableOpacity style={styles.studentOptionsButton} 
					onPress={ this.onSelectHandler } >
					<Image resizeMode='contain' source={triangleIcon} 
						style={[styles.triangleIcon,(this.state.selected==true)?styles.triangleIconSelected:{}]} /> 
					<Text style={styles.nameContainer}>{fullName}</Text>
				</TouchableOpacity>
				<View>
					{options}
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedStudent: state.students.menuSelectedStudent,
		selectedOption: state.views.actualView
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetMenuSelectedStudent: (item) => dispatch(setMenuSelectedStudent(item)),
		onSetActualView: (view) => dispatch(setActualView(view))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(listItem);
