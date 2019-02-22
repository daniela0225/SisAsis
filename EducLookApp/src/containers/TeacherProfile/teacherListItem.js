import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import axios from '../../Axios/axios.js';

//import ListItem from './ListItem/ListItem';

import { connect } from 'react-redux';

class teachersList extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	render (){
		return (
		<FlatList 
			style={styles.listContainer}
			data={this.props.teachers}
			renderItem={ (info) => {
				return (
					<ListItem
						id={info.item.key}
						name={info.item.name}
						last_name={info.item.last_name}
						phone={info.item.phone}
						school={info.item.school}
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
		teachers: state.teachers.list
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(teachersList);