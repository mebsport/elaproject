import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { WebBanner } from './components/WebBanner';
import YoutubeEmbed from './components/YoutubeEmbded';
import MainPage from './pages/MainPage';
import ResearchQuestion from './pages/ResearchQuestion';
import Footer from './components/Footer';

function App() {
  // Disable right click
  useEffect(() => {
    const eventHandler = (e: MouseEvent) => e.preventDefault();

    window.addEventListener('contextmenu', eventHandler);
    return () => window.removeEventListener('contextmenu', eventHandler);
  }, []);

  return (
    <div className='App'>
      <MainPage />
      <ResearchQuestion
        question='what is this?'
        answerParagraph='owbdosbadibsa saoidbaoidb soibdoabd aodbisbdoia aoisdbosaibdao aoisdbsoixzbaod asidobdwaiuob'
        image={}
        even={false}
      />

      <YoutubeEmbed embedId='eQ3oZy25O-k' />

      <Footer footerText='so' linkAddress='www.google.com' />
    </div>
  );
}

export default App;
