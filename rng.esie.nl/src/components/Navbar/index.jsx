import React from 'react';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../../context/AuthContext';

import { Container, TextLogo, SignInButton, AccountLink } from './NavbarElements';

const Navbar = () => {
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <TextLogo to='/'>ESIE</TextLogo>
      <SignInButton>
        {user?.displayName ? (
          <AccountLink to='/account'>Account</AccountLink>
        ) : (
          <GoogleButton onClick={handleGoogleSignIn} />
        )}
      </SignInButton>
    </Container>
  );
};

export default Navbar;
