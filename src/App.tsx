import { useEffect } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import YoutubeEmbed from './components/YoutubeEmbded';
import Credits from './pages/Credits';
import MainPage from './pages/MainPage';
import ResearchQuestion from './pages/ResearchQuestion';
import styled from 'styled-components';

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
          answerParagraph='“No government-funded programs exist to provide mental health support for the victims of police brutality and the family members of those affected”(Howard University School of Law) Right now there are no programs to support the youth through racially provoked and discriminatory incidents that use excessive force. Police brutality causes stress and has been seen to lead to depression in the youth and it also builds distrust for the institution that was built to “Protect and Serve” “experiencing higher levels of racial discrimination and endorsing higher public regard beliefs was associated with higher depressive symptomatology and psychological distress among African American adolescents” (International journal of environmental research and public health). The black youth already continually face mental challenges on a day-to-day basis, from being discriminated against, to being racially profiled by different members of the community. “The compounding effect of police abuse only further exacerbates health and mental health challenges” (International journal of environmental research and public health). With the addition of police brutality, only heightens the mental challenges going on in the youth and adds unneeded stress.
          '
          image='https://api.wbez.org/v2/images/0356fcfa-131b-4e4d-98a8-429079a68596.jpg?width=1600&height=0&mode=ASPECT_WIDTH'
        />

        <ResearchQuestion
          question='What are some causes for police brutality? What leads to it, is it their training, being under trained, etc. why does it happen?'
          answerParagraph="“Innocent, unarmed civilians are losing lives because of the lack of training in de-escalation process”(Gutierrez). Unarmed citizens are being killed due to a lack of training and the use of excessive force in the police department. “Currently, training focuses too much on firearm skills and omits vital exposure to non-lethal weapons and conflict management.”(Gutierrez). Police training focuses its time on firearm training and skills instead of focusing on trying to calm down a situation and resolve it peacefully. This combined with the stress of the job can lead to mistakes and end up harming civilians. “there is often a combination of factors including inadequate laws, racial or other forms of discrimination, insecurity or conflict, and entrenched impunity” (Amnesty International). There are many other reasons that excessive force is used in police encounters. Some of it stems from systematic racism. That combined with a need to abuse power because of one's insecurity or personal agenda can put people in danger. “Instead of viewing police officers as guardians of a community, the rhetoric around the police often revolves around a warrior image”(Gutierrez) Police are here to protect us but generally, the image surrounding them is a warrior image instead of a guardian which can lead to misinterpretation of their job."
          image='https://i2.wp.com/hechingerreport.org/wp-content/uploads/2020/06/preston-police-education-3.jpg?fit=2000%2C1312'
        />

        <ResearchQuestion
          question='What changes are being made to amend it or fix it, and which efforts have been successful and why?'
          answerParagraph=''
          image='https://static01.nyt.com/images/2018/06/06/nyregion/00bias-01/merlin_137575770_9bc147c2-faff-433b-83f8-2b6c44293b67-superJumbo.jpg'
        />

        <ResearchQuestion
          question='What has been the influence of the public opinion after events such as the George Floyd killing and subsequent uprisings in recent years on the police mindset, training and deescalation?'
          answerParagraph=''
          image='https://media.cnn.com/api/v1/images/stellar/prod/200623135338-juneteenth-george-floyd-protesters-restricted.jpg?q=w_1600,h_1067,x_0,y_0,c_fill'
        />
      </div>

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
