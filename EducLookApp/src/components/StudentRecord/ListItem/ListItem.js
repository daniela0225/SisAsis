import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import styles from './Style.js';

const listItem = (props) => (
	//<TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
        <Text style={styles.textName}>{props.name}</Text>
        <Text style={styles.textLastName}>{props.last_name}</Text>
        <Text style={styles.textAttributes}> Genero: {props.gender} </Text>
        <Text style={styles.textAttributes}> Edad: {props.birthdate} </Text>
        <Text style={styles.textAttributes}> id_huella: {props.fingerprint} </Text>
        <Text style={styles.textAttributes}> Código: {props.code} </Text>
        <Text style={styles.textAttributes}> Año: {props.year}</Text>
        <Text style={styles.textAttributes}> Sección: {props.section} </Text>
        <Text style={styles.textAttributes}> N°: {props.order_number} </Text>
        <Text style={styles.textAttributes}> Colegio: {props.school} </Text>        
    </View>
   // </TouchableOpacity>
);

export default listItem;