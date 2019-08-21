import React from 'react';
import {
    StyleSheet,
    Text, 
    View,
    Image,
    AsyncStorage,
    Alert
} from 'react-native';

export default class Encabezado extends React.Component{

        constructor(props){
            super(props);
        }

        render(){
            return(
                <View style = {styles.headStyle}>
                    <Text style = {styles.headText}> Encabezado </Text>
                </View>
            );
        }
}

const styles = StyleSheet.create({
    headStyle:{
        paddingTop: 30,
        paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: '#00FF2A'
    },

    headText:{
        textAlign: 'center',
        fontSize: 30,
        color: '#FF0000'
    },

})