import styled from 'styled-components/macro';
import { media } from 'styles/media';
import MainLogo from 'components/atoms/MainLogo';
import FooterNavigation from '../FooterNavigation';
import FooterContacts from '../FooterContacts';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  animation: loader-10-1 2s infinite linear;
  @keyframes loader-10-1 {
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  animation: loader-10-2 2s infinite ease-in-out;
  position: absolute;
  &:nth-child(1) {
    top: 0;
    left: 50%;
  }
  &:nth-child(2) {
    bottom: 0;
    right: 50%;
    animation-delay: -1s;
  }

  @keyframes loader-10-2 {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`;

export { Wrapper, Container, Image };
