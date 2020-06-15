import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        width: '100%',
        height: '100%',
    },
    logoPart: {
        flex: 0.2,
        justifyContent: 'flex-end'
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    signupPart: {
        flex: 0.7,
        alignItems: 'flex-end',
        padding: 15
    },
    signupText: {
        color: '#07ab99',
        fontWeight: 'bold'
    },
    detailsText: {
        color: 'gray',
        fontSize: 11,
        marginTop: 5
    },
    alreadyHaveAccountPart: {
        flex: 0.1,
    },
    emailTextInput: {
        width: 210,
        height: 35,
        borderWidth: 1,
        borderColor: '#07ab99',
        borderRadius: 5
    },
    titleWrapper: {
        width: 210,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 11
    },
    alreadyHaveAccountText: {
        fontSize: 10,
        marginTop: 10
    },
    signupButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#4fbf6d',
        marginRight: 40,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    returnButton: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    returnImage: {
        width: 28,
        height: 28,
    },
});

export default styles;