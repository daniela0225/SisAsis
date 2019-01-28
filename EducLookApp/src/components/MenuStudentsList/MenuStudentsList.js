import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem/ListItem';

class menuStudentsList extends Component{

	constructor(props) {
		super(props);
		this.state = {
			items: props.items,
			selectedItem: null
		};

		this.setSelectedItem = this.setSelectedItem.bind(this);
	}

	setSelectedItem = (i) => {
		this.setState({selectedItem: i});
	}

	render() {
		return (
			<FlatList 
				style={styles.listContainer}
				data={this.state.items}
				renderItem={ (info) => (
					<ListItem
						key={info.item.key}
						fullName={info.item.fullName}
						setSelectedItem={() => {this.setSelectedItem(info.item.key)}}
					/>
				)}
			/>
		);
	};
}

const styles = StyleSheet.create({
	listContainer: {
	  width: '100%',
	  height: '100%'
	}
});

export default menuStudentsList;