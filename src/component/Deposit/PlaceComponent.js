import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

export default class PlaceComponent extends React.Component{
    render(){
    return (
            <View style={[styles.container,
                        {paddingLeft:this.props.isProvince ? 20 : null,
                        backgroundColor:this.props.isProvince ? 'white' : '#F8F8F8',
                        borderBottomColor:this.props.isProvince ? '#F8F8F8' : 'white',
                        borderBottomWidth:this.props.isProvince ? 1 : 0
                        }]}>  
                <TouchableOpacity disabled={this.props.isProvince ? false : true}
                                  
                                  onPress={()=>this.props.onPress(this.props.placeName)} >
                <View>
                <Text style={{color:'black'}}> {this.props.placeName} </Text>
                </View>
                </TouchableOpacity>
            </View>
    )
  }
} 

const styles=StyleSheet.create({
    container:{
        height:50,
        justifyContent:'center'
    }
})