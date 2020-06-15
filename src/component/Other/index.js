import React from 'react';
import {Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

const tableData = [
    1,2,3,4,5
]

export default class Other extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: tableData
        }
    }

    goToSignup = () => {
        this.props.navigation.navigate('Signup');
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.searchButton}>
                    <Text>Search</Text>
                </TouchableOpacity>
                <View style={styles.tableWrapper}>
                    {this.state.data.map((item) => (
                        <View style={styles.rows}>
                            <Text style={{ flex: 1, alignSelf: 'stretch' }}>{item}</Text>
                            <Text style={{ flex: 1, alignSelf: 'stretch' }}>{item}</Text>
                            <Text style={{ flex: 1, alignSelf: 'stretch' }}>{item}</Text>
                            <Text style={{ flex: 1, alignSelf: 'stretch' }}>{item}</Text>
                            <Text style={{ flex: 1, alignSelf: 'stretch' }}>{item}</Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}