import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	listItem: {
		flex: 1,
		flexDirection: 'column',
		width: "100%",
		padding: 5
	},
	studentOptionsButton: {
		borderBottomColor: '#fff',
		borderBottomWidth: 2,
		flexDirection: 'row'
	},
	nameContainer: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#fff',
		padding: 5,
		width: '90%'
	},
	triangleIcon: {
		height: 30, 
		width: 30
	},
	triangleIconSelected: {
		transform: [{ rotate: '90deg'}]
	},
	option: {
		margin: 1,
		padding: 10,
		flexDirection: 'row'
	},
	optionIcon: {
		margin: 5,
		height: 10,
		width: 10,
		borderRadius: 10,
		borderWidth: 2,
		backgroundColor: 'transparent',
		borderColor: '#fff'
	},
	optionIconSelected: {
		backgroundColor: '#fff'
	},
	optionText: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#fff'
	}
});

export default styles;