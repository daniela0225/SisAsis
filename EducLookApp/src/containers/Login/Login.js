import React, { Component } from 'react';
import axios from '../../Axios/axios.js';
import appLogo from '../../assets/appLogo.png';
import styles from './Styles.js';
import {	View, ScrollView, Image,
			Text, TextInput, 
			TouchableOpacity,
			Animated } from 'react-native';

import Divider from '../../components/Divider/Divider';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			imgBorderRadius: new Animated.Value(2),
			imgSize: new Animated.Value(150)
		};

		this.animate();
	}

	animate = () => {
		Animated.sequence([
			Animated.timing(this.state.imgBorderRadius, {
				toValue: 70,
				duration: 1000,
				delay: 0
			}),
			Animated.timing(this.state.imgBorderRadius, {
				toValue: 25,
				duration: 1000,
				delay: 0
			})
		]).start(() => {
			this.animate();
		});
	}
	
	attributeHandler = (name, value) => {
		this.setState( { [name]: value } );
	}

	submitHandler = () => {
		/*
		const data = this.state;
		let url = 'usuarios/login';

		axios({
			method: 'post',
			url: url,
			data: data,
			config: { headers: {'Content-Type': 'multipart/form-data'} }
		})
		.then((response) => {
			//handle success
			alert('token: ' + response.data.token);
		})
		.catch((response) => {
		  //handle error
			alert('Usuario o contraseña incorrectos.');
		});
		*/
		this.props.setView('Login');
	}

	render() {
		let imgBorderRadius = this.state.imgBorderRadius;
		let imgSize = this.state.imgSize;

		return (
				<ScrollView contentContainerStyle={styles.loginContainer} behavior='padding' enabled>
					<Divider type='top'/>
					<Animated.View
						style={ {
							borderWidth: 2,
							borderColor: '#0083ff',
							borderRadius: imgBorderRadius
						} }>
						<Animated.Image resizeMode='contain' source={appLogo} 
							style={{
									height: imgSize, 
									width: imgSize
							}} />
					</Animated.View>
					<Text style={styles.text}> Inicio de Sesión </Text>
					<TextInput
						placeholder='E-mail'
						ref='emailInput'
						value={this.state.email}
						onChangeText={(value) => {this.attributeHandler('email',value)}}
						style={styles.input}
					/>
					<TextInput
						placeholder='Contraseña'
						ref='passwordInput'
						value={this.state.password}
						onChangeText={(value) => {this.attributeHandler('password',value)}}
						style={styles.input}
						secureTextEntry={true}
					/>
					<TouchableOpacity onPress={this.submitHandler} style={styles.buttonContainer}>
						<Text style={styles.buttonText}> Ingresar </Text>
					</TouchableOpacity>
					<Divider type='bottom'/>
				</ScrollView>
		);
	}
}

export default Login;