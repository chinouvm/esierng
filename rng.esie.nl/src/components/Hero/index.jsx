import React from 'react';

import { Container, Logo, Img, Subtitle } from './HeroElements';

const Hero = () => {
  return (
    <>
      <Container>
        <Logo>
          <Img src={process.env.PUBLIC_URL + '/images/ESIERNG.png'} alt='ESIERNG' />
        </Logo>
        <Subtitle>
          THE TRAFFIC BASED <strong>RANDOM</strong> NUMBER GENERATOR
        </Subtitle>
      </Container>
    </>
  );
};

export default Hero;
