import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Styles.js';

const statusBar = (props) => {
    return (
        <View style={styles.statusBarContainer}>
            <TouchableOpacity onPress={() => {props.showSideMenu()}} style={styles.sideMenuButtonContainer}>
                <View style= {styles.menuBars} />
                <View style= {styles.menuBars} />
                <View style= {styles.menuBars} />
            </TouchableOpacity>
            <Text style={styles.statusBarText}> {props.viewName} </Text>
        </View>
    );
};

export default statusBar;