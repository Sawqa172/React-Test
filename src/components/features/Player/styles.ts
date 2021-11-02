import styled from 'styled-components';

interface WrapperProps {
  readonly screenFullActive: boolean;
  readonly fullscreenFallbackEnabled: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;

  ${p =>
    p.screenFullActive
      ? `
    position: static;
    padding-bottom: 0;
  `
      : null}

  ${p =>
    p.fullscreenFallbackEnabled
      ? `
    position: fixed;
    padding-bottom: 0;
    top: 0%;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 13;
    background-color: transparent;
  `
      : null}   
  & > .react-player {
    position: absolute;
    z-index: 0;
    top: 0;
    width: auto;
    left: 50%;
    transform: translateX(-50%);
    video {
      outline: 4px solid white;
      outline-offset: -2px;
    }
  }
`;

export { Wrapper };
