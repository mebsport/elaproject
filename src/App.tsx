import { useEffect } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import YoutubeEmbed from './components/YoutubeEmbded';
import Credits from './pages/Credits';
import MainPage from './pages/MainPage';
import ResearchQuestion from './pages/ResearchQuestion';

function App() {
  // Disable right click
  useEffect(() => {
    const eventHandler = (e: MouseEvent) => e.preventDefault();

    window.addEventListener('contextmenu', eventHandler);
    return () => window.removeEventListener('contextmenu', eventHandler);
  }, []);


  //Main Page
  return (
    <div className='App'>
      <MainPage />

      <div className='Pages'>
        <ResearchQuestion
          question='How does police brutality affect the minds of the youth in the United States?'
          answerParagraph='[PUT ANSWER HERE]'
          image='https://api.wbez.org/v2/images/0356fcfa-131b-4e4d-98a8-429079a68596.jpg?width=1600&height=0&mode=ASPECT_WIDTH'
        />

        <ResearchQuestion
          question='What are some causes for police brutality? What leads to it, is it their training, being under trained, etc. why does it happen?'
          answerParagraph='[PUT ANSWER HERE]'
          image='https://i2.wp.com/hechingerreport.org/wp-content/uploads/2020/06/preston-police-education-3.jpg?fit=2000%2C1312'
        />

        <ResearchQuestion
          question='What changes are being made to amend it or fix it, and which efforts have been successful and why?'
          answerParagraph='[PUT ANSWER HERE]'
          image='https://static01.nyt.com/images/2018/06/06/nyregion/00bias-01/merlin_137575770_9bc147c2-faff-433b-83f8-2b6c44293b67-superJumbo.jpg'
        />

        <ResearchQuestion
          question='What has been the influence of the public opinion after events such as the George Floyd killing and subsequent uprisings in recent years on the police mindset, training and deescalation?'
          answerParagraph='[PUT ANSWER HERE]'
          image='https://media.cnn.com/api/v1/images/stellar/prod/200623135338-juneteenth-george-floyd-protesters-restricted.jpg?q=w_1600,h_1067,x_0,y_0,c_fill'
        />
      </div>

      <YoutubeEmbed embedId='eQ3oZy25O-k' />

      <Credits />

      <div className='Footer'>
        <Footer
          footerText='Source Code'
          linkAddress='https://github.com/mebsport/elaproject'
          icon='./assets/github_icon.svg'
        />
        <Footer
          footerText='Visit My Site'
          linkAddress='https://marcelusbrown.com'
          icon='./assets/website_icon.svg'
        />
        <Footer
          footerText='Twitter'
          linkAddress='https://twitter.com/marcelusebrown'
          icon='./assets/twitter logo_icon.svg'
        />
        <Footer
          footerText='Instagram'
          linkAddress='https://instagram.com/mebsport'
          icon='./assets/instagram logo_icon.svg'
        />
        <Footer
          footerText='Youtube'
          linkAddress='https://www.youtube.com/@marcelusbrown6957'
          icon='./assets/youtube logo_icon.svg'
        />
      </div>
    </div>
  );
}

export default App;
