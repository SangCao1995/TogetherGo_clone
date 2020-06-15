import React from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation, DrawerActions} from '@react-navigation/native';

import styles from './styles';

export default function Header() {

    // makeToggleDrawer = () => {
    //     navigation.toggleDrawer();
    // }
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.headerPart}>
                <TouchableOpacity style={styles.drawerButton}
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Image source={require('../../asset/grid.png')}
                        style={styles.drawerIcon}/>
                </TouchableOpacity>
                <Text style={styles.yourAccountText}>YOUR ACCOUNT</Text>
                <TouchableOpacity style={styles.addMemberButton}>
                    <Image source={require('../../asset/add_member.png')}
                        style={styles.addMemberIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
        </View>
    );


}