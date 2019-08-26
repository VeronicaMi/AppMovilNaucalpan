import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
/*import React from 'react';
import { RegistroCelular } from './Vistas/RegistroCelular';
import RegistroUsuario from './Vistas/RegistroUsuario.js';
import { TerminosCondiciones } from './Vistas/TerminosYCondiciones.js';
import { AvisoPrivacidad } from './Vistas/AvisoPrivacidad.js';
import { Home } from './Vistas/Home.js';
import { StackNavigator } from 'react-navigation';
import Portada from './Vistas/Portada.js';
import Principal from './Vistas/Principal2.js';

import PantallaPrincipal from './Navegacion/PantallaPrincipal.js';
import EmergenciaMedica from './Navegacion/EmergenciaMedica.js';
import EmergenciaPolicial from './Navegacion/EmergenciaPolicial.js';
import EmergenciaProteccionCivil from './Navegacion/EmergenciaProteccionCivil.js';
import OpcionEmergencia from './Navegacion/OpcionEmergencia.js';

import DatosMedicos from './Vistas/DatosMedicos.js';
import Contactos from './Vistas/Contactos.js';
import BotonPanico from './Vistas/BotonPanico.js';

export default class App extends React.Component {
  render(){
    return(
        <OpcionEmergencia/>
    );
  }
}*/

//Import required react-navigation component 
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

//Import all the screens for Drawer/ Sidebar
import EmerMedica from './Navegacion/EmergenciaMedica.js';
import EmerPolicial from './Navegacion/EmergenciaPolicial.js';
import EmerProCivil from './Navegacion/EmergenciaProteccionCivil.js';

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./Secciones/Image/menu.png')}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//Stack Navigator for First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: EmerMedica,
    navigationOptions: ({ navigation }) => ({
      title: 'qwertyuiop',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: EmerPolicial,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2 sdfghgfd',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: EmerProCivil,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Drawer Navigator for the Navigation Drawer / Sidebar
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  EmerMedica: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 1',
    },
  },

  EmerPolicial: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 2',
    },
  },

  EmerProCivil: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Demo Screen 3',
    },
  },
});
export default createAppContainer(DrawerNavigatorExample);

