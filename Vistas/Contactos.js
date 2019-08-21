import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput
} from 'react-native';
import Encabezado from '../Secciones/Encabezado.js'

export default class Contactos extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            Nombre: '',
            Telefono: '',
        };
    };
    
    
    static  navigationOptions = { 
        title: ''
    };

   
    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <Encabezado/>
                    <Text>Hola cara de bola Contactos</Text>

                    <Text style = {styles.titulo}> Contactos de emergencia </Text>
                        <Text style = {styles.label}> Nombre  </Text>
                            <TextInput
                                style = {styles.input}
                                placeholder = 'Alberto'
                                onChangeText = {(text) => this.setState({Nombre: text})}
                                value = {this.state.Nombre}
                            />

                        <Text style = {styles.label}> Telefono </Text>
                            <TextInput
                                style = {styles.input}
                                placeholder = '55 98 98 98 98'
                                onChangeText = {(text) => this.setState({Telefono: text})}
                                value = {this.state.Telefono}
                            />

                        <TouchableOpacity>
                            <Image
                                style = {styles.imagePlus}
                                source = {require('../Secciones/Image/anadir.png')}
                            />
                            <Text style = {styles.textPlus}>Añadir contacto</Text>
                        </TouchableOpacity>

                        <View style = {styles.button}>
                        <TouchableOpacity style = {styles.buttonStyle} 
                            onPress={() => this.props.navigate('HomeRT')}>
                            <Text style = {styles.buttonText}>GUARDAR</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    titulo:{
        fontSize: 28,
        justifyContent: 'center',
        paddingLeft: 30,
        margin: 5,
    },

    label:{
        fontSize: 18,
        paddingLeft: 40,
    },

    input:{
        margin:15,
        marginLeft: 40,
        borderBottomWidth: 3,
        borderBottomColor: 'green',
        width: 290,
    },
    
    imagePlus:{
        marginTop: 30,
        margin: 50,
        marginLeft: 65,
        height: 30,
        width: 30,
    },

    textPlus:{
        marginLeft: 40,
        marginTop: -40,
        fontSize: 12,
    },

    button:{
        flex: 1,
        marginTop: 40,
        marginRight: 100,
        marginLeft: 100,
        alignItems: 'center',
        borderColor: '#08ECD7',
        borderBottomWidth: 5,
        borderTopWidth: 5,
        backgroundColor: '#08ECD7',
    },

    buttonStyle:{
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    buttonText:{
        color: '#000000',
        fontSize: 24,
    },
});