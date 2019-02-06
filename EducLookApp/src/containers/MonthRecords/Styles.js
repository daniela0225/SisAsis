import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	monthRecordsContainer : {
		height: '70%',
		width: '95%',
		marginTop: 30,
		flexDirection: 'column',
		alignItems: 'center'
	},
	text : {
		color: '#0083ff',
		fontSize: 17,
		fontWeight: 'bold',
		marginBottom: 15
	},
	legendContainer : {
		marginTop: 15,
		marginBottom: 20,
		flexDirection: 'column'
	},
	legendLine : {
		flexDirection: 'row',
		margin: 5
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
		fontSize: 15,
		fontWeight: 'bold'
	}
});

export default styles;