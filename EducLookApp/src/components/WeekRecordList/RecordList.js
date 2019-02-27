import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem/ListItem';

const recordList = (props) => {
	return (
		<FlatList
			style={styles.listContainer}
			data={props.dates}
			renderItem={(info) => (
				<ListItem
					key={info.item.id}
					day={info.item.day}
					date={info.item.date}
					in={info.item.in}
					out={info.item.out}
				/>
			)}
		/>
	);
};
	
const styles = StyleSheet.create ({
	listContainer: {
		width: '100%',
		padding: 5
	}
});

export default recordList;
