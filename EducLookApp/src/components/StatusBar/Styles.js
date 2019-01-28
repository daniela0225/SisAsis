import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    statusBarContainer: {
        backgroundColor: '#0083ff',
        width: '100%',
        height: 75,
        paddingTop: 25,
        flexDirection: 'row'
    },
    sideMenuButtonContainer: {
        paddingTop: 5,
        paddingLeft: 15,
        alignItems: 'center'
    },
    menuBars:{
        flexDirection: 'column',
        height: 4,
        width: 30,
        backgroundColor: '#fff',
        margin: 4,
    },
    statusBarText: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default styles;