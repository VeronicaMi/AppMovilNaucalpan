import React from 'react';
//import { RegistroCelular } from './Vistas/RegistroCelular';
import { Principal } from './Vistas/Principal.js';
import { RegistroUsuario } from './Vistas/RegistroUsuario';
import { TerminosCondiciones } from './Vistas/TerminosYCondiciones';
import { AvisoPrivacidad } from './Vistas/AvisoPrivacidad.js';
import { Home } from './Vistas/Home.js';
import { StackNavigator } from 'react-navigation';
import { Portada } from './Vistas/Portada.js';


const Rutas = StackNavigator({
  PrincipalRT:{
    screen: Principal
  },

  PortadaRT:{
    screen: Portada
  },
  RegistroUsuarioRT:{
    screen: RegistroUsuario 
  },

  TerminosCondicionesRT:{
    screen: TerminosCondiciones
  },

  AvisoPrivacidadRT:{
    screen: AvisoPrivacidad
  },

  HomeRT:{
    screen: Home
  },
},
  {
    rutaInicial: 'PrincipalRT'
  }
);

export default class App extends React.Component {
  render(){
    return(
      <Rutas/>
    );
  }
}
