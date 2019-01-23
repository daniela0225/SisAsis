import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

/*
    Touchable can not be instance by itself, you have to use:
        -TouchableWithoutFeedback
        -TouchableHighlight
        -TouchableOpacity
        -TouchableNativeFeedback
	Touchable let elements be... touchable (-_-) and can only have one child.
	TouchableHighlight and TouchableOpacity have feedback and vary the animation.
*/

const listItem = (props) => (
	<TouchableOpacity 
		onPress={props.onItemPressed}>
		<View style={styles.listItem}>
			<Image resizeMode="contain" source={props.placeImage} style={styles.placeImage} /> 
	        <Text>{props.placeName}</Text>
	    </View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
    	marginRight: 8,
    	height: 40,
    	width: 40
    }
});

export default listItem;