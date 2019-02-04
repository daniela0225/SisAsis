import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Styles.js';
import homeIcon from './homeIcon.png';

const statusBar = (props) => {
    return (
        <View style={styles.statusBarContainer}>
            <TouchableOpacity onPress={() => {props.showSideMenu()}} style={styles.menuButtonContainer}>
                <Image style= {styles.homeIcon} esizeMode='contain' source={homeIcon} />
            </TouchableOpacity>
            <Text style={styles.statusBarText}> {props.viewName} </Text>
        </View>
    );
};

export default statusBar;