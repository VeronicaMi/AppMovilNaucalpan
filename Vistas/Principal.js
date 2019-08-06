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
import { Encabezado } from '../Secciones/Encabezado.js';
import { RegistroUsuario } from '../Vistas/RegistroUsuario.js';

export class Principal extends React.Component{

    static  navigationOptions = { Encabezado: null};

    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style = {styles.container}>
                <Encabezado navigate = {navigate} message = 'Hola' />
                <RegistroUsuario navigate = {navigate} />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
});