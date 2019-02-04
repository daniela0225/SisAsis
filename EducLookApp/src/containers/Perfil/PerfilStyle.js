import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		borderColor:'#0083ff',
		borderRadius: 10,
		borderWidth: 2,
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 15,
		width: 290,
		height: 300,
	},
	containertable: {
      width: '100%',
      padding: 10,
   },
	image: {
		width: 130,
		height: 130,
		borderWidth: 5,
		borderColor:'#0083ff',
		borderRadius: 80,
	},
	placeImage:{
		width: 80,
		height: 80
	},
	textName: {
		color: '#0083ff',
		padding: 15,
		alignItems: 'center',
	    fontWeight: 'bold',
	    fontSize: 25,
	},
   	text: {
		color: '#4f603c',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 1.5,
      
   	},
	textAttributes: {
		color: 'black',
		//fontWeight: 'bold',
	    fontSize: 15,
	    padding: 1,

	},
	listContainer: {
		width: "100%"
	}
});

export default styles;