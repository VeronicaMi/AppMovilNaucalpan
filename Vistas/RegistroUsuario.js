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
import DatePicker from 'react-native-datepicker';

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
            FechaNacimiento: new Date().toDateString(),
            Sexo: '',
            Calle: '',
            NoExterior: '',
            NoInterior: '',
            Colonia: '',
            CodigoPostal: '',
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
                            placeholder = 'F'
                            onChangeText = {(text) => this.setState({Nombre: text})}
                            value = {this.state.Nombre}
                        />
                    <Text style = {styles.label}> Apellido Paterno</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'F'
                            onChangeText = {(text) => this.setState({ApellidoPaterno: text})}
                            value = {this.state.ApellidoPaterno}
                        />
                    <Text style = {styles.label}> Apellido Materno</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'F'
                            onChangeText = {(text) => this.setState({ApellidoMaterno: text})}
                            value = {this.state.ApellidoMaterno}
                        />
                    <Text style = {styles.label}> Correo electronico</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'F'
                            onChangeText = {(text) => this.setState({Email: text})}
                            value = {this.state.Email}
                        />
                    <Text style = {styles.label}> Confirma tu correo electronico</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'F'
                            onChangeText = {(text) => this.setState({ConfirEmail: text})}
                            value = {this.state.ConfirEmail}
                        />

                        <DatePicker
                            style={{}}
                            FechaNacimiento={this.state.FechaNacimiento} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            minDate="01-01-1900"
                            maxDate="01-01-2019"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                                },
                                dateInput: {
                                marginLeft: 36
                                }
                            }}
                            onDateChange={(FechaNacimiento) => {this.setState({FechaNacimiento: FechaNacimiento})}}
                        />


                    <Text style = {styles.label}> Calle(s)</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'F'
                            onChangeText = {(text) => this.setState({Calle: text})}
                            value = {this.state.Calle}
                        />







            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },

    heading:{
        fontSize: 28,
        justifyContent: 'center',
        paddingTop: 80,
        paddingLeft: 50,
        margin: 10,
    },

    titulo:{
        fontSize: 28,
        justifyContent: 'center',
        paddingLeft: 30,
        margin: 20,
    },

    label:{
        fontSize: 18,
        paddingLeft: 40
    },

    input:{
        paddingLeft: 35
    },

    buttonContainer: {
        margin: 20,
        paddingLeft:50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },

    calendario:{
        width: 200
    },
});
