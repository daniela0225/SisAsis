import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		paddingTop: '10%',
		paddingLeft: '10%',
		paddingRight: '10%',
		marginTop: 15,
		justifyContent: 'flex-start',
		backgroundColor: '#0083ff',
		width: 250,
		height: 50,
		borderRadius: 5,
		//borderWidth: 2,
		//borderColor: 'red',
	},
	image : {
		paddingTop: '10%',
		height: 120,
		width: 120,
	},
	text : {
		paddingTop: '10%',
		color: "#fff",
		//fontWeight: 'bold',
		fontSize: 15,
	},
	textAttribute: {
		//paddingTop: '10%',
		color: "#fff",
		fontWeight: 'bold',
		fontSize: 18,
	}
});

export default styles;