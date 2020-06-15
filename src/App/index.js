/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer, useNavigation, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {YellowBox} from 'react-native';

import styles from './styles';
import AppIntro from '../component/AppIntro';
import Login from '../component/Login';
import Signup from '../component/Signup';
import Deposit from '../component/Deposit';
import Member from '../component/Member';
import Together from '../component/Together';
import History from '../component/History';
import Other from '../component/Other';
import DrawerContent from './../component/DrawerContent';

const AuthStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const DepositStack = createStackNavigator();
const MemberStack = createStackNavigator();
const TogetherStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const LoginStack = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="AppIntro" component={AppIntro} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
}

const TabBar = () => {
  return (
    <Tab.Navigator style={styles.tabBar}
      barStyle={styles.tabbar}
      activeColor="white"
      >
      <Tab.Screen 
        name="Deposit" component={DepositStackScreen}
        options={{
          tabBarLabel:"Deposit",
          tabBarIcon: ({color}) => (
          <Image source={require('../asset/deposit.png')}
            style={styles.depositIcon}/>
        )}}/>
      <Tab.Screen name="Member" component={MemberStackScreen}
        options={{tabBarIcon: ({color}) => (
          <Image source={require('../asset/member.png')}
            style={styles.depositIcon}/>
        )}}/>
      <Tab.Screen name="Together" component={TogetherStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require('../asset/together.png')}
              style={styles.depositIcon} />
          )
        }}/>
      <Tab.Screen name="History" component={HistoryStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require('../asset/history.png')}
              style={styles.depositIcon} />
          )
        }} />
    </Tab.Navigator>
  );
}

const heloText = () => {
  return(
    <Text>Hello</Text>
  );
}

const DepositStackScreen = () => {
  return(
    <DepositStack.Navigator screenOptions={{ headerShown: false }}>
      <DepositStack.Screen name="Deposit" component={Deposit}
      options={{
        
        title: 'Hello'
      }} />
    </DepositStack.Navigator>
  );
}

const MemberStackScreen = () => {
  return(
    <MemberStack.Navigator screenOptions={{ headerShown: false }}>
      <MemberStack.Screen name="Member" component={Member} />
    </MemberStack.Navigator>
  );
}

const TogetherStackScreen = () => {
  return(
    <TogetherStack.Navigator screenOptions={{ headerShown: false }}>
      <TogetherStack.Screen name="Together" component={Together} />
    </TogetherStack.Navigator>
  );
}

const HistoryStackScreen = () => {
  return(
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  );
}

const headerDrawer = () => {
  return(
    <View style={styles.header}>
      <Image source={require('./../asset/logo.png')}
        style={styles.logoImage}/>
    </View>
  );
}

const DrawerComponent = () => {
  return(
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Tab.Screen name="BottomTabBar" component={TabBar} />
    </Drawer.Navigator>
  );
}

const HeaderLeft = () => {
  const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer());}}>
      <Image source={require('../asset/drawer_button.png')}
        style={{width: 50, height: 50}}/>
    </TouchableOpacity>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: null
    }
  }

  componentDidMount() {
    RNBootSplash.hide({ duration: 1000 });
  }
  
  render() {
    // if (condition) {
      
    // }
    return (
      <NavigationContainer style={styles.container}>
        {/* isSignedIn == true --> Home of Tab bar 
          con chua vo trang AppIntro*/}
        {this.state.userToken ? (
          {DrawerComponent}
        ) : (
            <AuthStack.Navigator>
              <AuthStack.Screen name="AppIntro" component={AppIntro} options={{headerShown: false}}/>
              <AuthStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
              <AuthStack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
              <AuthStack.Screen name="BottomTabBar" component={DrawerComponent} 
                options={{headerShown: false}}
                  />
            </AuthStack.Navigator>
        )}
        
      </NavigationContainer>
    );
  }
};
