import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	sideMenuContainer: {
		width: '100%',
		height: '100%',
		flexDirection: 'row'
	},
	menuContainer: {
		width: '80%',
		height:'100%',
		backgroundColor: '#0083ff',
		paddingLeft: 30,
		paddingRight: 30,
		paddingBottom: 30
	},
	menuBackground:{
		width: '20%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.3)'
	},
	row: {
		flexDirection: 'row'
	},
	closeButtonContainer: {
		marginTop: 10,
		marginLeft: 20
	},
	closeIcon: {
		height: 40,
		width: 40
	},
	tutorInfoContainer: {
		width: '80%',
		height: 200,
		marginTop: 10,
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