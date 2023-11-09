import React from "react";
import { HolaMundo } from './components/HolaMundo/HolaMundo'
import './App.css';
import { Counter } from "./components/Counter/Counter";
import { Theme } from "./components/Theme/Theme";
import { PokeApi } from "./components/PokeApi/PokeApi";
import { ProductList } from "./components/ProductList/ProductList";
import { NavBar } from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { Dolar } from "./components/Dolar/Dolar";


function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ProductList/> }/>
        <Route exact path="/contador" element={<Counter/> }/>
        <Route exact path="/theme" element={<Theme/> }/>
        <Route exact path="/poke" element={<PokeApi/> }/>
        <Route exact path="/hola" element={<HolaMundo/> }/>
        <Route exact path="*" element={<ProductList/>}/>
      </Routes>
      <Dolar/>
    </Router>
  )
}

export default App
