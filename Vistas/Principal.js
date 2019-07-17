import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { RegistroCelular } from '../Vistas/RegistroCelular.js';

export class Principal extends React.Component{

    render(){
        const { navigate } = this.props.navigation;

        return(
            < RegistroCelular />
        );
    }
    

}