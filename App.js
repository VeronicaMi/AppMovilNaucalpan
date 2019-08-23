import React from 'react';
import { RegistroCelular } from './Vistas/RegistroCelular';
import { Principal } from './Vistas/Principal.js';
import { RegistroUsuario } from './Vistas/RegistroUsuario.js';
import RegUsuario from './Vistas/RegUsuario.js';
import { TerminosCondiciones } from './Vistas/TerminosYCondiciones.js';
import { AvisoPrivacidad } from './Vistas/AvisoPrivacidad.js';
import { Home } from './Vistas/Home.js';
import { StackNavigator } from 'react-navigation';
import { Portada } from './Vistas/Portada.js';

import PantallaPrincipal from './Navegacion/PantallaPrincipal.js';
import EmergenciaMedica from './Navegacion/EmergenciaMedica.js';
import EmergenciaPolicial from './Navegacion/EmergenciaPolicial.js';
import EmergenciaProteccionCivil from './Navegacion/EmergenciaProteccionCivil.js';

import DatosMedicos from './Vistas/DatosMedicos.js';
import Contactos from './Vistas/Contactos.js';
import BotonPanico from './Vistas/BotonPanico.js';


/*const Rutas = StackNavigator({  
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

},
  {
    rutaInicial: 'PrincipalRT'
  }
);*/

export default class App extends React.Component {
  render(){
    return(
        <RegUsuario/>
    );
  }
}
