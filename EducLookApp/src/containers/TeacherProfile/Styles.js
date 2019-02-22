import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container:{
		flex: 1,
		//alignItems: 'center',
		paddingTop: '5%',
		paddingLeft: '10%',
		paddingRight: '10%',
		marginTop: 15,
		justifyContent: 'flex-start',
		backgroundColor: '#0083ff',
		//backgroundColor: '#FBBA00', //color amarillo
		width: 278,
		height: 50,
		borderRadius: 5,
		//borderWidth: 2,
		//borderColor: 'red',
	},
	image : {
		paddingTop: '5%',
		height: 160,
		width: 160,
	},
	text : {
		paddingTop: '5%',
		color: "#fff",
		//fontWeight: 'bold',
		fontSize: 15,
	},
	textAttribute: {
		//paddingTop: '10%',
		color: "#fff",
		fontWeight: 'bold',
		fontSize: 18,
	},
	button: {
		paddingTop: '10%',
	}
});

export default styles;