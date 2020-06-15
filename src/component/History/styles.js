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
        flex: 0.3,
    },
    contentPart: {
        flex: 0.7,
        alignItems: 'center',
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
        width: 150,
        height: 50
    },
    qrCodeImage: {
        width: 250,
        height: 250
    },
    tokenWrapper: {
        flexDirection: 'row'
    },
    tokenView: {
        width: 200,
        height: 22,
        borderWidth: 0.5,
        borderColor: '#00AF80',
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center',
        alignContent: 'center' ,
        backgroundColor: 'white'    
    },
    tokenText: {
        color: '#00AF80'
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

    tabButton: {
        flexDirection: 'row'
    },
    idTextInput: {
        width: 280,
        height: 45
    },
    head: { 
        width: 300,
        height: 40, 
        backgroundColor: '#f1f8ff' 
    },
    text: { 
        margin: 6 
    },
    tableWrapper: {  
        alignItems: 'center'
    },
    clearWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    clearButtonImage: {
        width: 64,
        height: 25,
    },
    historyTable: {
        width: '100%',
        height: '100%',
    },
    textInputWrapper: {
       flexDirection: 'row',
       marginTop: 12,
       alignItems: 'center'
    },
    cardWrapper: {
       backgroundColor: '#31b77f',
       width: 300,
       height: 140
    },
    tableImage: {
        width: 280,
        height: 245
    },
    textInput: {
        width: 200,
        height: 35,
        fontSize: 12,
        marginLeft: 20
    },
    textInputView: {
        width: 180,
        height: 25,
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 7,
        borderRadius: 5,
        backgroundColor: 'white',
        marginLeft: 5
    },
    clearButton: {
        marginTop: 8,
        marginLeft: 15
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        width: 250,
        height: 178
    },
    content: {
        height: 80
    },
    itemUser: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    idText: {
        flex: 0.2,
        fontSize: 11
    },
    amountText: {
        flex: 0.36,
        fontSize: 11,
    },
    rateText: {
        flex: 0.2,
        fontSize: 11,
    },
    timeText: {
        flex: 0.24,
        fontSize: 10,
    },
});

export default styles;