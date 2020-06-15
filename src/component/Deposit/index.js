import React from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Switch, Dimensions, Animated, TouchableWithoutFeedback, ScrollView, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PlaceComponent from './PlaceComponent'
import {Dropdown} from 'react-native-material-dropdown';
import ModalSelector from 'react-native-modal-selector';
import RNPickerSelect from 'react-native-picker-select';
import ModalDropdown from 'react-native-modal-dropdown';
const {width,height} = Dimensions.get('window');

import styles from './styles';
import Header from '../header';

const data = [
    {
        key: '0',
        label: 'TGT',
        value: 'https://miro.medium.com/max/990/1*PNniLVIC_Hc7gNIxjvWPWg.png',
        token: '0x8d68Aa861BbECF2bDe18d45d82f01D51e2A18b65',
        text: 'TGT'
    },
    {
        key: '2',
        label: 'BTC',
        value: 'https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png',
        token: '0x2e95Bb861BbECF2bDe18d45d82f01D51e2A18b65',
        text: 'BTC'
    },
    {
        key: '3',
        label: 'ETH',
        value: 'https://i.stack.imgur.com/Mspmr.png',
        token: '0x6r8574861BbECF2bDe18d45d82f01D51e2A18b65',
        text: 'ETH'
    },
];
export default class Deposit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInputValue: '',
            placesScrollViewHeight: new Animated.Value(0),
            data: data,
            selectData:"",
            value: "https://miro.medium.com/max/990/1*PNniLVIC_Hc7gNIxjvWPWg.png",
            token: "0x8d68Aa861BbECF2bDe18d45d82f01D51e2A18b65"
        }
    }

    goToSignup = () => {
        this.props.navigation.navigate('Signup');
    }

    _handleOnSelect (value) {
        this.setState({selectData:value})
      }

    selectData = () => {
    }
    render() {
        let index = 0;
        const data = [
            { key: index++, label: 'Red Apples' },
            { key: index++, label: 'Cherries' },
            { key: index++, label: 'Cranberries', accessibilityLabel: 'Tap here for cranberries' },
            // etc...
            // Can also add additional custom keys which are passed to the onChange callback
            { key: index++, label: 'Vegetable', customKey: 'Not a fruit' }
        ];
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../../asset/deposit_background.png')}
                    style={styles.imageBackground}>
                    <View style={styles.headerPart}>
                        <Header/>
                    </View>
                    <View style={styles.contentPart}>
                        <Dropdown
                            style={styles.dropdown}
                            renderAccessory={() => null}
                            value={this.state.label}
                            data={this.state.data}
                            containerStyle={styles.dropdown}
                            onChangeText={(value, index, data) => {this.setState({
                                value: data[index].value,
                                token: data[index].token
                            })}}
                        />
                        <Image source={{uri: this.state.value}}
                            style={styles.qrCodeImage}/>
                        <View style={styles.tokenWrapper}>
                            <View style={styles.tokenView}>
                                <Text numberOfLines={1} style={styles.tokenText}>{this.state.token}</Text>
                            </View>
                            <TouchableOpacity style={styles.copyWrapper}>
                                <Image source={require('../../asset/copy.png')}
                                    style={styles.copyButton} />
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </ImageBackground>
            </View>
        );
    }
}