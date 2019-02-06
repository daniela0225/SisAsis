import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	homeContainer: {
		paddingTop: '10%',
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: 300
	},
	schoolName: {
		marginTop: 15,
		marginBottom: 10,
		fontSize: 20,
		fontWeight: 'bold',
		color: '#0083ff'
	},
	textContainer: {
		marginBottom: 15,
		fontSize: 17,
		fontWeight: 'bold',
		color: '#0083ff'
	},
	schoolLogoContainer: {
		padding: 10,
		borderRadius: 20,
		borderWidth: 2,
		borderColor: '#0083ff'
	},
	schoolLogo: {
		width: 120,
		height: 120
	},
	studentsListContainer: {
		width: '100%'
	}
});

export default styles;