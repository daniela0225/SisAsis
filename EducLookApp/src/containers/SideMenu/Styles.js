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
		marginLeft: '90%'
	},
	closeIcon: {
		height: 30,
		width: 30
	},
	tutorInfoContainer: {
		width: '90%',
		height: 170,
		marginBottom: 20
	},
	tutorIcon: {
		height: 100,
		width: 100,
		borderRadius: 100,
		margin: 10,
	},
	text: {
		color: '#fff',
		fontWeight: 'bold',
		marginBottom: 10
	},
	primaryText: {
		fontSize: 18
	},
	secondaryText: {
		fontSize: 15
	},
	homeButtonContainer: {
		borderColor: '#fff',
		borderWidth: 2,
		marginTop: 10,
		marginBottom: 10,
		alignItems: 'center',
		paddingTop: 5
	},
	studentsInfoContainer: {
		width: '100%',
		height: 200
	},
	settingsContainer: {
		width: '100%',
		height: 120,
		marginTop: 35,
		flexDirection: 'row'
	},
	logoutIcon: {
		height: 30,
		width: 30
	}
});

export default styles;