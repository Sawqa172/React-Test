import styled from 'styled-components/macro';
import AsideNavigation from '../AsideNavigation';
import { WrapperProps } from './types';
import { media } from 'styles/media';

const Wrapper = styled.aside<WrapperProps>`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 100%;
  transform: translateX(${p => (p.isVisible ? 100 : 0)}%);
  height: 100vh;
  width: 257px;
  background-color: ${p => p.theme.colors.mainWhite};
  transition: width 0.3s, transform 0.3s;
`;

const Backdrop = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.primary};
  opacity: 0.25;
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  overflow-y: auto;
  background-color: ${p => p.theme.colors.mainWhite}; ;
`;

const Header = styled.div`
  height: 76px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  overflow: hidden;
  transition: padding-left 0.3s;
`;

const LogoWrapper = styled.div`
  width: 150px;
  height: auto;
  font-size: 0;
  transition: width 0.3s;
  text-align: center;
`;

const LogoLink = styled.a`
  width: 100%;
  height: auto;
  font-size: 0;
  transition: width 0.3s;
`;

const ToggleButton = styled.button`
  height: 100%;
  width: 50px;
  padding: 0;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 100%
  );
  transition: transform 0.3s;

  & > * {
    transform: rotateY(0deg);
    transition: transform 0.3s;
    color: ${p => p.theme.colors.primary};
  }
`;

const Navigation = styled(AsideNavigation)`
  margin-top: 60px;
`;

export {
  Wrapper,
  Backdrop,
  Inner,
  Header,
  LogoWrapper,
  LogoLink,
  ToggleButton,
  Navigation,
};
