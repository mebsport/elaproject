import React from 'react';
import styled from 'styled-components';

const Sources = styled.div`
  * {
    font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia,
      serif;
    font-size: 20px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 23px;
  }
`;

const SourcesCited = styled.p`
  text-align: center;
`;

const SourcesCitedBody = styled.p`
  text-align: left;
`;

function Credits() {
  return (
    <Sources>
      <div className='SourcesCited'>
        <SourcesCited>Sources Cited</SourcesCited>
        <SourcesCitedBody>
          Abrams, Z. “What Works to Reduce Police Brutality.” Monitor on
          Psychology, American Psychological Association, 1 Oct. 2020,
          https://www.apa.org/monitor/2020/10/cover-police-brutality. Amnesty
          International. “Police Brutality Is a Global Problem.” Amnesty
          International, 31 Oct. 2022,
          https://www.amnesty.org/en/what-we-do/police-brutality/#:~:text=and%20degrading%20treatment.-,WHAT%20CAUSES%20POLICE%20BRUTALITY%3F,or%20conflict%2C%20and%20entrenched%20impunity.
          Gutierrez, David. “Why Police Training Must Be Reformed.” The
          Institute of Politics at Harvard University, Harvard Political Review,
          https://iop.harvard.edu/get-involved/harvard-political-review/why-police-training-must-be-reformed.
          Jackson, Ashley N et al. “"Can I Live": Black American Adolescent
          Boys' Reports of Police Abuse and the Role of Religiosity on Mental
          Health.” vol. 17,12 4330. 17 Jun. 2020, doi:10.3390/ijerph17124330
          Quinton, Sophie. “Republicans Respond to Black Lives Matter with
          Anti-Protest Bills.” The Pew Charitable Trusts, The Pew Charitable
          Trusts, 4 Feb. 2021,
          https://www.pewtrusts.org/en/research-and-analysis/blogs/stateline/2021/02/04/republicans-respond-to-black-lives-matter-with-anti-protest-bills.
          Ray, Rashawn. “One Year after George Floyd's Murder, What Is the
          Status of Police Reform in the United States?” Brookings, Brookings,
          25 May 2021,
          https://www.brookings.edu/blog/how-we-rise/2021/05/25/one-year-after-george-floyds-murder-what-is-the-status-of-police-reform-in-the-united-states/.
          Subramanian, Ram, and Leily Arzy. “State Policing Reforms since George
          Floyd's Murder.” Brennan Center for Justice, 21 May 2021,
          https://www.brennancenter.org/our-work/research-reports/state-policing-reforms-george-floyds-murder.
          Turner, Nicholas. “What Has Changed since George Floyd's Death?” Vera
          Institute of Justice, 24 May 2021,
          https://www.vera.org/news/what-has-changed-since-george-floyds-death.
          Young-Drake, Reginald, et al. “A Growing Dilemma: How Police Brutality
          Affects Mental Health in Black Communities.” The Movement Lawyering
          Clinic | Howard University School, May 2021.
        </SourcesCitedBody>
      </div>
      <div className='ImagesCited'></div>
    </Sources>
  );
}

export default Credits;
