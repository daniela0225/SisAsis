import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	loginContainer: {
		paddingTop:35,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	appLogo: {
		height: 150,
		width: 150
	},
	text: {
		marginTop: 30,
		marginBottom: 10,
		textTransform: 'capitalize',
		fontSize: 22,
		fontWeight: 'bold',
		color: '#0083ff'
	},
	input: {
		borderWidth: 2,
		borderColor: '#0083ff',
		marginTop: 20,
		width: 250,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 25,
		fontSize: 18,
		textAlign: 'center'
	},
	buttonContainer: {
		marginTop: 40,
		width: 180,
		alignItems: 'center',
		backgroundColor: '#0083ff',
		borderRadius: 25,
		padding: 10
	},
	buttonText: {
		textTransform: 'capitalize',
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white'
	}
});

export default styles;