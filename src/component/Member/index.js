import React from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Animated, ScrollView, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import { Table, Row, Rows } from 'react-native-table-component';
import TreeView from 'react-native-final-tree-view';
import {Card} from 'react-native-elements';

import styles from './styles';
import Header from '../header';

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
  );
  
const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
)

const { width } = Dimensions.get("window");
const data = [
    {
        coin: '0 TGT',
        id: '293683',
        children: [
            {
                coin: '244,426.9611 TGT',
                id: '390687'
            },
            {
                coin: '0.0000 TGT',
                id: '967295'
            }
        ]
    }
];

const userInfo = [
    {
        id: '1329563',
        email: 'left@tgt.c',
        level: 'Member',
        sale: '0.0000'
    },
    {
        id: '2554947',
        email: 'hd121212@gmail',
        level: 'Member',
        sale: '0.0000'
    },
    {
        id: '3329563',
        email: 'left@tgt.c',
        level: 'Member',
        sale: '0.0000'
    },
    {
        id: '4554947',
        email: 'hd121212@gmail',
        level: 'Member',
        sale: '0.0000'
    },
    {
        id: '5329563',
        email: 'left@tgt.c',
        level: 'Member',
        sale: '0.0000'
    },
    {
        id: '6554947',
        email: 'hd121212@gmail',
        level: 'Member',
        sale: '0.0000'
    },
    {
        id: '7329563',
        email: 'left@tgt.c',
        level: 'Member',
        sale: '0.0000'
    },
    {
        id: '8554947',
        email: 'hd121212@gmail',
        level: 'Member',
        sale: '0.0000'
    },
];

export default class Member extends React.Component {
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
            tableHead: ['ID', 'Email', 'Level', 'sale'],
            tableData: [
              ['1', '2', '3', '4'],
              ['a', 'b', 'c', 'd'],
            ],
            data: data,
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

    getIndicator = (isExpanded, hasChildrenNodes) => {
        if (!hasChildrenNodes) {
          return '*';
        } else if (isExpanded) {
          return '-';
        } else {
          return '+';
        }
      }

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
                <ImageBackground source={require('../../asset/member_background.png')}
                    style={styles.imageBackground}>
                    <View style={styles.headerPart}>
                        <Header/>
                    </View>
                    <View style={styles.contentPart}>
                        {/* <Text style={styles.memberText}>MEMBER</Text>
                        <Image source={require('../../asset/double_arrow_down.png')}
                            style={styles.doubleArrowDownImage} /> */}
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
                                                color: active === 0 ? "#007aff" : "#FFF",
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            MEMBER LIST
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
                                                color: active === 1 ? "#007aff" : "#FFF",
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            MEMBER TREE
                            </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.registerLinkWrapper}>
                            <View style={styles.registerLinkView}>
                                <Text numberOfLines={1} style={styles.registerLinkText}>https://togethergo.co/register?ref=293683</Text>
                            </View>
                            <TouchableOpacity style={styles.copyWrapper}>
                                <Image source={require('../../asset/copy.png')}
                                    style={styles.copyButton} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.memberWrapper}>
                            <View style={styles.memberLeftWrapper}>
                                <Text>ID: 329563</Text>
                                <Text>F: 17</Text>
                                <Text>Invest: null</Text>
                            </View>
                            <View style={styles.memberRightWrapper}>
                                <Text>left@tgt.co</Text>
                                <Text>2020-02-20 09:08:02</Text>
                                <Text>Sales: 0.0000</Text>
                            </View>
                        </View>
                        <View>
                            <ScrollView>
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
                                    <View style={styles.secondPart}>
                                        <TouchableOpacity style={styles.searchButton}>
                                            <Image source={require('../../asset/search.png')}
                                                style={styles.searchImage} />
                                        </TouchableOpacity>
                                        <Card containerStyle={styles.card}>
                                            <View style={styles.titleWrapper}>
                                                <Text>ID</Text>
                                                <Text>Email</Text>
                                                <Text>Level</Text>
                                                <Text>Sale</Text>
                                            </View>
                                            <View style={styles.content}>
                                                <ScrollView contentContainerStyle={styles.scrollView}>
                                                    {this.state.userInfo.map((item, key) => {
                                                        return (
                                                            <View key={key} style={styles.itemUser}>
                                                                <Text style={styles.idText}>{item.id}</Text>
                                                                <Text style={styles.emailText}>{item.email}</Text>
                                                                <Text style={styles.levelText}>{item.level}</Text>
                                                                <Text style={styles.saleText}>{item.sale}</Text>
                                                            </View>
                                                        );
                                                    })}
                                                </ScrollView>
                                            </View>
                                        </Card>
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
                                    <View style={styles.secondPart}>
                                        <View style={styles.trexViewWrapper}>
                                            <TreeView
                                                data={this.state.data}
                                                renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
                                                    return (
                                                        <View>
                                                            {/* <Text
                                                                style={{
                                                                    marginLeft: 25 * level,
                                                                    fontSize: 18,
                                                                }}>
                                                                {this.getIndicator(isExpanded, hasChildrenNodes)} {node.name}
                                                            </Text> */}
                                                            <Text>
                                                                {node.coin}
                                                            </Text>
                                                            <Text>
                                                                {node.id}
                                                            </Text>
                                                        </View>
                                                    )
                                                }} />
                                        </View>                                       
                                    </View>
                                </Animated.View>
                            </ScrollView>
                        </View>
                        
                    </View>                   
                </ImageBackground>
            </View>
        );
    }
}