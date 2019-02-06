import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	listItem: {
        marginBottom: 5,
        //padding: 10,
        backgroundColor: "#fff",
        flexDirection: "column",
        alignItems: "center",
        //borderColor:'#0083CB',
        //borderRadius: 10,
        //borderWidth: 2,
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
		//fontWeight: 'bold',
	    fontSize: 15,
	    padding: 1,

	}
});

export default styles;