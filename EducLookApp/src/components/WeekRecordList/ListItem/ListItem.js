import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';

const listItem = (props) => (
	<TouchableOpacity onPress={() => {}}>
		<View style={ styles.listItemContainer }>
			<View style={ styles.rowContainer }>
				<Text style={ styles.primaryText }>{ props.day }</Text>
				<Text style={[ styles.primaryText, styles.rightAlign ] }>{ props.date }</Text>
			</View>
			<View style={ [styles.green, styles.hourContainer ] }>
				<Text style={ styles.secondaryText }> Entrada: { props.in } </Text>
			</View>
			<View style={ [styles.red, styles.hourContainer ] }>
				<Text style={ styles.secondaryText }> Salida: { props.out } </Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default listItem;