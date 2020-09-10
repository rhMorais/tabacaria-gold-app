import React from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-marca">
          <p>TABACARIA GOLD 18 K</p>
          <img 
            src={logo} 
            className="Img-logo" 
            alt="logo" />
        </div>
        <form>
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            maxLength="20" 
            required 
            autofocus
          ></input>
          <button
            type="submit"
          >Entrar</button>
        </form>
      </header>
    </div>
  );
}

export default App;
