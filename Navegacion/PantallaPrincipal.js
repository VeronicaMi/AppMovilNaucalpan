import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

/*import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';
import { DrawerNavigator, StackNavigator } from 'react-navigation';*/
import EmergenciaMedica from './EmergenciaMedica.js';
/*import EmergenciaPolicial from './EmergenciaPolicial.js';
import EmergenciaProteccionCivil from './EmergenciaProteccionCivil.js';
import SideMenu from './SideMenu.js';*/

export default class PantallaPrincipal extends React.Component{
    static  navigationOptions = { header: null};

   
    render(){
        return(
            <EmergenciaMedica/>
        );
    }
};

/*class NavigationDrawerStructure extends React.Component {
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {}
            <Image
              source={require('../Secciones/Image/menu.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }

  const MedicalEmerg_StackNavigator = createStackNavigator({
    //All the screen from the First Option will be indexed here
    First: {
      screen: EmergenciaMedica,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 1',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  const PolicialEmerg_StackNavigator = createStackNavigator({
    //All the screen from the Second Option will be indexed here
    Second: {
      screen: EmergenciaPolicial,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 2',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
  
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  const CivilProtectionEmerg_StackNavigator = createStackNavigator({
    //All the screen from the Third Option will be indexed here
    Third: {
      screen: EmergenciaProteccionCivil,
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
  
  const Drawer = createDrawerNavigator(
    {
      //Drawer Optons and indexing
      NavScreen1: { screen: MedicalEmerg_StackNavigator },
      NavScreen2: { screen: PolicialEmerg_StackNavigator },
      NavScreen3: { screen: CivilProtectionEmerg_StackNavigator },
    },
    {
      contentComponent: SideMenu,
      drawerWidth: Dimensions.get('window').width - 120,
    }
  );
  export default createAppContainer(Drawer);*/