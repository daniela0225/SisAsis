import React, { Component } from 'react';
import styles from './Styles.js';
import { Image, Text, ScrollView, View, ListView, Button} from 'react-native';
import { setActualView } from '../../store/actions/viewActions/index';

import { connect } from 'react-redux';

import axios from '../../Axios/axios';

class teacherProfile extends Component {

	constructor(props){
		super(props);
		this.state = {
			key: Math.random(),
			name: 'Martha',
			last_name: 'Flores Cárdenas',
			school: 'Internacional',
			email: 'mflores.c@gmail.com'
		};
	};
	componentDidMount () {

		const teacherId = this.props.teacherId;
		//const id = this.state.id;
		const token = this.props.token;

		axios.post('profesores/find', { teacherId: teacherId }, {
			headers: { 
				"Authorization": 'Bearer ' + token
			}
		})
		.then((response) => {
			console.log(response.data.teacher);
			this.setState(response.data.teacher);
		})
		.catch((error) => {
			console.log(error);
		})
	}
	onPressButton = () => {
		this.props.onSetActualView("SchoolProfile");
	}
	
	render() {
		return (
			<View>
				<ScrollView contentContainerStyle={styles.container}>
					<View>
						<Image source={image} style={styles.image}/>
					</View>

					<Text style={styles.text}>Nombre:</Text>
						<Text style={styles.textAttribute}> {this.state.name} </Text>
					<Text style={styles.text}>Apellidos:</Text>
						<Text style={styles.textAttribute}> {this.state.last_name} </Text>
					<Text style={styles.text}>Email:</Text>
						<Text style={styles.textAttribute}> {this.state.email} </Text>
					<Text style={styles.text}>Colegio:</Text>
						<Text style={styles.textAttribute}> {this.state.school} </Text>
					

					<View style={styles.button}>
						<Button
						  onPress={this.onPressButton}
						  title="Colegio"
						  color="#841584"
						/>
					</View>

				</ScrollView>
			</View>
		)
	}
}
const mapStateToProps = state => {
	return {
		token: state.users.token,
		teacherId: state.teachers.profileSelectedTeacher
	};
};

const mapDispatchToProps = dispatch => {
	return { 
	onSetActualView: (view) => dispatch(setActualView(view)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(teacherProfile);
