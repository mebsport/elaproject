import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { WebBanner } from './components/WebBanner';
import YoutubeEmbed from './components/YoutubeEmbded';
import MainPage from './pages/MainPage';

function App() {
  // Disable right click
  useEffect(() => {
    const eventHandler = (e: MouseEvent) => e.preventDefault();

    window.addEventListener('contextmenu', eventHandler);
    return () => window.removeEventListener('contextmenu', eventHandler);
  }, []);

  return (
    <div className='App'>
      <MainPage/>
      <p>Police violence and brutality is very bad...</p>

      <YoutubeEmbed embedId='eQ3oZy25O-k' />

      <div className='Pages'>
      </div>
    </div>
  );
}

export default App;
