import React, { Component } from 'react';
import styles from './Styles.js';
import { Image, Text, ScrollView, View, ListView} from 'react-native';

import axios from '../../Axios/axios';

import { connect } from 'react-redux';

class schoolProfile extends Component {

	constructor(props){
		super(props);
		this.state = {
			name: '',
			logo: '',
			kinder: '',
			primary: '',
			highschool: ''
		};
		/*
		_id: mongoose.Schema.Types.ObjectId,
		school: { type: mongoose.Schema.Types.ObjectId, ref:'School', required: true },
		year: { type:Number, required:true },
		startDate: { type:Date, required:true },
		endDate: { type:Date, required:true },
		kinderSchedule: { type: schedule },
		primarySchedule: { type: schedule },
		secondarySchedule: { type: schedule },
		vacations: { type:[period], required: true }

	const schedule = mongoose.Schema({
		startHour: { type: String, minlength: 5, maxlength: 5, required: true }, 
		endHour: { type: String, minlength: 5, maxlength: 5, required: true },
		tolerance:  { type: Number, min: 5, max: 30, required: true }
	});

	const period = mongoose.Schema({
		start: { type:Date, required:true},
		end: { type:Date, required:true}
	});
	*/
	};

	render() {
		return (
			<View style={styles.tutorProfileContainer}>
				<View style={styles.infoContainer}>
					<View style={styles.imageContainer}>
						<Image source={image} style={styles.image} />
					</View>
					<Text style={styles.text}> Nombre: </Text>
						<Text style={styles.text}> { this.state.name} </Text>
					<Text style={styles.text}> kinder: </Text>
						<Text style={styles.text}> { this.state.kinder } </Text>
					<Text style={styles.text}> primary: </Text>
						<Text style={styles.text}> { this.state.primary } </Text>
					<Text style={styles.text}> highschool: </Text>
						<Text style={styles.text}> { this.state.highschool } </Text>
				</View>
			</View>
		)
	}
}

export default schoolProfile;
