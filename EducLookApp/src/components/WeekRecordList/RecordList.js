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
					day={info.item.day}
					date={info.item.date}
					entrada={info.item.entrada}
					salida={info.item.salida}
					onItemPressed={() => props.onItemSelected(info.item.key)}
				/>
			)}
		/>
	);
};
	
const styles = StyleSheet.create ({
	listContainer: {
		width: "100%"
	}
});

export default recordList;
