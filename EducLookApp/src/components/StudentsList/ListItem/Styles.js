import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	listItem: {
		flex: 1,
		flexDirection: 'column',
		width: "100%",
		height: 65,
		marginBottom: 10,
		padding: 10,
		backgroundColor: "#0083ff",
		alignItems: "center",
		borderRadius: 20
	},
	barContainer: {
		backgroundColor: '#fff',
		//width: "100%",
		width: 200,
		height: 30,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: '#ffbf00'
	},
	absencesText: {
		color: '#0083ff',
		fontSize: 18,
		fontWeight: 'bold',
		justifyContent:'center',
		alignItems:'center',
		alignSelf:'center',
		position:'absolute'
	},
	nameContainer: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff'
	}
});

export default styles;