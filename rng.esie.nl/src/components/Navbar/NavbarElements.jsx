import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  z-index: 1000;
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #202020;
`;

export const TextLogo = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  margin-left: 3rem;
  margin-top: 1.5rem;
  text-decoration: none;

  &::after {
    content: 'RNG';
    color: #459cff;
  }
`;

export const SignInButton = styled.a`
  margin-right: 3rem;
  margin-top: 1.5rem;
`;

export const AccountLink = styled(Link)`
  margin-right: 3rem;
  margin-top: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #ffffff;
  transition: ease-in-out 0.2s;

  &:hover {
    cursor: pointer;
    color: #459cff;
  }
`;
