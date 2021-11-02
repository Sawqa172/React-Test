import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { Header } from './Header';
import { Footer } from './Footer';
import { Aside } from './Aside';

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-width: 310px;
  min-height: inherit;
  background-color: ${p => p.theme.colors.mainWhite};
  overflow: hidden;
`;

const StyledHeader = styled(Header)`
  flex: 0 0 auto;
  z-index: 3;
`;

const StyledAside = styled(Aside)`
  z-index: 2;
`;

const Content = styled.main`
  flex: 1 1 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding-top: ${(80 / 375) * 100}vw;

  ${media.xxsmall`
    padding-top: 80px;
  `}

  ${media.medium`
    padding-top: ${(158 / 1920) * 100}vw;
  `}
  ${media.large`
    padding-top: ${158 * (1440 / 1920)}px;
  `}
`;

const StyledFooter = styled(Footer)`
  flex: 0 0 auto;
`;

export {
  Wrapper,
  StyledHeader as Header,
  StyledAside as Aside,
  Content,
  StyledFooter as Footer,
};
