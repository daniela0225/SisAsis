import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	divider: {
		borderRadius: 10,
		backgroundColor: '#1769ed',
		width: 300,
		height: 3
	},
	topDivider: {
			marginTop: 15,
			marginBottom: 30
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
		color: '#1769ed'
	},
	input: {
		borderWidth: 2,
		borderColor: '#1769ed',
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
		backgroundColor: '#1769ed',
		borderRadius: 25,
		padding: 10
	},
	buttonText: {
		textTransform: 'capitalize',
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white'
	},
	bottomDivider: {
		marginTop: 90
	}
});

export default styles;