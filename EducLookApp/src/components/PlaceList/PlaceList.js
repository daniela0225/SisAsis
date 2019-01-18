import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

/* 	
	ScrollViews work when the amount of items in a list is not big
	because if that´s the case, the performance gets affected.

	SectionLists help if there are sections in the list.
*/

const placeList = props => {

    return (
        <FlatList 
        	style={styles.listContainer}
        	data={props.places}
        	renderItem={ (info) => (
        		<ListItem 
	    			placeName={info.item.name}
                    placeImage={info.item.image}
	    			onItemPressed={() => props.onItemSelected(info.item.key)}
	    		/>
        	)}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;