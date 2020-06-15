import React from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Modal} from 'react-native';

import styles from './styles';

export default class Login extends React.Component {

    goToSignup = () => {
        this.props.navigation.navigate('Signup');
    }

    goToDeposit = () => {
        this.props.navigation.navigate('BottomTabBar');
    }

    forgotPassword = () => {
        alert('Hello');
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
                    <View style={styles.loginPart}>
                        <View style={styles.loginWrapper}>
                            <Text style={styles.title}>HELLO</Text>
                            <Text style={styles.signInText}>Sign in your account</Text>
                            <TextInput style={styles.emailInputText}
                                placeholder="Email:"/>
                            <TextInput style={styles.passwordInputText}
                                placeholder="Password:"
                                secureTextEntry={true} />
                            <View style={styles.forgotPasswordWrapper}>
                                <TouchableOpacity onPress={() => this.forgotPassword()}>
                                    <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                                </TouchableOpacity>
                            </View>                          
                            <TouchableOpacity style={styles.loginButton}
                                onPress={() => this.goToDeposit()}>
                                <Text style={styles.loginText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.notHaveAccountWrapper}
                            onPress={() => this.goToSignup()}>
                            <Text>Don't have an account?</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}