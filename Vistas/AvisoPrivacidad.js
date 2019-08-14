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

export class AvisoPrivacidad extends React.Component{
    static navigationOptions = {
        title : 'Aviso de privacidad',
    };
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.texto}>
                   Aqui va el aviso de Privacidad
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