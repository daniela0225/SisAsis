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

	getData = () => {

	}

	render() {
		
		let headers = this.props.headers;

		return (
			<Modal onRequestClose={ this.props.hide } visible={this.props.show == true} animationType="fade" transparent={true}>
				<View style={styles.infoModalContainer}>
					<View style={styles.modalContainer}>
						<Text style={styles.infoDate}>03/03/2019</Text>
						<Text style={styles.infoTitle}>Lunes</Text>
						<View style={styles.infoTextContainer}>
							<Text style={styles.infoText}>Hora de entrada: 07:55 A.M.</Text>
							<Text style={styles.infoText}>Hora de salida:  14:35 P.M.</Text>
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