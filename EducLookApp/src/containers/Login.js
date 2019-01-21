import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class Login extends Component {

	state = {
		email: '',
		password: '' 
	}

	attributeHandler = (name, value) => {
		this.setState( [name]: value );
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
		          placeholder="E-mail"
		          value={this.state.email}
		          onChangeText={(value) => {this.attributeHandler('email',value)}}
		          style={styles.emailInput}
		        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 35,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start"
	}
	emailInput: {
		width:
	}
});

export default Login;