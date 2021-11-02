import styled from 'styled-components/macro';
import { media } from 'styles/media';
import MainLogo from 'components/atoms/MainLogo';
import FooterNavigation from '../FooterNavigation';
import FooterContacts from '../FooterContacts';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;

  ${media.medium`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: ${(80 / 1920) * 100}vw ${(110 / 1920) * 100}vw;
  `}

  ${media.large`
    padding: ${80 * (1440 / 1920)}px ${110 * (1440 / 1920)}px;
  `}
`;

const LeftSide = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.medium`
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  `}
`;

const Logo = styled(MainLogo)`
  width: ${(129 / 375) * 100}vw;
  margin-bottom: ${(20 / 375) * 100}vw;

  ${media.xxsmall`
    width: 129px;
    margin-bottom: 20px;
  `}

  ${media.medium`
    flex: 0 0 auto;
    margin-bottom: 0;
    width: ${(269 / 1920) * 100}vw;
  `}

  ${media.large`
    width: ${269 * (1440 / 1920)}px;
  `}
`;

const Navigation = styled(FooterNavigation)`
  ${media.medium`
    flex: 0 0 auto;
    margin-left: ${(100 / 1920) * 100}vw;
  `}

  ${media.large`
    margin-left: ${190 * (1440 / 1920)}px;
  `}
`;

const RightSide = styled.div`
  margin-top: 20px;
  flex: 0 0 auto;

  ${media.medium`
    margin-top: 0;
    align-self: flex-end;
    margin-left: ${(100 / 1920) * 100}vw;
  `}

  ${media.large`
    margin-left: ${190 * (1440 / 1920)}px;
  `}
`;

const Contacts = styled(FooterContacts)``;

export { Wrapper, LeftSide, RightSide, Logo, Navigation, Contacts };
