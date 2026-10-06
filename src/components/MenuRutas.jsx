import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <nav aria-label="Navegación principal">
        <h2>Menú de rutas</h2>
        <p>
          <a href="/">Inicio</a> | <a href="/cine">Cine</a> |{" "}
          <a href="/musica">Música</a> |{" "}
          <a href="/formsimple">Formulario simple</a> |{" "}
          <a href="/collatz">Collatz</a> |{" "}
          <a href="/tablamultiplicar">Tabla Multiplicar</a> |{" "}
          <a href="/tablamultiplicarV2">Tabla Multiplicar V2</a> |{" "}
          <a href="/seleccionmultiple">Seleccion Multiple</a>
        </p>
      </nav>
    );
  }
}
