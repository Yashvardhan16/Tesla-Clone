import React from 'react';
import logo from './logo.svg';
import carReducer from '/Users/yashvardhan/tesla/src/features/Car/CarSlice.js';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
function App() {
  return (
    <div className="App">
    {/* <Header /> */} 
    <Header />
    <Home />
  
    </div>
  );
}

export default App;
