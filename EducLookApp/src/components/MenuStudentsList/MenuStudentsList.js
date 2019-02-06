import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem/ListItem';

import { connect } from 'react-redux';

class menuStudentsList extends Component{

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<FlatList 
				style={styles.listContainer}
				data={this.props.students}
				renderItem={ (info) => (
					<ListItem
						key={info.item.key}
						fullName={info.item.fullName}
						hideMenu={this.props.hideMenu}
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

const mapStateToProps = state => {
	return {
		token: state.users.token,
		headers: state.users.headers,
		students: state.students.list
	};
};

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(menuStudentsList);