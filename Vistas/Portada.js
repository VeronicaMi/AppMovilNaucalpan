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



export class Portada extends React.Component{


    render(){
            //const {navigate} = this.props.navigation;
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

});