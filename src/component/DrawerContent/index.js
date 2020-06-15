import React from 'react';
import {View, Image, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {Drawer} from 'react-native-paper';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import styles from './styles';
import { Avatar } from 'react-native-elements';

export default function DrawerContent(props) {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../asset/drawer_background.png')}
                style={styles.imageBackground}>
                <View style={styles.header}>
                    <View style={styles.avatarWrapper}>
                        <Image source={require('../../asset/avatar.png')}
                            style={styles.avatar} />
                    </View>
                    <View style={styles.userInfomation}>
                        <Text style={styles.niceDayText}>Have a nice day !!!</Text>
                        <Text style={styles.idText}>293683</Text>
                        <Text style={styles.emailText}>testapi@togethergo.co</Text>
                        <Image source={require('../../asset/your_account.png')}
                            style={styles.yourAccount} />
                    </View>
                </View>
                <View style={styles.line}></View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        label={({ focused, color }) => <Text style={{ color: 'white' }}>Withdraw</Text>}
                        onPress={() => { }} />
                    <DrawerItem
                        label={({ focused, color }) => <Text style={{ color: 'white' }}>Transfer</Text>}
                        onPress={() => { }} />
                    <DrawerItem
                        label={({ focused, color }) => <Text style={{ color: 'white' }}>Pin Setup</Text>}
                        onPress={() => { }} />
                    <DrawerItem
                        label={({ focused, color }) => <Text style={{ color: 'white' }}>2FA</Text>}
                        onPress={() => { }} />
                    <DrawerItem
                        label={({ focused, color }) => <Text style={{ color: 'white' }}>Change Password</Text>}
                        onPress={() => { }} />
                </Drawer.Section>
                <View style={styles.logoutButtonWrapper}>
                    <TouchableOpacity>
                        <Image source={require('../../asset/logout.png')}
                            style={styles.logoutImage} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
    );
}