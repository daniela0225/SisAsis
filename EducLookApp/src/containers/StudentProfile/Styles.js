import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	studentProfileContainer: {
		backgroundColor: "#0083ff",
		borderColor:'#0083ff',
		borderRadius: 10,
		borderWidth: 2,
		padding: 15,
		paddingLeft: 35,
		paddingRight: 35,
		marginTop: 15
	},
	infoContainer: {
		paddingBottom: 15
	},
	imageContainer: {
		alignItems: 'center'
	},
	image: {
		width: 120,
		height: 120,
		borderWidth: 2,
		borderColor:'#fff',
		borderRadius: 15,
		margin: 10
	},
	label: {
		textAlign: 'left'
	},
	bold: {
		fontWeight: 'bold'
	},
	text: {
		color: '#fff',
		fontSize: 16,
		margin: 2
	}
});

export default styles;