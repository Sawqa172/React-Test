import styled from 'styled-components';
import { WrapperProps, SpinnerProps } from './types';

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: 100%;
  height: ${p => p.size}em;

  ${p =>
    p.color === 'light'
      ? `
    background-color: rgba(0, 0, 0, 0.3);
  `
      : ''}

  ${p =>
    p.color === 'dark'
      ? `
    background-color: transparent;
  `
      : ''}

  ${p =>
    p.type === 'local'
      ? `

    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
  `
      : ''};

  ${p =>
    p.type === 'global'
      ? `
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
   background-color: rgba(255, 255, 255, 0.4);
  `
      : ''}
`;

const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = styled.div<SpinnerProps>`
  border-radius: 50%;
  width: ${p => p.size}em;
  height: ${p => p.size}em;
  font-size: ${p => p.size}px;
  position: relative;
  text-indent: -9999em;
  border-top: ${p => (p.size / 10) * 1.1}em solid rgba(255, 255, 255, 0.2);
  border-right: ${p => (p.size / 10) * 1.1}em solid rgba(255, 255, 255, 0.2);
  border-bottom: ${p => (p.size / 10) * 1.1}em solid rgba(255, 255, 255, 0.2);
  border-left: ${p => (p.size / 10) * 1.1}em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  ${p =>
    p.color === 'dark'
      ? `
  border-top-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: #000000;
  `
      : ''}

  ${p =>
    p.color === 'light'
      ? `
  border-top-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-left-color: #ffffff;
  `
      : ''}

  &::after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export { Wrapper, Inner, Spinner };
