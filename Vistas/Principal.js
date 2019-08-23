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
import { RegistroUsuario } from '../Vistas/RegistroUsuario.js';
import { Portada } from '../Vistas/Portada.js';

export default class Principal extends React.Component{

    static  navigationOptions = { header: null};

    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style = {styles.container}>
                <Portada navigate = {navigate} />                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
});