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
	legendContainer : {
		marginTop: 5,
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