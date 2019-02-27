import React, { Component } from 'react';
import styles from './styles.js';
import image from '../../assets/schoolLogo.png';
import { Image, Text, ScrollView, View, ListView} from 'react-native';

class DailyRecords extends Component {

	constructor(props){
		super(props);
		this.state = {
				id: Math.random(),
				day: 'Lunes',
				date:'19-02-2019',
				in:'08:45 am',
				out:'03:55 pm'
		};
	};
 
	render() {
		return (
			<View>
				<ScrollView contentContainerStyle={styles.container}>
					<Text style={styles.name}> Luciana</Text>
					<Text style={styles.last_name}> Paredes Carpio</Text>

						<View style={styles.viewContainer}>	
							<Text style={styles.day}> {this.state.day} </Text>
							<Text style={styles.date}> {this.state.date} </Text>
							<View style={styles.viewRow}>
								<View style={styles.viewIn}>
									<Text style={styles.textInOut}>Entrada</Text>
									<Text style={styles.textIn}> {this.state.in} </Text>
								</View>
							</View>
							<View style={styles.viewRow}>
								<View style={styles.viewOut}>
									<Text style={styles.textInOut}> Salida  </Text>
									<Text style={styles.textOut}> {this.state.out} </Text>
								</View>
							</View>
						</View>
						
				</ScrollView>
			</View>
		)
	}
}

export default DailyRecords;
