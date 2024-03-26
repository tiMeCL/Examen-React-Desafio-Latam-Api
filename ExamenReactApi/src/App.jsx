import React from 'react';
import MiApi from './components/MiApi';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Feriados Legales en Chile</h1>
      </header>
      <main className='container-fluid'>

        
        <MiApi/>
        
      </main>
      <footer className="App-footer">
        <p>VikingTech © 2024</p>
      </footer>
    </div>
  );
}

export default App;
