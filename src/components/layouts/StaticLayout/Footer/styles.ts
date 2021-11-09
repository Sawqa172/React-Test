import styled from 'styled-components/macro';
import { media } from 'styles/media';
import MainLogo from 'components/atoms/MainLogo';
import FooterNavigation from '../FooterNavigation';
import FooterContacts from '../FooterContacts';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #000;
  min-height: 240px;
  height: auto;

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

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;
const FooterTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  ${media.small`
    flex-direction:column;
    align-items:center;
  `}
`;

const FooterTopNav = styled.nav`
  display: flex;
  ${media.small`
    margin-bottom:25px;
  `}
  a{
    color: ${p => p.theme.colors.mainWhite};
    font-family: ${p => p.theme.fontFamily.SourceSansProRegular};
    font-size: 18px;
    &:not(:last-child){
      margin-right: 35px;
    }
    ${media.xsmall`
      font-size:14px;
      &:not(:last-child){
        margin-right: 15px;
    }
  `}
  }
`;


const FooterTopSocial = styled.div`
  display: flex;
  
  a{
    
    &:not(:last-child){
      margin-right: 20px;
    }
    
    svg{
      fill:#fff;
      transition: .3s;
      
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  padding: 15px 0;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, .25);

`;


const Logo = styled.a`
  font-size: 54px;
  color: ${p => p.theme.colors.mainWhite};
  font-family: ${p => p.theme.fontFamily.RomanescoRegular};
  ${media.small`
    margin-bottom:15px;
  `}

`;

const Copyright = styled.small`
  display: inline-block;
  font-size: 14px;
  font-family: ${p => p.theme.fontFamily.SourceSansProRegular};
  color: #898989;
  width: 100%;
  text-align: center;
`;

const Contacts = styled(FooterContacts)``;

export {
  Wrapper,
  LeftSide,
  RightSide,
  Logo,
  Navigation,
  Contacts,
  FooterTop,
  FooterTopContent,
  FooterTopNav,
  FooterTopSocial,
  FooterBottom,
  Copyright,
};
