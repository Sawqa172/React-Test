import styled from 'styled-components/macro';
import AsideNavigation from '../AsideNavigation';
import AsideContacts from '../AsideContacts';
import { WrapperProps } from './types';
import { media } from 'styles/media';
import AsideBg from 'assets/images/aside-bg.png';

const Wrapper = styled.aside<WrapperProps>`
  position: fixed;
  top: 100%;
  left: 0;
  transform: translateY(${p => (p.isVisible ? -100 : 0)}%);
  opacity: ${p => (p.isVisible ? 1 : 0)};
  visibility: ${p => (p.isVisible ? 'visible' : 'hidden')};
  height: 100vh;
  width: 100vw;
  padding-top: ${(110 / 375) * 100}vw;
  background: ${p => p.theme.colors.mainWhite};
  // background: ${p =>
    p.theme.colors.mainWhite} url(${AsideBg}) bottom center /
  //   50% auto no-repeat;
  transition: width 0.3s, transform 0.3s, opacity 0.3s, visibility 0.3s;

  ${media.xxsmall`
    height: 100vh;
    padding-top: 220px;
  `}

  ${media.medium`
    padding-top: ${(190 / 1440) * 100}vw;
  `}
  
  ${media.large`
    padding-top: ${190 * (1440 / 1920)}px;
  `}
`;

const Navigation = styled(AsideNavigation)``;

const Contacts = styled(AsideContacts)`
  margin: ${(50 / 375) * 100}vw auto 0;

  ${media.xxsmall`
    margin-top: 50px;
  `}

  ${media.medium`
    margin-top: ${(100 / 1440) * 100}vw;
  `}

  ${media.large`
    margin-top: ${100 * (1440 / 1920)}px;
  `}
`;

export { Wrapper, Navigation, Contacts };
