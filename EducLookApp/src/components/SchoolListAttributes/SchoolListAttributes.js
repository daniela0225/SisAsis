import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem/ListItem';

const schoolListAttributes = (props) => {
	return (
		<FlatList
			style={styles.listContainer}
			data={props.schoolConfigurations}
			renderItem={(info) => (
				<ListItem
					key={info.item.id}
					year={info.item.year}
					startDate={info.item.startDate}
					endDate={info.item.endDate}
					kinderSchedule={info.item.kinderSchedule}
					primarySchedule={info.item.primarySchedule}
					secondarySchedule={info.item.secondarySchedule}
					kinderSchedule={info.item.kinderSchedule}
				/>
			)}
		/>
		
	);
};
export default schoolListAttributes;
