import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cine from "./Cine";
import Home from "./Home";

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cine" element={<Cine/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
