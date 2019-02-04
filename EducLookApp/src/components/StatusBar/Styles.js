import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    statusBarContainer: {
        backgroundColor: '#0083ff',
        width: '100%',
        height: 75,
        paddingTop: 25,
        flexDirection: 'row'
    },
    statusBarText: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    menuButtonContainer: {
        width: 40,
        backgroundColor: '#0083ff',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 100,
        marginLeft: 20
    },
    homeIcon:{
        height: 35,
        width: 35
    }
});

export default styles;