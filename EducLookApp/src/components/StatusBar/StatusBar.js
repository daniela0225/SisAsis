import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Styles.js';

const statusBar = (props) => {
    return (
        <View style={styles.statusBarContainer}>
            <Text style={styles.statusBarText}> {props.viewName} </Text>
        </View>
    );
};

export default statusBar;