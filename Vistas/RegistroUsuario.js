import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    Picker,
    AsyncStorage
} from 'react-native';

export class RegistroUsuario extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            NumeroCelular: '',
            Nombre: '',
            ApellidoPaterno: '',
            ApellidoMaterno: '',
            Email: '',
            ConfirEmail: '',
            FechaNacimiento: '',
            Sexo: '',
            Calle: '',
            NoExterior: '',
            NoInterior: '',
            Colonia: '',
            CodigoPostal: ''
        };
    };

    state = { CompañiaCelular: '' }
        updateCompañia = (CompañiaCelular) => {
            this.setState({CompañiaCelular: CompañiaCelular})
        }

    _onPressButton(){
        Alert.alert('Registrado correctamente')
    }

    render(){
        return (
            <View style = {styles.container}>
                <Text style = {styles.heading}> Registro </Text>
                    
                    <Text style = {styles.titulo}> Datos telefónicos </Text>
                    <Text style = {styles.label}> Numero de Celular </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = '5528980930'
                            onChangeText = {(text) => this.setState({NumeroCelular: text})}
                            value = {this.state.NumeroCelular}
                        />

                    <Picker selectedValue = {this.state.CompañiaCelular} onValueChange = {this.updateCompañia}>
                        <Picker.Item label = 'Telcel' value = 'telcel'/>
                        <Picker.Item label = 'Movistar' value = 'movistar'/>
                        <Picker.Item label = 'ATYT' value = 'aTYT'/>
                        <Picker.Item label = 'Unefon' value = 'unefon'/>
                    </Picker>

                    <Text style = {styles.titulo}> Datos personales </Text>
                    <Text style = {styles.label}> Nombre(s)</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = ''
                            onChangeText = {(text) => this.setState({Nombre: text})}
                            value = {this.state.Nombre}
                        />
                    <Text style = {styles.label}> Apellido Paterno</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = ''
                            onChangeText = {(text) => this.setState({ApellidoPaterno: text})}
                            value = {this.state.ApellidoPaterno}
                        />
                    <Text style = {styles.label}> Apellido Materno</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = ''
                            onChangeText = {(text) => this.setState({ApellidoMaterno: text})}
                            value = {this.state.ApellidoMaterno}
                        />
                    <Text style = {styles.label}> Correo electronico</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = ''
                            onChangeText = {(text) => this.setState({Email: text})}
                            value = {this.state.Email}
                        />
                                <Text style = {styles.label}> Confirma tu correo electronico</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = ''
                            onChangeText = {(text) => this.setState({ConfirEmail: text})}
                            value = {this.state.ConfirEmail}
                        />
                                <Text style = {styles.label}> Nombre(s)</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = ''
                            onChangeText = {(text) => this.setState({Nombre: text})}
                            value = {this.state.Nombre}
                        />







            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{

    },
});
