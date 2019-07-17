import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    AsyncStorage
} from 'react-native';

export class RegistroCelular extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            NumeroCelular: '',
        };
    };

    _onPressButton(){
        Alert.alert('Enviado correctamente')
    }

    render(){
        return (
            <View style = {styles.container}>
                <Text style = {styles.heading}>Inicio de registro </Text>
                    <Text style = {styles.label}> Numero de celular: </Text>

                    <TextInput
                        style = {styles.inputs}
                        onChangeText = {(text) => this.setState({NumeroCelular: text})}
                        value = {this.state.NumeroCelular}
                    />

                    <Button
                        style = {styles.buttonContainer}
                        onPress = {this._onPressButton}
                        title = "Enviado"
                    />


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },

    heading:{
        fontSize: 20,
        flex: 1
    },

    labes:{
        paddingBottom: 20
    },

    inputs:{
        flex: 1,
        width: '90%',
        padding: 20
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },

  });