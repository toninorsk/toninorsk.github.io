import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Extremely motivated and passionate to constantly develop my skills and grow professionally. I am confident in my ability to continuously learn and contribute ready-to-use and precious resources to data team for precise decision-making and adaptive response strategies in a data-driven world. Let's leverage data together.        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;