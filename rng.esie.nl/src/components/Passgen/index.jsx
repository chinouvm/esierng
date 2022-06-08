import React, { useState } from 'react';

import {
  Section,
  CardContainer,
  ItemWrap,
  Text,
  Header,
  Subheader,
  Generation,
  PassHeader,
  Button,
} from './PassgenElements';

const Passgen = () => {
  const [password, setPassword] = useState('Press generate for a password');

  const generatePassword = async () => {
    fetch('https://api.esie.nl/v1/password')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPassword(data);
      });
  };

  return (
    <Section>
      <CardContainer>
        <ItemWrap>
          <Text>
            <Header>Demo: Generate a Password</Header>
            <Subheader>
              GENERATE A 16 CHARACTER <strong>SECURE</strong> PASSWORD
            </Subheader>
          </Text>
          <Generation>
            <PassHeader>{password}</PassHeader>
            <Button onClick={generatePassword}>Generate</Button>
          </Generation>
        </ItemWrap>
      </CardContainer>
    </Section>
  );
};

export default Passgen;
