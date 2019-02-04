import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';

const listItem = (props) => (
	<TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
        <Text style={styles.textDay}>{props.day}</Text>
        <Text>{props.date}</Text>
        <View style={styles.containerView}>
            <View  style={styles.containerEntrada}>
                <Text style={styles.text}> Entrada: {props.entrada}</Text>
            </View>
            <View style={styles.containerSalida}>
                <Text style={styles.text}> Salida: {props.salida}</Text>
            </View>
        </View>
        
    </View>
    </TouchableOpacity>
);

export default listItem;