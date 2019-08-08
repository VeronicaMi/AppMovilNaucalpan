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
import { StackNavigator} from 'react-navigation';
import { Logo } from '../Secciones/Logo.js';


export class Portada extends React.Component{
    static navigationOptions = {
        title : 'Terminos',
        headerStyle:{ backgroundColor: '#f4511e',},
    };
    render(){
        return(
            <View>
                <Text>
                    Aqui deberia ir la Portada
                </Text>
                <TouchableOpacity 
                            style = {styles.inicio}
                            onPress={() => this.props.navigate('RegistroUsuarioRT')}>

                            <Text>Pasar pagina</Text>
                    </TouchableOpacity>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    inicio:{
        borderColor: '#08ECD7',
        borderBottomWidth: 5,
        borderTopWidth: 5,
        backgroundColor: '#08ECD7',
    }

});

/*static navigationOptions = {
        headerTitle: <Logo />,
      };*/