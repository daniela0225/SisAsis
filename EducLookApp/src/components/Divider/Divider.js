import React from 'react';
import { StyleSheet, View } from 'react-native';

const divider = (props) => {

    return (
        <View style={[styles.divider, ( props.type === 'top') ? styles.topDivider : styles.bottomDivider ]}/>
    );
};

const styles = StyleSheet.create({
    divider: {
        borderRadius: 10,
        backgroundColor: '#0083ff',
        width: 300,
        height: 3
    },
    topDivider: {
            marginTop: 15,
            marginBottom: 30
    },
    bottomDivider: {
        marginTop: 90
    }
});

export default divider;