import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
	<TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
        <Text style={styles.textName}>{props.name}</Text>
        <Text> Grado: {props.grado}</Text>
        <Text>Nro de Orden: {props.nroOrden}</Text>
    </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "column",
        alignItems: "center",
        borderColor:'#0083CB',
        borderRadius: 10,
        borderWidth: 2,
    },
    textName: {
        flexDirection: "row",
        color: '#0083CB',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default listItem;