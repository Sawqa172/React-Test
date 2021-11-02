import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { WrapperProps } from './types';

const Wrapper = styled.button<WrapperProps>`
  position: relative;
  height: ${(80 / 375) * 100}vw;
  width: ${(70 / 375) * 100}vw;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;

  ${media.xxsmall`
    height: 80px;
    width: 70px;
  `}

  ${media.medium`
    width: ${(127 / 1920) * 100}vw;
    height: ${(60 / 1920) * 100}vw;
    &:hover span {
      background: ${p => p.theme.gradients.radialBlue};
    }
  `}

  ${media.large`
    width: ${127 * (1440 / 1920)}px;
    height: ${60 * (1440 / 1920)}px;
  `}

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    height: ${(3 / 375) * 100}vw;
    width: ${(30 / 375) * 100}vw;
    background-color: ${p => p.theme.colors.primary};
    transform-origin: 50% 50%;
    transition: opacity 0.3s, transform 0.3s, background-color 0.3s;

    ${media.xxsmall`
      height: 3px;
      width: 30px;
    `}

    ${media.medium`
      height: ${(6 / 1920) * 100}vw;
      width: ${(127 / 1920) * 100}vw;
    `}
    
    ${media.large`
      height: ${6 * (1440 / 1920)}px;
      width: ${127 * (1440 / 1920)}px;
    `}
  }

  span:nth-child(1) {
    transform: translate(-50%, calc(-50% - ${(9 / 375) * 100}vw));

    ${p =>
      p.isToggled &&
      `
      transform: translate(-50%, -50%) rotate(45deg) !important;
    `}

    ${media.xxsmall`
      transform: translate(-50%, calc(-50% - 9px));
    `}

    ${media.medium`
      transform: translate(-50%, calc(-50% - ${(14 / 1920) * 100}vw));
    `}

    ${media.large`
       transform: translate(-50%, calc(-50% - ${14 * (1440 / 1920)}px));
    `}
  }

  span:nth-child(2) {
    transform: translate(-50%, -50%);

    ${p =>
      p.isToggled &&
      `
      opacity: 0;
    `}
  }

  span:nth-child(3) {
    transform: translate(-50%, calc(-50% + ${(9 / 375) * 100}vw));

    ${p =>
      p.isToggled &&
      `
      transform: translate(-50%, -50%) rotate(-45deg)  !important;
    `}

    ${media.xxsmall`
      transform: translate(-50%, calc(-50% + 9px));
    `}

    ${media.medium`
      transform: translate(-50%, calc(-50% + ${(14 / 1920) * 100}vw));
    `}

    ${media.large`
      transform: translate(-50%, calc(-50% + ${14 * (1440 / 1920)}px));
    `}
  }
`;

export { Wrapper };
