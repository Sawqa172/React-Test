import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { ToggleButton } from './ToggleButton';
import MainLogo from 'components/atoms/MainLogo';

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  position: fixed;
  width: 100%;
  background-color: ${p => p.theme.colors.mainWhite};

  ${media.medium`
    padding: ${(45 / 1920) * 100}vw ${(110 / 1920) * 100}vw;
  `}

  ${media.large`
    padding: ${45 * (1440 / 1920)}px ${110 * (1440 / 1920)}px;
  `}
`;

const Button = styled(ToggleButton)``;

const Logo = styled(MainLogo)`
  margin-top: -${(10 / 375) * 100}vw;
  width: ${(200 / 375) * 100}vw;

  ${media.xxsmall`
    margin-top: -10px;
    width: 200px;
  `}

  ${media.medium`
    margin-top: -${(10 / 1920) * 100}vw;
    width: ${(397 / 1920) * 100}vw;
    height: ${(68 / 1920) * 100}vw;
  `}
  
  ${media.large`
    margin-top: -${10 * (1440 / 1920)}px;
    width: ${397 * (1440 / 1920)}px;
    height: ${68 * (1440 / 1920)}px;
  `}
`;

const Actions = styled.div`
  display: none;

  ${media.medium`
    display: inline-block;
    width: ${(127 / 1920) * 100}vw;
    height: ${(60 / 1920) * 100}vw;
  `}

  ${media.large`
    width: ${127 * (1440 / 1920)}px;
    height: ${60 * (1440 / 1920)}px;
  `}
`;

export { Wrapper, Button, Logo, Actions };
