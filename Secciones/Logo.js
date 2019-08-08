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

class Logo extends React.Component{
    render(){
        return(
            <Image
            style ={styles.heroImagen}
            source = {require('./Image/GatitoChupon.jpg')}  
            />
        );
    }
}

const styles = StyleSheet.create({
    heroImagen:{
        width: undefined,
        height: undefined,
        flex:1,
    }

})