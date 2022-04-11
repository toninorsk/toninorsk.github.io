import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "Winner", text: 'AiCE X-cellent Camp, CMKL 2021'},
  { number: "Winner", text: 'CPF Virtual Hackathon, 42BKK 2021', },
  { number: "#2Prize", text: 'Blue Team, White Hat Hacking, TPA 2021', },
  { number: "Finalist", text: 'Climate Change Hackathon, 2021', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}🏆`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
