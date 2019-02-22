import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: '5%',
		paddingRight: '10%',
		paddingLeft: '10%',
		alignItems: 'center',
		justifyContent: 'flex-start',
		//backgroundColor: 'grey',
		width: 250,
		height: 50,
		//borderRadius: 2,
		//borderWidth: 2,
		//borderColor: 'red',
	},
	viewContainer: {
		backgroundColor: '#0083ff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: 250,		//ancho
		height: 380,	//altura
		borderRadius: 10,
	},
	name: {
		fontWeight: 'bold',
    	color: '#0083ff',
    	//paddingTop: '5%',
    	fontSize: 25,
	},
	last_name: {
		fontWeight: 'bold',
    	color: '#0083ff',
    	paddingBottom: '10%',
    	fontSize: 20,
	},
	day: {
		paddingTop: '15%',
		fontSize: 35,
    	fontWeight: 'bold',
    	color: '#fff',
    	textAlignVertical :  "center"
	},
	date: {
		color: '#fff',
		fontSize: 20,
		margin: 10
	},
	textInOut: {
		fontSize: 20,
		marginRight: 5,
		paddingLeft: '10%',
		paddingTop:'10%',
		paddingBottom:'10%',
		color: 'white',
		//transform: [{ rotate: '-90deg'}]
	},
	viewRow: {
		flexDirection: 'row',
		margin: 5,
		borderRadius: 10,
		//borderWidth: 5,
		//borderColor: 'red',
	},
	viewIn: {
		flexDirection: 'row',
		borderRadius: 5,
		marginRight: 10,
		marginLeft: 10,
		alignItems: 'center',
		backgroundColor: '#0bed0b',
	},
	textIn: {
		alignItems: 'center',
		//padding:'10%',
		marginRight: 15,
		fontSize: 20,
		color: 'white',
	},
	viewOut: {
		borderRadius: 5,
		flexDirection: 'row',
		marginRight: 10,
		marginLeft: 10,
		alignItems: 'center',
		backgroundColor: '#ff1447',
	},
	textOut: {
		//padding:'10%',
		marginRight: 15,
		marginLeft: 0,
		alignItems: 'center',
		fontSize: 20,
		color: 'white',
	}
});

export default styles;