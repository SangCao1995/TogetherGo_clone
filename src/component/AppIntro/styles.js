import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
    },
    logoPart: {
        flex: 0.6,
    },
    loginButtonPart: {
        flex: 0.4,
        flexDirection: 'column',
        alignItems: 'center'
    },
    togetherText: {
        width: 245,
        height: 32,
    },
    loginButton: {
        marginTop: 60
    },
    loginButtonImage: {
        width: 183,
        height: 42,
    }
});

export default styles;