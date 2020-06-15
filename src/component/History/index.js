import React from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions, Animated, ScrollView} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import { Table, Row, Rows } from 'react-native-table-component';
import {Card} from 'react-native-elements';

import styles from './styles';
import Header from '../header';

const userInfo = [
    {
        id: '1357',
        amount: '0.1',
        rate: '0.1129',
        time: '2020-02-12 07:29:17'
    },
];

const { width } = Dimensions.get("window");
export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            xTabOne: 0,
            xTabTwo: 0,
            translateX: new Animated.Value(0),
            translateXTabOne: new Animated.Value(0),
            translateXTabTwo: new Animated.Value(width),
            translateY: -1000,
            tableHead: ['ID', 'Amount', 'Rate', 'Time'],
            tableData: [
              ['1', '2', '3', '4'],
              ['a', 'b', 'c', 'd'],
            ],
            userInfo: userInfo
        }
    }

    goToSignup = () => {
        this.props.navigation.navigate('Signup');
    }

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };

    render() {
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../../asset/history_background.png')}
                    style={styles.imageBackground}>
                    <View style={styles.headerPart}>
                        <Header />
                    </View>
                    <View style={styles.contentPart}>
                        <View style={styles.tabButton}>
                            <View
                                style={{
                                    width: "90%",
                                    marginLeft: "auto",
                                    marginRight: "auto"
                                }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        marginTop: 40,
                                        marginBottom: 20,
                                        height: 36,
                                        position: "relative"
                                    }}>
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderBottomWidth: 1,
                                            borderColor: "#007aff",
                                            //borderRadius: 4,
                                            //borderRightWidth: 0,
                                            //borderTopRightRadius: 0,
                                            //borderBottomRightRadius: 0
                                        }}
                                        onLayout={event =>
                                            this.setState({
                                                xTabOne: event.nativeEvent.layout.x
                                            })
                                        }
                                        onPress={() =>
                                            this.setState({ active: 0 }, () =>
                                                this.handleSlide(xTabOne)
                                            )
                                        }
                                    >
                                        <Text
                                            style={{
                                                color: active === 0 ? "#31b77f" : "#000"
                                            }}
                                        >
                                            Investment History
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderBottomWidth: 1,
                                            borderColor: "#007aff",
                                            //borderRadius: 4,
                                            //borderLeftWidth: 0,
                                            //borderTopLeftRadius: 0,
                                            //borderBottomLeftRadius: 0
                                        }}
                                        onLayout={event =>
                                            this.setState({
                                                xTabTwo: event.nativeEvent.layout.x
                                            })
                                        }
                                        onPress={() =>
                                            this.setState({ active: 1 }, () =>
                                                this.handleSlide(xTabTwo)
                                            )
                                        }
                                    >
                                        <Text
                                            style={{
                                                color: active === 1 ? "#31b77f" : "#000"
                                            }}
                                        >
                                            Commission History
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Animated.View
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        transform: [
                                            {
                                                translateX: translateXTabOne
                                            }
                                        ]
                                    }}
                                    onLayout={event =>
                                        this.setState({
                                            translateY: event.nativeEvent.layout.height
                                        })
                                    }
                                >
                                    <View style={styles.tableWrapper}>
                                        <ImageBackground source={require('../../asset/history_table.png')}
                                            style={styles.tableImage}>
                                            <View style={styles.textInputWrapper}>
                                                <View style={styles.textInputView}>
                                                    <TextInput placeholder="please enter ID" style={styles.textInput}/>
                                                </View>
                                                <TouchableOpacity style={styles.clearButton}>
                                                    <Image source={require('../../asset/clear.png')}
                                                        style={styles.clearButtonImage}/>
                                                </TouchableOpacity>                                               
                                            </View>
                                            <Card containerStyle={styles.card}>
                                                <View style={styles.titleWrapper}>
                                                    <Text>ID</Text>
                                                    <Text>Amount</Text>
                                                    <Text>Rate</Text>
                                                    <Text>Time</Text>
                                                </View>
                                                <View style={styles.content}>
                                                    <ScrollView contentContainerStyle={styles.scrollView}>
                                                        {this.state.userInfo.map((item, key) => {
                                                            return (
                                                                <View key={key} style={styles.itemUser}>
                                                                    <Text style={styles.idText}>{item.id}</Text>
                                                                    <Text style={styles.amountText}>{item.amount}</Text>
                                                                    <Text style={styles.rateText}>{item.rate}</Text>
                                                                    <Text style={styles.timeText}>{item.time}</Text>
                                                                </View>
                                                            );
                                                        })}
                                                    </ScrollView>
                                                </View>
                                            </Card>
                                        </ImageBackground>
                                    </View>
                                </Animated.View>

                                <Animated.View
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        transform: [
                                            {
                                                translateX: translateXTabTwo
                                            },
                                            {
                                                translateY: -translateY
                                            }
                                        ]
                                    }}
                                >
                                    <View style={styles.tableWrapper}>
                                        <ImageBackground source={require('../../asset/history_table.png')}
                                            style={styles.tableImage}>
                                            <View style={styles.textInputWrapper}>
                                                <View style={styles.textInputView}>
                                                    <TextInput placeholder="please enter ID" style={styles.textInput}/>
                                                </View>
                                                <TouchableOpacity style={styles.clearButton}>
                                                    <Image source={require('../../asset/clear.png')}
                                                        style={styles.clearButtonImage}/>
                                                </TouchableOpacity>                                               
                                            </View>
                                            <Card containerStyle={styles.card}>
                                                <View style={styles.titleWrapper}>
                                                    <Text>ID</Text>
                                                    <Text>Amount</Text>
                                                    <Text>Rate</Text>
                                                    <Text>Time</Text>
                                                </View>
                                                <View style={styles.content}>
                                                    <ScrollView contentContainerStyle={styles.scrollView}>
                                                        {this.state.userInfo.map((item, key) => {
                                                            return (
                                                                <View key={key} style={styles.itemUser}>
                                                                    <Text style={styles.idText}>{item.id}</Text>
                                                                    <Text style={styles.amountText}>{item.amount}</Text>
                                                                    <Text style={styles.rateText}>{item.rate}</Text>
                                                                    <Text style={styles.timeText}>{item.time}</Text>
                                                                </View>
                                                            );
                                                        })}
                                                    </ScrollView>
                                                </View>
                                            </Card>
                                        </ImageBackground>
                                    </View>
                                </Animated.View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}