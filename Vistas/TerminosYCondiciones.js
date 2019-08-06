import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
    Alert,
    Picker,
    AsyncStorage,
    ScrollView,
    CheckBox
} from 'react-native';
import { Encabezado } from '../Secciones/Encabezado.js';
import { StackNavigator} from 'react-navigation';


export class TerminosCondiciones extends React.Component{
    static navigationOptions = {
        Encabezado: null
    };

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style = {styles.container}>
                <Encabezado/>
                 <Text style = {styles.texto}>
                     Aqui van los terminos y condiciones 
                 </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    texto:{
        flex: 1,
        fontSize: 30,
    },

});
