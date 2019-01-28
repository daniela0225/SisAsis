import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from './Styles.js';

class listItem extends Component{
  
  constructor (props) {
  	super(props);
  	this.state = {
  		key: props.key,
  		absences: props.absences,
  		completeName: props.completeName,
  		onItemPressed: props.onItemPressed,
  		absencesBarValue: new Animated.Value(0)
  	}
  }

  componentDidMount () {
  	this.fillAbsencesBar(this.state.absences);
  }

  fillAbsencesBar = (absences) => {
  	Animated.sequence([
			Animated.timing(this.state.absencesBarValue, {
				toValue: absences,
				duration: 1000,
				delay: 0
			})
		]).start();	
  }

  render () {
  	const percentage = this.state.absencesBarValue;
	return (
		<TouchableOpacity
			onPress={this.state.onItemPressed}>
			<View style={styles.listItem}>
				<View style={styles.barContainer}>
					<Animated.View 
						style={{
							backgroundColor: '#ffbf00',
							width: percentage,
							height: 26,
							borderRadius: 30
						}}/>
						<Animated.Text style={styles.absencesText}>{this.state.absences} %</Animated.Text>
				</View>
				<Text style={styles.nameContainer}>{this.state.completeName}</Text>
			</View>
		</TouchableOpacity>
	);
  }
}

export default listItem;