import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	infoModalContainer: {
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.5)',
		flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center'
	},
	modalContainer: {
		width: '80%',
		height:'35%',
		backgroundColor: '#0083ff',
		alignSelf: 'center',
		borderRadius: 15,
		padding: 20
	},
	infoDate: {
		marginLeft: '65%',
		fontWeight: 'bold',
		fontSize: 16,
		color: '#fff'
	},
	infoTitle: {
		margin: 10,
		marginBottom: 0,
		fontWeight: 'bold',
		fontSize: 20,
		color: '#fff'
	},
	infoTextContainer: {
		margin: 10
	},
	infoText:{
		margin: 2,
		fontWeight: 'bold',
		fontSize: 16,
		color: '#fff'
	},
	closeButton: {
		marginTop: 10,
		borderRadius: 15,
		width: '100%',
		height: 45,
		backgroundColor: '#fff'
	},
	buttonText: {
		color: '#0083ff',
		fontWeight: 'bold',
		fontSize: 18,
		alignSelf: 'center',
		margin: 10
	}
});

export default styles;