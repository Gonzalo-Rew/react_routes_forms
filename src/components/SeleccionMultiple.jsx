import React, { Component } from "react";

export default class SeleccionMultiple extends Component {
  selectMultiple = React.createRef();
  mostrarSeleccionados = (event) => {
    event.preventDefault();
    let options = this.selectMultiple.current.options;
    let data = "";
    for (let opt of options){
        if (opt.selected){
            data += opt.value + ", ";
        }
    } 
    this.setState({
        elementos: data
    })
  };
  state = {  
    elementos: ""
  };
  render() {
    return (
      <div>
        <h1>Seleccion Multiple</h1>
        <h3>{this.state.elementos}</h3>
        <form onSubmit={this.mostrarSeleccionados}>
          <label>Seleccione elementos: </label>
          <select size="6" multiple ref={this.selectMultiple}>
            <option>Elemento 1</option>
            <option>Elemento 2</option>
            <option>Elemento 3</option>
            <option>Elemento 4</option>
            <option>Elemento 5</option>
            <option>Elemento 6</option>
            <option>Elemento 7</option>
            <option>Elemento 8</option>
          </select>
          <button>Mostrar Seleccionados</button>
        </form>
      </div>
    );
  }
}
