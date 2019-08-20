import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { MapView } from 'react-native-maps';

/* constructor(props){
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
    
    <MapView
                    initialRegion = { this.state.region }
                    showsCompass = {true}
                    rotateEnable = {false}
                    style = {{felx: 1}}
               
               />
    */ 

export class Home extends React.Component{
    static  navigationOptions = { header: null};

   
    render(){
        return(
            <View>
               
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

});