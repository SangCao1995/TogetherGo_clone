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
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    logoImage: {
        width: 160,
        height: 160,
    },
    loginPart: {
        flex: 0.65,
        alignItems: 'center',
    },
    loginWrapper: {
        width: 270,
        height: 285,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: '#07ab99',
        alignItems: 'center',
        padding: 10
    },
    title: {
        color: '#07ab99',
        fontWeight: 'bold',
        fontSize: 25
    },
    signInText: {
        color: '#07ab99',
    },
    emailInputText: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    passwordInputText: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    forgotPasswordWrapper: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        width: '100%'
    },
    forgotPasswordText: {
        fontSize: 12,
        marginRight: 5,
        marginTop: 8
    },
    notHaveAccountWrapper: {
        marginTop: 5
    },
    loginButton: {
        width: 150,
        height: 30,
        backgroundColor: '#6fc959',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 40
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default styles;