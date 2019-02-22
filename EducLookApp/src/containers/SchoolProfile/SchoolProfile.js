import React, { Component } from 'react';
import styles from './Styles.js';
import image from '../../assets/schoolLogo.png';
import { Image, Text, ScrollView, View, ListView, Button} from 'react-native';
import { setActualView } from '../../store/actions/viewActions/index';
import SchoolListAttibutes from '../../components/SchoolListAttributes/SchoolListAttributes';

import { connect } from 'react-redux';

import axios from '../../Axios/axios';

class SchoolProfile extends Component {

	constructor(props){
		super(props);
		this.state = {
			school: [
				{
					id: Math.random(),
					name: 'Internacional',
					logo: 'pato.png',
					kinder: 'true',
					primary: 'true',
					highschool: 'true'
				}
			],
			schoolConfigurations: [
				{
				    id: Math.random(),
					year: '2019',
					startDate: '2019-03-11T00:00:01Z',
					endDate: '2019-12-20T00:00:01Z',

					kinderSchedule: {
						startHour: '08:00',
						endHour: '13:00',
						tolerance: '15'
					},
					primarySchedule: {
						startHour: '07:45',
						endHour: '14:45',
						tolerance: '15'
					},
					secondarySchedule: {
						startHour: '07:45',
						endHour: '15:45',
						tolerance: '15'
					},
					vacations: [
						{
							start: '2019-05-27T00:00:01Z',
							end: '2019-05-31T00:00:01Z'
						},
						{
							start: '2019-07-26T00:00:01Z',
							end: '2019-08-12T00:00:01Z'
						},
						{
							start: '2019-10-21T00:00:01Z',
							end: '2019-10-25T00:00:01Z'
						}
					]
				}
			]
		};
	};
	render() {
		return (
			<View>
				<ScrollView contentContainerStyle={styles.container}>
					<View>
						<Image source={image} style={styles.image}/>
					</View>

					<Text style={styles.textAttribute}> {this.state.school.name} </Text>
					<Text style={styles.text}>Kinder:</Text>
						<Text style={styles.textAttribute}> {this.state.kinderSchedule} </Text>
					<Text style={styles.text}>Primaria:</Text>
						<Text style={styles.textAttribute}> {this.state.primarySchedule} </Text>
					<Text style={styles.text}>Secundaria:</Text>
						<Text style={styles.textAttribute}> {this.state.secondarySchedule} </Text>
				</ScrollView>
			</View>
		)
	}
}
export default SchoolProfile;
