import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { MapView } from 'react-native-maps';

export class Home extends React.Component{
    static  navigationOptions = { header: null};

    constructor(props){
        super(props);

        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.922,
                longitudeDelta: 0.0421,
            }
        }
    }
    render(){
        return(
            <View>
               <MapView
                    initialRegion = { this.state.region }
                    showsCompass = {true}
                    rotateEnable = {false}
                    style = {{felx: 1}}
               
               />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

});