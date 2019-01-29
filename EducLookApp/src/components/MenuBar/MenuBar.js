import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Styles.js';

import homeIcon from './homeIcon.png';

const menuBar = (props) => {
    return (
            <TouchableOpacity onPress={() => {props.showSideMenu()}} style={styles.menuButtonContainer}>
                <Image style= {styles.homeIcon} esizeMode='contain' source={homeIcon} />
            </TouchableOpacity>
    );
};

export default menuBar;