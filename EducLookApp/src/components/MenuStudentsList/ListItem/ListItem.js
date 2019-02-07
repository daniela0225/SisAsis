import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import styles from './Styles.js';
import triangleIcon from './triangleIcon.png';

import { connect } from 'react-redux';
import { setActualView } from '../../../store/actions/viewActions/index';

class listItem extends Component{

	constructor (props) {
		super(props);
		this.state = {
			key: props.key,
			fullName: props.fullName,
			selected: false
		}
	}

	onSelectHandler = () => {
		let selected = !this.state.selected;
		this.setState({selected: selected});
	}

	optionSelectedHandler = (view) => {
		this.props.onSetActualView(view);
		this.props.hideMenu();
	}

	render () {
		let options = (this.state.selected == false)? (<View></View>) : (
					<View>
						<TouchableOpacity style={styles.option} onPress={ () => {this.optionSelectedHandler('MonthRecords');} }>
							<View style={[styles.optionIcon, styles.optionIconSelected]} />
							<Text style={styles.optionText}>Asistencia del Día</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.option} onPress={ () => {this.optionSelectedHandler('WeekRecords');}}>
							<View style={styles.optionIcon} /> 
							<Text style={styles.optionText}>Asistencias Semanales</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.option} onPress={ () => {this.optionSelectedHandler('MonthRecords');} }>
							<View style={styles.optionIcon} /> 
							<Text style={styles.optionText}>Asistencias Mensuales</Text>
						</TouchableOpacity>
					</View>
					);

		return (
			<View style={styles.listItem}>
				<TouchableOpacity style={styles.studentOptionsButton} 
					onPress={ this.onSelectHandler } >
					<Image resizeMode='contain' source={triangleIcon} 
						style={[styles.triangleIcon,(this.state.selected==true)?styles.triangleIconSelected:{}]} /> 
					<Text style={styles.nameContainer}>{this.state.fullName}</Text>
				</TouchableOpacity>
				<View>
					{options}
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetActualView: (view) => dispatch(setActualView(view))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(listItem);