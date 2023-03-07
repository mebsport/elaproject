import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';
import YoutubeEmbed from './components/YoutubeEmbded';

function App() {
  // Disable right click
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  return (
    <div className='App'>
      <Header />
      <div></div>
      <h1>ELA PROJECT</h1>
      <p>Police violence and brutality is bad...</p>
      
      <YoutubeEmbed embedId='E0RKl7Q8HSc' />
    </div>
  );
}

export default App;