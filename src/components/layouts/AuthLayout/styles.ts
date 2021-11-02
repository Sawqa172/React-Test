import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { BackgroundProps } from './types';

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  height: 100vh;
  background-color: ${p => p.theme.colors.mainBlue};

  ${media.medium`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  `}
`;

const Content = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5% 15px;

  ${media.medium`
    height: auto;
    flex: 0 0 50%;
    padding: 5% 80px;
  `}
`;

const handleBg = (pathname: string) => {
  const rootBgPath = process.env.PUBLIC_URL + '/images/auth/backgrounds';

  switch (pathname) {
    case '/auth/login':
      return `${rootBgPath}/login-bg.jpeg`;
    case '/auth/sign-up':
      return `${rootBgPath}/sign-up-bg.jpeg`;
    case '/password/restore':
      return `${rootBgPath}/restore-password-bg.jpeg`;
    case '/password/reset':
      return `${rootBgPath}/reset-password-bg.jpeg`;
    default:
      return '';
  }
};

const Background = styled.div<BackgroundProps>`
  position: relative;
  display: none;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${p => handleBg(p.pathname)});
  transition: background 0.5s;

  ${media.medium`
    display: block;
    flex: 0 0 50%;
  `}
`;

export { Wrapper, Content, Background };
