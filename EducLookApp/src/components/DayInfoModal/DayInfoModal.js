import React, { Component } from 'react';
import axios from '../../Axios/axios.js';
import styles from './Styles.js';
import { View, Text, Button, TouchableOpacity, Animated, Modal } from 'react-native';

import { connect } from 'react-redux';

class dayInfoModal extends Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	transformDate = (date) => {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();

		return year + '-' + ((month < 10)? '0' + month : month) + '-' + ((day < 10)? '0' + day : day);
	}

	getDay = (date) => {
		switch (date.getDay()) {
			case 0: return 'Domingo';break;
			case 1: return 'Lunes';break;
			case 2: return 'Martes';break;
			case 3: return 'Miércoles';break;
			case 4: return 'Jueves';break;
			case 5: return 'Viernes';break;
			case 6: return 'Sábado';break;
		}
	}

	getTime = (date) => {
		const hours = date.getHours();
		const minutes = date.getMinutes();

		return ((hours < 10)?'0'+hours:hours) + ':' + ((minutes < 10)?'0'+minutes:minutes) + ((hours < 12)?' A.M.':' P.M.');
	}

	render() {
		
		let headers = this.props.headers;

		let date = this.props.date;
		let outDate = this.props.outDate;


		return (
			<Modal onRequestClose={ this.props.hide } visible={this.props.show == true} animationType='fade' transparent={true}>
				<View style={styles.infoModalContainer}>
					<View style={styles.modalContainer}>
						<Text style={styles.infoDate}>
							{( date !== null )?this.transformDate(date):'00-00-00' }
						</Text>
						<Text style={styles.infoTitle}>
							{( date !== null )?this.getDay(date):'Lunes' }
						</Text>
						<View style={styles.infoTextContainer}>
							<Text style={styles.infoText}>
								Hora de entrada: {( date !== null )?this.getTime(date):'00:00 A.M.' }
							</Text>
							<Text style={styles.infoText}>
								Hora de salida:  {( outDate !== null )?this.getTime(outDate):'00:00 A.M.' }
							</Text>
						</View>
						<TouchableOpacity style={styles.closeButton} onPress={ this.props.hide }>
							<Text style={styles.buttonText}>Cerrar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		);
	};
}

const mapStateToProps = state => {
	return {
		token: state.users.token,
		//selectedStudent:
	};
};

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(dayInfoModal);