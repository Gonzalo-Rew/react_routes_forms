import React, { Component } from "react";

export default class TablaMultiplicarV2 extends Component {
  state = {
    multiplos: [],
    numero: "",
    mostrarTabla: false,
    numeros: [],
  };
  selectNumero = React.createRef();

  crearMultiplos = (event) => {
    event.preventDefault();
    let multiplosAux = [];
    let numero = parseInt(this.selectNumero.current.value);

    for (let i = 1; i <= 10; i++) {
      multiplosAux.push(numero * i);
    }

    this.setState({
      multiplos: multiplosAux,
      numero,
      mostrarTabla: true,
    });
  };

  generarNumeros = () => {
    let numerosAux = [];
    for (let i = 0; i < 5; i++) {
      let aleat = Math.floor(Math.random() * 50) + 1;
      numerosAux.push(aleat);
    }

    this.setState({
      numeros: numerosAux,
    });
  };

  componentDidMount = () => {
    this.generarNumeros();
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
        <button onClick={this.generarNumeros}>Generar Números</button>
        <form onSubmit={this.crearMultiplos}>
          <label>Introduce numero: </label>
          <select ref={this.selectNumero}>
            {this.state.numeros.map((numero, index) => {
              return <option key={index}>{numero}</option>;
            })}
          </select>
          <button>Crear múltiplos</button>
        </form>
        {tabla}
      </div>
    );
  }
}
