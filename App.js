import React from 'react';
//import { RegistroCelular } from './Vistas/RegistroCelular';
import { RegistroUsuario } from './Vistas/RegistroUsuario';
import { TerminosCondiciones } from './Vistas/TerminosYCondiciones';
import { StackNavigator } from 'react-navigation';

const Rutas = StackNavigator({
  RegistroUsuarioRT:{
    screen: RegistroUsuario 
  },

  TerminosCondicionesRT:{
    screen: TerminosCondiciones
  },
},
  {
    rutaInicial: 'RegistroUsuarioRT'
  }
);

export default class App extends React.Component {
  render(){
    return(
      <Rutas/>
    );
  }
}
