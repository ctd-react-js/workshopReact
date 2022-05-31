import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function ProyectoBasicoFuncional() {
  return (
    <>
        <Header />
        <Main />
        <Footer contenido='Todos los derechos reservados.' />
    </>
  )
}
