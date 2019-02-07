import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	listItem: {
        marginBottom: 5,
        backgroundColor: "#fff",
        flexDirection: "column",
        alignItems: "center",
        
    },
	textName: {
		color: '#0083ff',
		alignItems: 'center',
	    fontWeight: 'bold',
	    fontSize: 25,
	},
	textLastName: {
		color: '#0083ff',
		alignItems: 'center',
	    fontWeight: 'bold',
	    fontSize: 20,
	},
	textAttributes: {
		color: 'black',
	    fontSize: 15,
	    padding: 1,

	}
});

export default styles;