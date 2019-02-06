import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	listItem: {
        marginBottom: 5,
        //padding: 10,
        backgroundColor: "#FBBA00",
        flexDirection: "column",
        alignItems: "flex-start",
        borderColor:'#FBBA00',
        borderRadius: 10,
        borderWidth: 2,
    },
	textName: {
		color: '#fff',
		alignItems: 'center',
	    fontWeight: 'bold',
	    fontSize: 25,
	},
	textLastName: {
		color: '#fff',
		padding: 10,
		alignItems: 'center',
	    fontWeight: 'bold',
	    fontSize: 25,
	},
	textAttributes: {
		color: '#fff',
		//alignItems: "flex-start",
		//fontWeight: 'bold',
	    fontSize: 17,
	    marginLeft: 5

	},
	textP: {
		color: '#fff',
		alignItems: "flex-start",
		//fontWeight: 'bold',
	    fontSize: 17,
	    padding: 3,

	}
});
//
export default styles;