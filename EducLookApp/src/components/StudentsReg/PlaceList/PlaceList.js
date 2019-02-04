import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = (props) => {
		
	return (
		<FlatList 
			style={styles.listContainer}
			data={props.names}
			renderItem={(info) => (
				<ListItem 
					name={info.item.name}
					grado={info.item.grado}
					nroOrden={info.item.nroOrden}
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

export default placeList;
