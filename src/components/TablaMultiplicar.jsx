import React, { Component } from "react";

export default class TablaMultiplicar extends Component {
  state = {
    multiplos: [],
    numero: "",
    mostrarTabla: false,
  };
  cajaNumero = React.createRef();

  crearMultiplos = (event) => {
    event.preventDefault();
    let multiplosAux = [];
    let numero = parseInt(this.cajaNumero.current.value);

    for (let i = 1; i <= 10; i++) {
      multiplosAux.push(numero * i); 
    }

    this.setState({
      multiplos: multiplosAux,
      numero,
      mostrarTabla: true,
    });
  };

  render() {
    let tabla;
    if (this.state.mostrarTabla) {
      tabla = (
        <table border="1">
          <thead>
            <tr>
              <th>Tabla de multiplicar del: {this.state.numero}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Operación</td>
              <td>Resultado</td>
            </tr>
            {this.state.multiplos.map((multiplo, index) => {
              return (
                <tr key={index}>
                  <td>
                    {index + 1} * {this.state.numero}
                  </td>
                  <td>{multiplo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }

    return (
      <div>
        <h1>Tabla Multiplicar</h1>
        <form onSubmit={this.crearMultiplos}>
          <label>Introduce numero: </label>
          <input type="number" ref={this.cajaNumero}></input>
          <button>Crear múltiplos</button>
        </form>
        {tabla}
      </div>
    );
  }
}
