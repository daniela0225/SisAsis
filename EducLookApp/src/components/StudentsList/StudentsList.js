import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import axios from '../../Axios/axios.js';

import ListItem from './ListItem/ListItem';

import { connect } from 'react-redux';

class studentsList extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	render (){
		return (
		<FlatList 
			style={styles.listContainer}
			data={this.props.students}
			renderItem={ (info) => {
				return (
					<ListItem
						id={info.item.key}
						completeName={info.item.fullName}
					/>
				)
			}}
		/>
	);
	}
};

const styles = StyleSheet.create({
	listContainer: {
	  width: '100%',
	  height: 230,
	  padding: 10
	}
});

const mapStateToProps = state => {
	return {
		students: state.students.list
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(studentsList);