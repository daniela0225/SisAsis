import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	monthRecordsContainer : {
		height: '70%',
		width: '95%',
		marginTop: 15,
		flexDirection: 'column'
	},
	title: {
		color: '#0083ff',
		fontSize: 15,
		fontWeight: 'bold',
		marginBottom: 5
	},
	text : {
		color: '#0083ff',
		fontSize: 15,
		marginBottom: 5
	},
	legendTitle: {
		color: '#0083ff',
		fontSize: 15,
		marginBottom: 5,
		fontWeight: 'bold'
	},
	legendContainer : {
		marginTop: 5,
		marginBottom: 15,
		flexDirection: 'row',
		alignItems: 'center'
	},
	legendLineIcon: {
		width: 15,
		height: 15,
		borderRadius: 15,
		marginLeft: 15
	},
	colorGreen: {
		backgroundColor: '#14ff56'
	},
	colorYellow: {
		backgroundColor: '#FBBA00'
	},
	colorRed: {
		backgroundColor: '#ff1447'
	},
	legendLineText: {
		color: '#0083ff',
		fontSize: 15
	}
});

export default styles;