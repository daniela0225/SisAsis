import React, { Component } from 'react';
import axios from '../../Axios/axios.js';

import appLogo from '../../assets/appLogo.jpg';
import styles from './Styles.js';
import {	View, ScrollView, Image,
			Text, TextInput,
			TouchableOpacity,
			Animated	} from 'react-native';

import Divider from '../../components/Divider/Divider';

import { connect } from 'react-redux';
import { signIn } from '../../store/actions/userActions/index';
import { setActualView } from '../../store/actions/viewActions/index';

import { AsyncStorage } from 'react-native';

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
				toValue: 1,
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

	componentDidMount = () => {
		AsyncStorage.getItem('USER_CREDENTIALS', (err, result) => {
			const userData = JSON.parse(result);
			if(userData !== null){
				this.setState({
					email: userData.email,
					password: userData.password
				});
				this.submitHandler();
			}
		});
	}

	submitHandler = () => {
		const data = {
			email: this.state.email,
			password: this.state.password
		};

		axios.post( 'usuarios/login', data )
		.then((response) => {
			//handle success
			AsyncStorage.removeItem('USER_CREDENTIALS', () => {
				AsyncStorage.setItem('USER_CREDENTIALS', JSON.stringify(data), () => {
					this.props.onSignIn(response.data.token);
					this.props.onSetActualView('Home');
				});
			});
		})
		.catch( (response) => {
		  //handle error
			alert('Usuario o contraseña incorrectos.');
		});
	}

	render() {
		let imgBorderRadius = this.state.imgBorderRadius;
		let imgSize = this.state.imgSize;

		return (
				<ScrollView contentContainerStyle={styles.loginContainer} behavior='padding' enabled>
					<Divider type='top'/>
					<Animated.View
						style={ {
							borderWidth: 4,
							borderColor: '#FBBA00',
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

const mapStateToProps = state => {
	return {
		token: state.users.token
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSignIn: (token) => dispatch(signIn(token)),
		onSetActualView: (view) => dispatch(setActualView(view))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);