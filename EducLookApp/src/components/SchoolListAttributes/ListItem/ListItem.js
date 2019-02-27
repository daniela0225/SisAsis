import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './Style';

const listItem = (props) => (
	<TouchableOpacity>
		<View>
			<View>
				<Image source={props.logo} style={styles.image}/>
				<Text style={ styles.text}>{ props.name }</Text>
				<Text style={styles.text}>kinder: </Text>
					<Text style={ styles.text}>{ props.startHour }</Text>
					<Text style={ styles.text}>{ props.endHour }</Text>
					<Text style={ styles.text}>{ props.tolerance }</Text>
				<Text style={ styles.text}>Primaria: </Text>
					<Text style={ styles.text}>{ props.startHour }</Text>
					<Text style={ styles.text}>{ props.endHour }</Text>
					<Text style={ styles.text}>{ props.tolerance }</Text>
				<Text style={ styles.text}>Secundaria: </Text>
					<Text style={ styles.text}>{ props.startHour }</Text>
					<Text style={ styles.text}>{ props.endHour }</Text>
					<Text style={ styles.text}>{ props.tolerance }</Text>
				<Text style={ styles.text}>vacaciones: </Text>
					<Text style={ styles.text}>{ props.start }</Text>
					<Text style={ styles.text}>{ props.end }</Text>
				<View>
					<Text style={ styles.text}>SchoolConfigurations</Text>
					<Text style={ styles.text}>{ props.school }</Text>
					<Text style={ styles.text}>{ props.year }</Text>
					<Text style={ styles.text}>{ props.startDate }</Text>
					<Text style={ styles.text}>{ props.endDate }</Text>
					<Text style={ styles.text}>{ props.kinderSchedule }</Text>
					<Text style={ styles.text}>{ props.primarySchedule }</Text>
					<Text style={ styles.text}>{ props.secondarySchedule }</Text>
					<Text style={ styles.text}>{ props.vacations }</Text>
				</View>
			</View>
		</View>
	</TouchableOpacity>
);

export default listItem;