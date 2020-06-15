import React from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import { Table, Row, Rows } from 'react-native-table-component';

import styles from './styles';
import Header from '../header';
import { min } from 'react-native-reanimated';

const data = [
    {
        togetherGo: 0.1,
        unit: 'TGT',
        value: 0.02
    },
    {
        togetherGo: 0.1,
        unit: 'BTC',
        value: 0.03
    },
    {
        togetherGo: 0.1,
        unit: 'ETH',
        value: 0.04
    },
    {
        togetherGo: 0.1,
        unit: 'USDT',
        value: 0.05
    },
    {
        togetherGo: 0.1,
        unit: 'ETH',
        value: 0.04
    },
    {
        togetherGo: 0.1,
        unit: 'USDT',
        value: 0.05
    },
];

const combound = [
    {
        value: '1 Week'
    },
    {
        value: '1 Month'
    },
    {
        value: '3 Months'
    },
    {
        value: '6 Months'
    },
    {
        value: '12 Months'
    }
]

export default class Together extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: data,
            data: combound,
            value: '1 Week'
        }
    }

    goToSignup = () => {
        this.props.navigation.navigate('Signup');
    }

    goToDeposit = () => {
        this.props.navigation.navigate('Deposit');
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../../asset/together_background.png')}
                    style={styles.imageBackground}>
                    <View style={styles.headerPart}>
                        <Header/>
                    </View>
                    <View style={styles.contentPart}>
                        <View style={styles.totalBalanceWrapper}>
                            <View style={styles.totalBalance}>
                                <Text style={styles.usd}>$</Text>
                                <Text style={styles.totalBalanceText}>0.02</Text>
                            </View>
                        </View>
                        <View style={styles.investListWrapper}>
                            <View style={styles.flatListWrapper}>
                                <FlatList style={styles.flatList} 
                                    data={this.state.dataList}
                                    renderItem={({ item }) =>
                                        (
                                            <View style={styles.investList}>
                                                <View style={styles.investLeft}>
                                                    <Text style={styles.textFlatList}>TOGETHER GO</Text>
                                                    <View style={styles.line}></View>
                                                    <Text style={styles.textFlatList}>{item.unit}</Text>
                                                </View>
                                                <View style={styles.investRight}>
                                                    <View>
                                                        <Text style={styles.textFlatList}>{item.togetherGo}</Text>
                                                        <View style={styles.line}></View>
                                                        <Text style={styles.textFlatList}>$ {item.value}</Text>
                                                    </View>
                                                    <TouchableOpacity style={styles.investButton}>
                                                        <Text style={styles.investText}>INVEST</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        )
                                    }
                                    keyExtractor={(item, index) => index.toString()} />
                            </View>   
                        </View>
                        <View style={styles.comboundWrapper}>
                            <View style={styles.dropdownWrapper}>
                                <Dropdown
                                    fontSize={12}
                                    dropdownOffset={{top: 0}}
                                    value={this.state.value}
                                    data={this.state.data}
                                    containerStyle={styles.dropdown}
                                    onChangeText={(value, index, data) => {
                                        this.setState({
                                            value: value
                                        })
                                    }}
                                />
                                <TouchableOpacity style={styles.comboundButton}>
                                    <Text>Combound</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.cardWrapper}>

                        </View>
                    </View>           
                </ImageBackground>
            </View>
        );
    }
}