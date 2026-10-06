import React, { Component } from "react";

export default class FormSimple extends Component {
  //Variable de referencia al <input/>
  cajaNombre = React.createRef();
  enviarInformacion = (event) => {
    //Detiene el submit para evitar la recarga de la página
    event.preventDefault();
    let nombre = this.cajaNombre.current.value;
    console.log("Datos enviados, nombre: " + nombre);
  };
  render() {
    return (
      <div>
        <h1>FormSimple</h1>
        <form onSubmit={this.enviarInformacion}>
          <label>Nombre: </label>
          <input type="text" ref={this.cajaNombre} />
          <button>Enviar información</button>
        </form>
      </div>
    );
  }
}
