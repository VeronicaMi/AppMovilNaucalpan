import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Encabezado from '../Secciones/Encabezado.js'
import OpcionEmergencia from '../Navegacion/OpcionEmergencia.js';

export default class EmergenciaPolicial extends Component{
    static  navigationOptions = { header: null};

   
    render(){
        return(
            <View style = {styles.container}>
                <Encabezado/>
                <Text>Hola cara de bola Policial</Text>
                <OpcionEmergencia/>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

});