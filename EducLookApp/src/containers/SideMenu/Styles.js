import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
		sideMenuContainer: {
		width: '80%',
		height:'100%',
		backgroundColor: '#0083ff',
		padding: 30
	},
	tutorInfoContainer: {
		width: '100%',
		height: 200,
		paddingTop: 10,
		marginBottom: 30
	},
	tutorIcon: {
		height: 120,
		width: 120,
		borderRadius: 100,
		margin: 10
	},
	text: {
		color: '#fff',
		fontWeight: 'bold',
		marginBottom: 10
	},
	primaryText: {
		fontSize: 20
	},
	secondaryText: {
		fontSize: 15
	},
	studentsInfoContainer: {
		width: '100%',
		height: 320
	},
	settingsContainer: {
		width: '100%',
		height: 120,
		paddingTop: 20,
		flexDirection: 'row'
	},
	logoutIcon: {
		height: 30,
		width: 30
	}
});

export default styles;