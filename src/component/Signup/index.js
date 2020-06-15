import React from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

export default class Signup extends React.Component {

    goToLogin = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../../asset/login_screen.png')}
                    style={styles.imageBackground}>
                    <View style={styles.logoPart}>
                    <Image source={require('../../asset/logo.png')}
                            style={styles.logoImage} />
                    </View>
                    <View style={styles.signupPart}>
                        <Text style={styles.signupText}>Sign Up to Together Go</Text>
                        <Text style={styles.detailsText}>Enter your details below</Text>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Email address</Text>
                        </View>
                        <TextInput style={styles.emailTextInput}/>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Password</Text>
                        </View>
                        <TextInput style={styles.emailTextInput}/>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Confirm Password</Text>
                        </View>
                        <TextInput style={styles.emailTextInput}/>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Sponsor</Text>
                        </View>
                        <TextInput style={styles.emailTextInput}/>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Presenter</Text>
                        </View>
                        <TextInput style={styles.emailTextInput}/>
                        <TouchableOpacity style={styles.signupButton}>
                            <Image source={require('../../asset/next.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.alreadyHaveAccountPart}>
                        <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => this.goToLogin()}
                            style={styles.returnButton}>
                            <Image source={require('../../asset/return.png')}
                                style={styles.returnImage}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}