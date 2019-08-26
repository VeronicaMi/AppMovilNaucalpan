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
import { Encabezado } from '../Secciones/Encabezado.js';

export default class Principal extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Pagina Principal</Text>         
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
});