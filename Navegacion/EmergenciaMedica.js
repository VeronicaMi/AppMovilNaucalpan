import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import Encabezado from '../Secciones/Encabezado.js'
import OpcionEmergencia from '../Navegacion/OpcionEmergencia.js';

export default class EmergenciaMedica extends React.Component{
    static  navigationOptions = { 
        title: 'Emergencia Medica'
    };

   
    render(){
        return(
            <View style = {styles.container}>
                <Encabezado/>
                <Text>Hola cara de bola Medica</Text>
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