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
        flex: 0.12,
        backgroundColor: 'red'
    },
    contentPart: {
        flex: 0.88,
    },

    totalBalanceText: {
        color: 'white'
    },
    balanceValue: {
        flexDirection: 'row',
        marginTop: 1
    },
    usdUnitText: {
        fontSize: 55,
        color: 'white',
        fontWeight: 'bold'
    },
    valueText: {
        marginLeft: 15,
        fontSize: 55,
        color: 'white',
        fontWeight: 'bold'
    },
    icon: {
        position: 'absolute',
        left: 170,
        top: 110
    },
    investListWrapper: {
        flex: 0.2,
        //backgroundColor: 'red'
    },
    line: {
        borderBottomWidth: 1.5,
        borderBottomColor: 'white',
        marginTop: 10,
        width: 20
    },
    investButton: {
        width: 50,
        height: 20,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        borderRadius: 7
    },
    investList: {
        flexDirection: 'row',
        backgroundColor: '#00AF80',
        marginTop: 10,
        borderTopWidth: 2,
        borderTopColor: 'black',
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    investText: {
        color: 'white',
        fontSize: 11
    },
    investRight: {
        flexDirection: 'row',
        marginLeft: 100,
        alignItems: 'center'
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
        backgroundColor: '#fff'
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
        //backgroundColor: 'red'
    },
    memberTreeButton: {
        width: 120,
        height: 30,
        //backgroundColor: 'green'
    },
    memberWrapper: {
        flexDirection: 'row'
    },
    memberRightWrapper: {
        marginLeft: 20
    },
    registerLinkWrapper: {
        flexDirection: 'row',
    },
    registerLinkView: {
        width: 200,
        height: 50,   
    },
    registerLinkText: {
        color: '#00AF80'
    },
    copyWrapper: {
        flexDirection: 'row'
    },
    pasteIcon: {
        width: 24,
        height: 24
    },
    copyText: {
        color: 'white'
    },
    totalBalanceWrapper: {
        flex: 0.39,
        justifyContent: 'center'
        //backgroundColor: 'red'
    },
    comboundWrapper: {
        flex: 0.1,
        //backgroundColor: 'yellow'
    },
    cardWrapper: {
        flex: 0.31,
        //backgroundColor: 'blue'
    },
    totalBalance: {
        flexDirection: 'row',
        marginLeft: 80
    },
    usd: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold'
    },
    totalBalanceText: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        marginLeft: 25
    },
    flatListWrapper: {
        alignItems: 'flex-end',
        height: 90,
    },
    flatList: {
        width: 302,
        height: 80
    },
    textFlatList: {
        color: 'white',
        fontSize: 11
    },
    dropdown: {
        width: 120,
        height: 40, 
        marginLeft: 15
    },
    dropdownWrapper: {
        flexDirection: 'row',
        marginTop: 10
    },
    comboundButton: {
        width: 80,
        height: 25,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 120
    }
});

export default styles;