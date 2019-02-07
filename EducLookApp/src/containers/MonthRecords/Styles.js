import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	monthRecordsContainer : {
		height: '70%',
		width: '95%',
		marginTop: 20,
		flexDirection: 'column'
	},
	title: {
		color: '#0083ff',
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10
	},
	text : {
		color: '#0083ff',
		fontSize: 15,
		marginBottom: 10
	},
	legendContainer : {
		marginTop: 10,
		marginBottom: 10,
		flexDirection: 'column'
	},
	legendTitle: {
		color: '#0083ff',
		fontSize: 15,
		marginBottom: 5,
		fontWeight: 'bold'
	},
	legendLine : {
		flexDirection: 'row',
		margin: 3
	},
	legendLineIcon: {
		width: 20,
		height: 20,
		borderRadius: 20
	},
	colorGreen: {
		backgroundColor: '#00ff0c'
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