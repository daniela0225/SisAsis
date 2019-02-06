import React, { Component } from 'react';
import image from '../../assets/user_icon.png';
import styles from './Styles.js';
import { Text, View, Image} from 'react-native';

import Student from '../../components/Student/PlaceList/PlaceList';

class studentProfile extends Component {

constructor(props){
		super(props);
		this.state = {
			students: [
			{
				key: Math.random(),
				name: 'Mariana',
				last_name: 'Paredes Robles',
				gender: 'FEMALE',
				DNI: '76423529',
				birthdate: '25-02-2005',
				fingerprint: '96ssd4cd',
				code: '7632541',
				year: '5to Secundaria',
				section: 'A',
				order_number: 15,
				school: 'Internacional'
			}
		]
		};

		alert = (item) => {
		alert(item.id)
		}
	};
	

	render() {
		return (
			<View style={styles.container}>
				<Image source={image} style={styles.image} />
				<Student students={this.state.students} />
			</View>			
		)
	}
}

export default studentProfile;
