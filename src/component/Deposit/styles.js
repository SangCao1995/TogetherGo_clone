import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        width: '100%',
        height: '100%',
    },
    headerPart: {
        flex: 0.17,
    },
    contentPart: {
        flex: 0.83,
        alignItems: 'center'
    },
    depositText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    doubleArrowDownImage: {
        width: 32,
        height: 32,
    },
    dropdown: {
        width: 120,
        height: 50
    },
    qrCodeImage: {
        width: 240,
        height: 240,
        marginTop: 60,
        marginLeft: 2
    },
    tokenWrapper: {
        flexDirection: 'row',
        marginTop: 20
    },
    tokenView: {
        width: 190,
        height: 25,
        borderWidth: 0.5,
        borderColor: '#00AF80',
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center',
        alignContent: 'center' ,
        backgroundColor: 'white'    
    },
    tokenText: {
        color: '#00AF80',
        fontSize: 12
    },
    copyWrapper: {
        height: 22,
        width: 70,
        flexDirection: 'row',
        backgroundColor: '#00AF80',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        borderRadius: 7,
        marginLeft: 8
    },
    pasteIcon: {
        width: 20,
        height: 20
    },
    copyText: {
        color: 'white'
    },
    copyWrapper: {
        marginLeft: 7
    },
    copyButton: {
        width: 60,
        height: 25
    },
});

export default styles;