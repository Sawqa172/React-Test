import styled from 'styled-components/macro';
import { media } from 'styles/media';

const BackgroundOverlay = styled.button`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  outline: none;
  border: none;
`;

const Modal = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 420px;
  height: auto;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  padding: 15px;
  background-color: ${p => p.theme.colors.mainWhite};
  box-shadow: ${p => p.theme.boxShadows.layout};

  ${media.medium`
    padding: 30px;
  `}
`;

const Caption = styled.div`
  font-family: ${p => p.theme.fontFamily.CocoGothicRegular};
  font-size: 18px;
  line-height: 135%;
  color: ${p => p.theme.colors.primary};

  ${media.medium`
    font-size: 24px;
  `}
`;

const Content = styled.div`
  margin-top: 15px;

  ${media.medium`
    margin-top: 30px;
  `}
`;

const CloseButton = styled.button`
  position: absolute;
  width: 55px;
  height: 55px;
  top: 0;
  right: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;

  ${media.medium`
    width: 85px;
    height: 85px;
  `}
`;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  &:hover {
    ${Modal} {
      display: block;
    }
  }
`;

export { Wrapper, Modal, Caption, Content, CloseButton, BackgroundOverlay };
