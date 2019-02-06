import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#fff",
	        flexDirection: "column",
	        alignItems: "center",
	        borderColor:'#0083CB',
	        borderRadius: 10,
	        borderWidth: 2,
			justifyContent: 'flex-start',
			padding: 25,
			marginTop: 25
		},
		containerView: {
			alignItems: 'center',
			height: '100%',
			width: 290,
			padding: 10,
		},
		image: {
			width: 130,
			height: 130,
			borderWidth: 2,
			borderColor:'#0083ff',
			borderRadius: 15,
			margin: 15
		},
		text: {
			color: '#4f603c',
			flexDirection: 'row',
			alignItems: 'center',
			padding: 1.5,
		}
});

export default styles;