import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 7,
        paddingLeft: 12,
        paddingRight: 12
    },
    headerPart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3,
        alignItems: 'center'
    },
    drawerButton: {
        width: 30,
        height: 30
    },
    addMemberButton: {
        width: 30,
        height: 30
    },
    line: {
        borderBottomWidth: 1.5,
        borderBottomColor: 'white',
        marginTop: 5,
    },
    yourAccountText: {
        color: 'white',
        fontWeight: 'bold'
    },
    drawerIcon: {
        width: 24,
        height: 24
    },
    drawerButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 3,
        borderColor: '#00AF80',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addMemberIcon: {
        width: 24,
        height: 24
    },
    addMemberButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: '#00AF80',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default styles;