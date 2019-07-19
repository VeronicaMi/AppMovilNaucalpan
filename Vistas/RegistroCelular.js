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
                        placeholder = '5528980930'
                        onChangeText = {(text) => this.setState({NumeroCelular: text})}
                        value = {this.state.NumeroCelular}
                    />

                    <Button
                        style = {styles.buttonContainer}
                        onPress = {this._onPressButton}
                        title = "Verificar"
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
        fontSize: 28,
        justifyContent: 'center',
        paddingTop: 80,
        paddingLeft: 50,
        margin: 50,
    },

    label:{
        fontSize: 18,
        paddingLeft: 40
    },

    input:{
        width: '90%',
        margin: 30
    },

    buttonContainer: {
        margin: 20,
        paddingLeft:50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },

  });