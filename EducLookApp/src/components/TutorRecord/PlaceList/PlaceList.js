import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = (props) => {
		
	return (
		<FlatList 
			style={styles.listContainer}
			data={props.tutor}
			renderItem={(info) => (
				<ListItem 
					name={info.item.name}
					last_name={info.item.last_name}
					adress={info.item.adress}
					email={info.item.email}
					telephone={info.item.telephone}
					celphone={info.item.celphone}
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
