import React from "react";
// import HolaMundo from './components/HolaMundo/HolaMundo';
import {HolaMundo} from './components/HolaMundo/HolaMundo'
import './App.css';
import { Counter } from "./components/Counter/Counter";
import { Theme } from "./components/Theme/Theme";
import { PokeApi } from "./components/PokeApi/PokeApi";

function App() {

  return (
    <>
      {/* <HolaMundo/>
      <Counter/>
      <Theme/> */}
      <PokeApi/>
    </>
  )
}

export default App
