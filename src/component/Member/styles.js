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
        alignItems: 'center',
    },
    memberText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    doubleArrowDownImage: {
        width: 32,
        height: 32,
    },
    tabButton: {
        flexDirection: 'row'
    },
    memberListButton: {
        width: 120,
        height: 30,
        backgroundColor: 'red'
    },
    memberTreeButton: {
        width: 120,
        height: 30,
        backgroundColor: 'green'
    },
    memberWrapper: {
        width: 305,
        height: 80,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        borderRadius: 7,
        marginTop: 5,
        backgroundColor: 'white'
    },
    memberRightWrapper: {
        marginLeft: 20
    },
    registerLinkWrapper: {
        flexDirection: 'row',
    },
    registerLinkView: {
        width: 237,
        height: 25,
        borderWidth: 0.5,
        borderColor: '#00AF80',
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center',
        alignContent: 'center' ,
        backgroundColor: 'white'  
    },
    registerLinkText: {
        color: '#00AF80'
    },
    copyButton: {
        width: 60,
        height: 25
    },
    copyWrapper: {
        marginLeft: 7
    },
    pasteIcon: {
        width: 20,
        height: 20
    },
    copyText: {
        color: 'white'
    },
    searchButton: {
        marginTop: 10,
        flex: 0.4
    },
    searchImage: {
        width: 307,
        height: 43
    },  
    head: { 
        width: 310,
        height: 60, 
        backgroundColor: '#f1f8ff' 
    },
    text: { 
        margin: 6 
    },
    tableWrapper: {  
        backgroundColor: '#fff',
        marginTop: 5
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {

        width: 300,
        height:125
    },
    itemUser: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content: {
        height: 80
    },
    scrollView: {
        
    },
    idText: {
        flex: 0.2,
        fontSize: 11
    },
    emailText: {
        flex: 0.38,
        fontSize: 11,
    },
    levelText: {
        flex: 0.28,
        fontSize: 11
    },
    saleText: {
        flex: 0.14,
        fontSize: 11
    },
    secondPart: {
        alignItems: 'center',
        flex: 1
    },
    trexViewWrapper: {
        width: 300,
        height: 180,
        borderWidth: 1,
        backgroundColor: 'white',
        marginTop: 15
    }
});

export default styles;