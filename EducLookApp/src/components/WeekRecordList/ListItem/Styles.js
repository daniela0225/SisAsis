import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({

	listItemContainer: {
		marginBottom: 5,
		padding: 5,
		backgroundColor: '#0083ff',
		borderRadius: 10,
		width: '100%'
	},
	primaryText: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
		width: '50%'
	},
	secondaryText: {
		fontSize: 15,
		color: '#fff',
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	rowContainer: {
		flexDirection: 'row',
		margin: 5
	},
	rightAlign: {
		width: '85%',
		marginLeft: '10%'
	},
	hourContainer: {
		padding: 5,
		borderRadius: 10,
		margin: 5
	},
	green: {
		backgroundColor: '#0bed0b'
	},
	red: {
		backgroundColor: '#ff1447'
	}
});
export default styles;