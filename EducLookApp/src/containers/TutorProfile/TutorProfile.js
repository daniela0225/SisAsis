import React, { Component } from 'react';
import image from '../../assets/schoolLogo.png';
import styles from './Styles.js';
import { Image, Text, ScrollView, View, ListView} from 'react-native';

import tutorProfile from '../../components/Tutor/PlaceList/PlaceList';

class tutorProfile extends Component {

	constructor(props){
		super(props);
		this.state = {
			tutor: [
				{
					key: Math.random(),
					name: 'Mariana',
					last_name: 'Torres Cáceres',
					adress: 'Urb. Las Torres M-25 ',
					email: 'm.paredes@example.com',
					telephone: '054-265315',
					celphone: '952146321',
				}  
			]
		};

		alert = (item) => {
			alert(item.id)
		}
	};
	

	render() {
		return (
			<View contentContainerStyle={styles.container}>
				<View style={styles.containerView}>
					<Image source={image} style={styles.image} />
					<Tutor tutor={this.state.tutor} />
				</View>
			</View>
			)
		}
}

export default tutorProfile;
