import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';

function App() {
  // Disable right click
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  return (
    <div className='App'>
      <Header />
      <div></div>
      <h1>ELA PROJECT</h1>
      <p>Police violence and brutality is bad...</p>
    </div>
  );
}

export default App;
