import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem/ListItem';

const studentsList = (props) => {

    return (
        <FlatList 
        	style={styles.listContainer}
        	data={props.students}
        	renderItem={ (info) => (
        		<ListItem
                    key={info.item.key}
                    absences={info.item.absences}
	    			completeName={info.item.completeName}
	    			onItemPressed={() => props.onItemPressed(info.item.key)}
	    		/>
        	)}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: '100%',
      height: 220,
      padding: 10
    }
});

export default studentsList;