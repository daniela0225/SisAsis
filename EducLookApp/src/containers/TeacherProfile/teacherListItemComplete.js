import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from './Styles.js';

import { connect } from 'react-redux';
import { setProfileSelectedTeacher } from '../../store/actions/teacherActions/index';
import { setActualView } from '../../../store/actions/viewActions/index';

import axios from '../../../Axios/axios';

class listItem extends Component{

	constructor (props) {
		super(props);
		this.state = {
			id= props.id,
			name= props.name,
			last_name= props.last_name,
			email= props.email,
			school= props.school,
		}
	}

	componentDidMount () {

		const teacherId = this.props.id;
		const token = this.props.token;

		axios.post('profesores/find', { teacherId: id }, {
			headers: { 
				"Authorization": 'Bearer ' + token
			}
		})
		.then((response) => {
			this.setState(response.data.student);
		})
		.catch((error) => {
			console.log(error);
		})
	}

	onPressHandler = () => {
		this.props.onSetSelectedTeacher(this.state.schoolId);
		this.props.onSetActualView("SchoolProfile");
	}

	render () {
		return (
			<TouchableOpacity
				onPress={this.onPressHandler}>
				<View style={styles.listItem}>
					<View style={styles.barContainer}>
					</View>
					<Text style={styles.nameContainer}>{this.state.name}</Text>
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
		onSetSelectedTeacher: (id) => dispatch(setProfileSelectedTeacher(id)),
		onSetActualView: (view) => dispatch(setActualView(view))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(listItem);