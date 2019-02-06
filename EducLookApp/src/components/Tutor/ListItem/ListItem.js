import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import styles from './Style.js';

const listItem = (props) => (
	//<TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
        <Text style={styles.textName}>{props.name}</Text>
        <Text style={styles.textLastName}>{props.last_name}</Text>
        <Text style={styles.textP}> Dirección:  </Text> 
            <Text style={styles.textAttributes}> {props.adress}</Text>
        <Text style={styles.textP}> Email:</Text>
            <Text style={styles.textAttributes}> {props.email}</Text>
        <Text style={styles.textP}> teléfono: </Text>
            <Text style={styles.textAttributes}> {props.telephone}</Text>
        <Text style={styles.textP}> celular:  </Text>
            <Text style={styles.textAttributes}> {props.celphone}</Text>
    </View>
   // </TouchableOpacity>
);

export default listItem;