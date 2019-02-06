import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
	<TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
        <Text style={styles.textName}>{props.name}</Text>
        <Text style={styles.attributes}> Grado: {props.grado}</Text>
        <Text style={styles.attributes}>Nro de Orden: {props.nroOrden}</Text>
    </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 5,
        padding: 4,
        backgroundColor: "#FBBA00",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'flex-start',
        borderColor:'#FBBA00',
        borderRadius: 10,
        borderWidth: 2,
        marginRight: 5,
        //height: '100%',
        width: '100%',
    },
    textName: {
        flexDirection: "row",
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    attributes: {
        flexDirection: "row",
        color: '#fff',
        fontSize: 16,
        //fontWeight: 'bold',
    },
});

export default listItem;