import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = (props) => {
		
	return (
		<FlatList 
			style={styles.listContainer}
			data={props.students}
			renderItem={(info) => (
				<ListItem 
					name={info.item.name} 
					last_name= {info.item.last_name} 
					gender= {info.item.gender} 
					DNI= {info.item.DNI} 
					birthdate= {info.item.birthdate} 
					fingerprint= {info.item.fingerprint} 
					code= {info.item.code} 
					year= {info.item.year} 
					section= {info.item.section} 
					order_number= {info.item.order_number} 
					school= {info.item.school} 
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
