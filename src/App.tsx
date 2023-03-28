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
  // useEffect(() => {
  //   const eventHandler = (e: MouseEvent) => e.preventDefault();

  //   window.addEventListener('contextmenu', eventHandler);
  //   return () => window.removeEventListener('contextmenu', eventHandler);
  // }, []);

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
          answerParagraph='“In Seattle, officers trained in a “procedural justice” intervention designed in part by psychologists used force up to 40% less"(Abrams). Psychologists are able to come up with non lethal and non violent alternatives and actions for the police to use to de-escalate situations. Because of these new techniques being taught to officers, violent force has been seen being us““We know that the policing model of using force to compel compliance lowers the crime rate but does not build trust,” says Tyler, who has developed and studied models of procedurally just policing. “The crime rate has declined about 75% in the last 30 years, but public trust in the police hasn’t increased at all”” (Abrams) The current policing system may lower crime rate but it does so at the cost of the public. Over the years the public has lost trust in the police because of incidents involving police shooting unarmed people. “12 states and DC have created a duty for law enforcement officers to intervene in cases of excessive or illegal force or misconduct, with penalties for officers who fail to do so ranging from discretionary decertification to criminal liability”(Brennan Center For Justice). Many states have opted to make a change, from making body cameras on cops mandatory to creating laws so police officers are required to step in, in “Many states changed their use of force standards, often clarifying that deadly force is justified only as a last resort after exhausting all nonviolent options”(Brennan Center For Justice). States have also banned the use of force and made it only a last resort in situations. “It teaches officers to prevent their peers from perpetrating unnecessary violence, which can save both lives and careers” (Abrams). When the cops hold each other accountable they are able to prevent a lot more mishaps and situations like those from happening. '
          image='https://static01.nyt.com/images/2018/06/06/nyregion/00bias-01/merlin_137575770_9bc147c2-faff-433b-83f8-2b6c44293b67-superJumbo.jpg'
        />

        <ResearchQuestion
          question='What has been the influence of the public opinion after events such as the George Floyd killing and subsequent uprisings in recent years on the police mindset, training and deescalation?'
          answerParagraph='The public is disappointed in the lack of successful changes. Despite the police departments creating reforms and changing laws, the country still has a racist background which government agencies tend to act on. “America remains a deeply racist country and until we recognize and deal with that fact, even important convictions like the Chauvin case will not alter the status quo in a meaningful way” (Ray). “Over 60 people were killed by police during the length of the Chauvin trial. On the same day as opening statements, 13-year-old Adam Toledo was killed by police during a foot chase” (Ray). Despite the ongoing trial, the police were still acting in racist ways, over 60 people were killed by the police during the length of Chauvin’s trial for the murder of George Floyd. Despite this, it was not all bad. “state legislatures passed more than 140 new police oversight and reform laws in the past year” (Turner). In the year following George Floyds death 140 new laws were passed to regulate the police more and make the environment safer for people. One of these laws includes the  George Floyd Justice in Policing Act. “The legislation includes a series of important reforms that Democrats and Republicans agree upon, including: providing mental health training and assistance for officers; collecting use of force data; providing de-escalation training; certifying officers and training courses at the federal level; mandating body-worn cameras; creating a data base of bad apples; banning chokeholds and no-knock warrants; and creating a federal anti-lynching bill” (Ray). This law bans a lot of lethal force and mandates escalation training as well as wearing body cams. Many of these acts would not be possible without the uprise of the public.'
          image='https://media.cnn.com/api/v1/images/stellar/prod/200623135338-juneteenth-george-floyd-protesters-restricted.jpg?q=w_1600,h_1067,x_0,y_0,c_fill'
        />

        <ResearchQuestion
          question='How has perception of this issue changed over the years?'
          answerParagraph='“We have to strengthen our laws when it comes to mob violence, to make sure individuals are unequivocally dissuaded from committing violence when they’re in large groups” (Quinton). In response to a lot of protests, politicians tried to suppress the voice of the public to stop them from uprising and protesting. This did not work and over the past few years, especially following the recent deaths, this issue has just come more and more into the light as time passes. Compared to 10 years ago back when the Black Lives Matter movement was just starting, this movement is so much bigger now and has made a lot more changes. The mental health of people affected by these issues is also becoming more important. Government agencies are taking funds from the police to sue them for mental health programs and more.'
          image='https://i0.wp.com/georgetownsecuritystudiesreview.org/wp-content/uploads/2020/08/Shutterstock-Police-Reform.jpg?w=1726&ssl=1'
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
