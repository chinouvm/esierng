import React, { useState } from 'react';
import '../../App.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  Buttons,
} from './AccountHeroElements';

const AccountHero = () => {
  const [token, setToken] = useState('Press generate for a token!');

  const getToken = async () => {
    const postdata = {
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      audience: process.env.REACT_APP_AUDIENCE,
      grant_type: process.env.REACT_APP_GRANT_TYPE,
    };
    fetch('https://cors-anywhere.herokuapp.com/https://esierng.eu.auth0.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postdata),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setToken(data);
      });
  };

  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea');
    newTextArea.innerText = token.access_token;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand('copy');
    newTextArea.remove();
  };

  const handleCopyPassword = (e) => {
    if (token.access_token !== '') {
      copyToClipboard();
      notify('Succesfully copied token.');
    }
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  };

  return (
    <Section>
      <CardContainer>
        <ItemWrap>
          <Text>
            <Header>Generate API Bearer Token</Header>
            <Subheader>GENERATE THE AUTH TOKEN FOR USING THE API</Subheader>
            <Subheader>
              <strong>NOTE</strong> THIS TOKEN WILL EXPIRE AFTER <strong>30 DAYS</strong>
            </Subheader>
          </Text>
          <Generation>
            <PassHeader>{token.access_token}</PassHeader>
            <Buttons>
              <Button onClick={getToken}>Generate</Button>
              <Button onClick={handleCopyPassword}>
                <i className='far fa-copy'></i> Copy
              </Button>
            </Buttons>
            <ToastContainer
              position='top-center'
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable={false}
              pauseOnHover={false}
            />
          </Generation>
        </ItemWrap>
      </CardContainer>
    </Section>
  );
};

export default AccountHero;
