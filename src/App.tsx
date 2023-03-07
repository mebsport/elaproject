import { useState } from 'react';
import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import YoutubeEmbed from './components/YoutubeEmbded';

function App() {
  // Disable right click
  useEffect(() => {
    const eventHandler = (e: MouseEvent) => e.preventDefault();

    window.addEventListener('contextmenu', eventHandler);
    return () => window.removeEventListener('contextmenu', eventHandler);
  }, []);
  return (
    <div className='App'>
      <div></div>
      <h1>ELA PROJECT</h1>
      <p>Police violence and brutality is very bad...</p>

      <YoutubeEmbed embedId='4Vl4I0weXPU' />
    </div>
  );
}

export default App;
