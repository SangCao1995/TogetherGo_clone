import React from 'react';
import {Text, TouchableOpacity, View, ImageBackground, Image} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import styles from './styles';
export default class AppIntro extends React.Component {

    componentDidMount() {
        RNBootSplash.hide({duration: 1000});
    }

    goToLogin = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../../asset/image_background.png')} 
                    style={styles.imageBackground}>
                    <View style={styles.logoPart}>

                    </View>
                    <View style={styles.loginButtonPart}>
                        <Image source={require('../../asset/togethergo_text.png')}
                            style={styles.togetherText}/>
                        <TouchableOpacity style={styles.loginButton} onPress={() => this.goToLogin()}>
                            <Image source={require('../../asset/login_button.png')}
                                style={styles.loginButtonImage}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}