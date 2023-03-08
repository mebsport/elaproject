import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { WebBanner } from './components/WebBanner';
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
      <div className='Banner'>
        <WebBanner />
      </div>
      <div></div>
      <h1>ELA PROJECT</h1>
      <p>Police violence and brutality is very bad...</p>

      <YoutubeEmbed embedId='be2y8A5GKR8' />

      <div className='Pages'></div>
    </div>
  );
}

export default App;
