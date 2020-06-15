import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    header: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 70,
        height: 70,
        marginLeft: 10
    },
    avatarCircle: {
        width: 100,
        height: 100,
    },
    avatarWrapper: {
        flex: 0.5
    },
    userInfomation: {
        flex: 0.5,
        alignItems: 'center'
    },
    drawerSection: {
        flex: 0.7
    },
    niceDayText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    idText: {
        marginTop: 7,
        fontSize: 12
    },
    emailText: {
        fontSize: 12
    },
    yourAccount: {
        width: 160,
        height: 70
    },
    line: {
        borderBottomWidth: 1.5,
        borderBottomColor: 'white',
        marginTop: 5,
    },
    logoutImage: {
        width: 160,
        height: 70
    },
    logoutButtonWrapper: {
        width: '100%',
        alignItems: 'center'
    }
});

export default styles;